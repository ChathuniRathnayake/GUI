import React from 'react';
import './Dashboard.css'; // Updated to import the plain CSS file
//import './CourseCard';
//import './ProgressBar';
//import './ProfileInfo';

const courses = [
  'HTML\nfor\nBeginners'
];

const progressData = [
  { progress: 80 }
];

const profileData = [
  { label: 'Name', value: 'Chathuni Rathnayake' },
  { label: 'User name', value: 'Chathuni5291' },
  { label: 'Email address', value: 'chathuniratnayake@gmail.com' }
];

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="header">
        <div className="logo">E</div>
        <h1 className="platformTitle">ElevatEd - E-learning Platform</h1>
        <div className="userInfo">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd92665210d20b020830dbfb07744720d40a8333ea96946b6f9e8065ce70b8d0?placeholderIfAbsent=true&apiKey=a758d963065447fbbb07b22e1d316b48"
            alt="User profile"
            className="userAvatar"
          />
          <span className="userName">Chathuni Rathnayake</span>
        </div>
      </header>

      <div className="mainContent">
        <nav className="sidebar">
          <div className="navItem">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a76d9624ec56fb8518bcfc97f324f1e6658bd7283631194c21698131a84af61?placeholderIfAbsent=true&apiKey=a758d963065447fbbb07b22e1d316b48"
              alt=""
              className="navIcon"
            />
            <span>Dashboard</span>
          </div>
          <div className="navItem">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7faef099559d8316f3af61532ca5e0a191bc66b059c8624bea66a350e117699c?placeholderIfAbsent=true&apiKey=a758d963065447fbbb07b22e1d316b48"
              alt=""
              className="navIcon"
            />
            <span>Site Home</span>
          </div>
        </nav>

        <main className="content">
          <h2 className="sectionTitle">Enrolled courses</h2>
          <div className="courseGrid">
            {courses.map((course, index) => (
              <CourseCard key={index} title={course} />
            ))}
          </div>

          <div className="progressSection">
            {progressData.map((data, index) => (
              <ProgressBar key={index} progress={data.progress} />
            ))}
          </div>

          <section className="profileSection">
            <h2 className="profileTitle">Profile</h2>
            <div className="profileContent">
              <aside className="settingsPanel">
                <h3 className="settingsTitle">Settings</h3>
                <button className="settingsButton">Change password</button>
                <button className="settingsButton">Change profile picture</button>
              </aside>

              <div className="profileImage" role="img" aria-label="Profile picture" />

              <div className="profileDetails">
                {profileData.map((item, index) => (
                  <ProfileInfo key={index} label={item.label} value={item.value} />
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
export default Dashboard;
