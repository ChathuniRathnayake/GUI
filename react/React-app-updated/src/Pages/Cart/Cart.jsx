import React from "react";
import Header from "../../Components/Header/Header";
import SideNavigation from "../../Components/SideNavigation/SideNavigation";
import './Cart.css'

export default function Cart(){
  return(
    <main className="all">
      <Header/>
      <div className="contentContainer">
        <SideNavigation />
      

      </div>
    </main>
  );

}