import React from 'react';
import './SideNavigation.css';

const navigationItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a76d9624ec56fb8518bcfc97f324f1e6658bd7283631194c21698131a84af61?placeholderIfAbsent=true&apiKey=a758d963065447fbbb07b22e1d316b48",
    text: "Dashboard",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7faef099559d8316f3af61532ca5e0a191bc66b059c8624bea66a350e117699c?placeholderIfAbsent=true&apiKey=a758d963065447fbbb07b22e1d316b48",
    text: "Site Home",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1842b7d70169f6380982781ad49db6d84b67108845a28e6544a45c9556ded9f2?placeholderIfAbsent=true&apiKey=a758d963065447fbbb07b22e1d316b48",
    text: "Cart",
    count: "0",
  },
];

export default function SideNavigation() {
  return (
    <nav className="sideNav">
      <div className="navContainer">
        {navigationItems.map(({ icon, text, count }) => (
          <div className="navigationItem" key={text}>
            <img
              loading="lazy"
              src={icon}
              alt={text}
              className="navigationIcon"
            />
            <div className="navigationText">{text}</div>
            {count !== undefined && <div className="cartCount">{count}</div>}
          </div>
        ))}
      </div>
    </nav>
  );
}
