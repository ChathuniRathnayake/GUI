import React from "react";
import Header from "../../Components/Header/Header";
import SideNavigation from "../../Components/SideNavigation/SideNavigation";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./SiteHome.css";

export default function SiteHome() {
  return (
    <main className="all">
      <Header />
      <div className="contentContainer">
        <SideNavigation />
        <div className="mainContent">
          <p className="welcome">Welcome to ElevatEd!</p>
          <p className="available">Available courses</p>
          <div className="productGrid">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </main>
  );
}
