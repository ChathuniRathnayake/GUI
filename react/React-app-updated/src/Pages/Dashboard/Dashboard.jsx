import React from "react";
import Header from "../../Components/Header/Header";
import SideNavigation from "../../Components/SideNavigation/SideNavigation";
import './Dashboard.css';

const profileData = [
  { label: "Name:", value: "Chathuni Rathnayake" },
  { label: 'User name:', value: 'Chathuni5291' },
  { label: 'Email address:', value: 'chathuniratnayake@gmail.com' }
];


export default function Dashboard() {
  return (
    <main className="all">
        <Header />
      <div className="contentContainer">
          <SideNavigation />
        </div>

        <div>
          <p className="enrolledCourses">No enrolled courses yet</p>
        </div>

        
        <h2 className="title">
        Profile
        </h2>

        <div className="alldetails">
          <div>
          <h3 className="settingsTitle">Settings</h3>
          <button className="changeUsername">Change user name</button>
          </div>
        
        <img src="/images/profile.jpg" className="profilepic"></img>

        <div className="profile-box">
      {profileData.map((item, index) => (
        <div key={index} className="profile-item">
          <div className="profile-label">{item.label}</div> {item.value}
        </div>
      ))}
    </div>
        </div>
        
      
    </main>
    
  );
}


