import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MobileMenu({ isOpen, onClose }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeShopMenu, setActiveShopMenu] = useState(false); // Shop submenu state
  const menuRefs = useRef({});

  // Toggle dropdown menu
  const toggleMenu = (index) => {
    if (index !== 6) {
      setActiveMenu(activeMenu === index ? null : index);
    }
  };

  // Handle Shop menu separately
  const toggleShopMenu = (e) => {
    e.stopPropagation(); // Prevent menu from closing
    setActiveShopMenu(!activeShopMenu);
  };

  // Apply height animation when activeMenu changes
  useEffect(() => {
    Object.keys(menuRefs.current).forEach((key) => {
      const submenu = menuRefs.current[key];
      if (submenu) {
        submenu.style.height = activeMenu == key ? `${submenu.scrollHeight}px` : "0px";
      }
    });
  }, [activeMenu]);

  return (
    <div
      className={`th-menu-wrapper onepage-nav ${isOpen ? "th-body-visible" : ""}`}
      style={{ visibility: isOpen ? "visible" : "hidden" }}
    >
      <div className="th-menu-area text-center">
        <button className="th-menu-toggle" onClick={onClose} aria-label="Close">
          <i className="fal fa-times" />
        </button>

        <div className="mobile-logo">
          <Link to="/">
            <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="VOJM" />
          </Link>
        </div>

        <div className="th-mobile-menu">
          <ul>
            {/* Home */}
            <li>
              <Link to="/">Home</Link>
            </li>

            {/* About Us */}
            <li>
              <Link to="/about">About Us</Link>
            </li>

            {/* External Links */}
            <li>
              <a
                href="https://jvprophecy.vincentselvakumar.org/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prophecies
              </a>
            </li>
            <li>
              <a
                href="https://www.vincentselvakumarbooks.com/bookstore"
                target="_blank"
                rel="noopener noreferrer"
              >
                Books
              </a>
            </li>

            {/* Contact */}
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>

            {/* Donate */}
            <li>
              <Link to="/donate">Donate</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
