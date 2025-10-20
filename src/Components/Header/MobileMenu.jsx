import React from 'react';
import { Link } from 'react-router-dom';

function MobileMenu({ isOpen, onClose }) {
  return (
    <div
      className={`th-menu-wrapper onepage-nav ${isOpen ? "th-body-visible" : ""}`}
      style={{ visibility: isOpen ? "visible" : "hidden" }}
    >
      <div className="th-menu-area text-center">
        <button className="th-menu-toggle" onClick={onClose} aria-label="Close">
          <i className="fas fa-times" />
        </button>

        <div className="mobile-logo">
          <Link to="/">
            <img src="https://www.vincentselvakumar.org/assets/img/logo.png" alt="VOJM" />
          </Link>
        </div>

        <div className="th-mobile-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
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
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/donate">Donate</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
