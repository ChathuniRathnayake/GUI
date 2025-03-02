import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPage/LoginPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SignUp from "./Pages/SignUpPage/SignUpPage";
import SiteHome from "./Pages/SiteHome/SiteHome";
import Cart from "./Pages/Cart/Cart";


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home" element={<SiteHome />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
