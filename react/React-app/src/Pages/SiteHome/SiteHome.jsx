import React from "react";
import Header from "./Components/Header/Header";
import SideNavigation from "./Components/SideNavigation/SideNavigation";
import ProductCard from "./Components/ProductCard/ProductCard"
import './SiteHome.css'

export default function SiteHome(){
  return(
    <main className="all">
      <Header/>
      <div className="contentContainer">
        <SideNavigation />
      <div>
        <p className="welcome">Welcome to ElevatEd!</p>
        
      </div>
      <div>
        <p className="available">Available courses</p>
      </div>
      <div className="productCard1">
      <ProductCard/>
      </div>
      <div className="productCard2">
      <ProductCard/>
      </div>
      <div className="productCard3">
      <ProductCard/>
      </div>
      <div className="productCard4">
      <ProductCard/>
      </div>

      </div>
    </main>
  );

}