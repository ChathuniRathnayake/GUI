import React from 'react';
import styles from './Dashboard.module.css';
import { CourseCard } from './CourseCard';
import { ProgressBar } from './ProgressBar';
import { ProfileInfo } from './ProfileInfo';

const courses = [
  'HTML\nfor\nBeginners',
  'C++\nfor\nBeginners',
  'JavaScript\nfor\nBeginners'
];

const progressData = [
  { progress: 79 },
  { progress: 115 },
  { progress: 148 }
];

const profileData = [
  { label: 'Name', value: 'Chathuni Rathnayake' },
  { label: 'User name', value: 'Chathuni5291' },
  { label: 'Email address', value: 'chathuniratnayake@gmail.com' }
];

export const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <div className={styles.logo}>E</div>
        <h1 className={styles.platformTitle}>ElevatEd - E-learning Platform</h1>
        <div className={styles.userInfo}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd92665210d20b020830dbfb07744720d40a8333ea96946b6f9e8065ce70b8d0?placeholderIfAbsent=true&apiKey=a758d963065447fbbb07b22e1d316b48"
            alt="User profile"
            className={styles.userAvatar}
          />
          <span className={styles.userName}>Chathuni Rathnayake</span>
        </div>
      </header>

      <div className={styles.mainContent}>
        <nav className={styles.sidebar}>
          <div className={styles.navItem}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a76d9624ec56fb8518bcfc97f324f1e6658bd7283631194c21698131a84af61?placeholderIfAbsent=true&apiKey=a758d963065447fbbb07b22e1d316b48"
              alt=""
              className={styles.navIcon}
            />
            <span>Dashboard</span>
          </div>
          <div className={styles.navItem}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7faef099559d8316f3af61532ca5e0a191bc66b059c8624bea66a350e117699c?placeholderIfAbsent=true&apiKey=a758d963065447fbbb07b22e1d316b48"
              alt=""
              className={styles.navIcon}
            />
            <span>Site Home</span>
          </div>
        </nav>

        <main className={styles.content}>
          <h2 className={styles.sectionTitle}>Enrolled courses</h2>
          <div className={styles.courseGrid}>
            {courses.map((course, index) => (
              <CourseCard key={index} title={course} />
            ))}
          </div>

          <div className={styles.progressSection}>
            {progressData.map((data, index) => (
              <ProgressBar key={index} progress={data.progress} />
            ))}
          </div>

          <section className={styles.profileSection}>
            <h2 className={styles.profileTitle}>Profile</h2>
            <div className={styles.profileContent}>
              <aside className={styles.settingsPanel}>
                <h3 className={styles.settingsTitle}>Settings</h3>
                <button className={styles.settingsButton}>Change password</button>
                <button className={styles.settingsButton}>Change profile picture</button>
              </aside>

              <div className={styles.profileImage} role="img" aria-label="Profile picture" />

              <div className={styles.profileDetails}>
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