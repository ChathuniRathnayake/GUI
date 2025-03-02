import axios from "axios";
import { useEffect, useState } from "react";
import './Inventory.css';

const Inventory = () => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
  });
  const [courseId, setCourseId] = useState("");
  const [message, setMessage] = useState("");

  const API_URL = "http://localhost:3000/courses";

  // Fetch all courses
  const fetchCourses = async () => {
    try {
      const response = await axios.get(API_URL);
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", course.name);
    formData.append("description", course.description);
    formData.append("price", course.price);
    if (course.image) formData.append("image", course.image);

    try {
      if (courseId) {
        await axios.put(`${API_URL}/${courseId}`, formData);
        setMessage("Course updated successfully!");
      } else {
        await axios.post(API_URL, formData);
        setMessage("Course created successfully!");
      }
      fetchCourses();
      setCourse({ name: "", description: "", price: "", image: null });
      setCourseId("");
    } catch (error) {
      console.error("Error creating/updating course:", error);
    }
  };

  // Delete course
  const deleteCourse = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setMessage("Course deleted successfully!");
      fetchCourses();
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Course Inventory</h1>

      {message && <p className="message">{message}</p>}

      <form onSubmit={handleFormSubmit} className="form">
        <input type="text" placeholder="Name" value={course.name} onChange={(e) => setCourse({ ...course, name: e.target.value })} required />
        <input type="text" placeholder="Description" value={course.description} onChange={(e) => setCourse({ ...course, description: e.target.value })} required />
        <input type="number" placeholder="Price" value={course.price} onChange={(e) => setCourse({ ...course, price: e.target.value })} required />
        <input type="file" onChange={(e) => setCourse({ ...course, image: e.target.files[0] })} />
        <button type="submit" className="btn">{courseId ? "Update" : "Create"} Course</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.description}</td>
              <td>${c.price}</td>
              <td>{c.image_url && <img src={`http://localhost:3000${c.image_url}`} alt={c.name} className="course-image" />}</td>
              <td>
                <button className="edit-btn" onClick={() => { setCourseId(c.id); setCourse({ name: c.name, description: c.description, price: c.price, image: null }); }}>Edit</button>
                <button className="delete-btn" onClick={() => deleteCourse(c.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
