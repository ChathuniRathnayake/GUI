import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../Components/Header/Header";
import SideNavigation from "../../Components/SideNavigation/SideNavigation";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useCart } from "../../Context/CartContext";
import "./Course.css";

export default function Course() {
    const { onAddToCart } = useCart();
    const [courses, setCourses] = useState([]);

    // Fetch courses from inventory
    const fetchCourses = async () => {
        try {
            const response = await axios.get("http://localhost:3000/courses");
            setCourses(response.data);
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <main className="all">
            <Header />
            <div className="contentContainer">
                <SideNavigation />
                <div className="mainContent">
                    <p className="welcome">Welcome to ElevatEd!</p>
                    <p className="available">Available Courses</p>
                    <div className="productGrid">
                        {courses.length > 0 ? (
                            courses.map((course) => (
                                <ProductCard
                                    key={course.id}
                                    course={course}
                                    onAddToCart={onAddToCart}
                                />
                            ))
                        ) : (
                            <p className="noCourses">No courses available.</p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
