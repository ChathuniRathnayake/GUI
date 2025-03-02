import express from "express";
import cors from "cors";
import path from "path";
import multer from "multer";
import fs from "fs";
import { fileURLToPath } from "url";
import sqlite3 from "sqlite3";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const db = new sqlite3.Database('database.db', (err) => {
  if (err) console.error("Error connecting to database:", err.message);
  else console.log("Connected to SQLite.");
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price REAL NOT NULL,
    image_url TEXT
  );
`;
db.run(createTableQuery);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath);
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

app.get('/', (req, res) => res.json("Backend for ElevatEd"));

// Get all courses
app.get('/courses', (req, res) => {
  db.all('SELECT * FROM courses', [], (err, rows) => {
    if (err) res.status(500).json({ error: err.message });
    else res.json(rows);
  });
});

// Get course by ID
app.get('/courses/:id', (req, res) => {
  db.get('SELECT * FROM courses WHERE id = ?', [req.params.id], (err, row) => {
    if (err) res.status(500).json({ error: err.message });
    else if (!row) res.status(404).json({ message: "Course not found." });
    else res.json(row);
  });
});

// Create a new course
app.post('/courses', upload.single('image'), (req, res) => {
  const { name, description, price } = req.body;
  const image_url = req.file ? `/uploads/${req.file.filename}` : null;

  if (!name || !price) {
    return res.status(400).json({ error: "Name and price are required." });
  }

  const query = `INSERT INTO courses (name, description, price, image_url) VALUES (?, ?, ?, ?)`;
  db.run(query, [name, description, price, image_url], function (err) {
    if (err) res.status(500).json({ error: err.message });
    else res.status(201).json({ id: this.lastID });
  });
});

// Update a course
app.put('/courses/:id', upload.single('image'), (req, res) => {
  const { name, description, price } = req.body;
  const image_url = req.file ? `/uploads/${req.file.filename}` : null;

  const query = `
    UPDATE courses
    SET name = COALESCE(?, name),
        description = COALESCE(?, description),
        price = COALESCE(?, price),
        image_url = COALESCE(?, image_url)
    WHERE id = ?
  `;

  db.run(query, [name, description, price, image_url, req.params.id], function (err) {
    if (err) res.status(500).json({ error: err.message });
    else if (this.changes === 0) res.status(404).json({ message: "Course not found." });
    else res.json({ message: "Course updated successfully." });
  });
});

// Delete a course
app.delete('/courses/:id', (req, res) => {
  db.run('DELETE FROM courses WHERE id = ?', [req.params.id], function (err) {
    if (err) res.status(500).json({ error: err.message });
    else if (this.changes === 0) res.status(404).json({ message: "Course not found." });
    else res.json({ message: "Course deleted successfully." });
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
