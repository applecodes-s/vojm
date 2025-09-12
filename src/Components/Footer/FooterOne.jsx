import React from 'react'
import { Link } from 'react-router-dom'

function FooterOne() {
    return (
        <footer className="footer-wrapper footer-layout1">
            <div className="widget-area">
                <div className="container">
                    <div className="newsletter-area">
                        <div className="newsletter-top">
                            <div className="row gy-4 align-items-center">
                                <div className="col-lg-5">
                                    <h2 className="newsletter-title text-capitalize mb-0">
                                    Get Updated with the Latest Books & Sermons!
                                    </h2>
                                </div>
                                <div className="col-lg-7">
                                    <form className="newsletter-form">
                                        <input
                                            className="form-control "
                                            type="email"
                                            placeholder="Enter Email"
                                            required=""
                                        />
                                        <button type="submit" className="th-btn style3">
                                            Subscribe Now <img src={process.env.PUBLIC_URL + "/assets/img/icon/plane.svg"} alt="" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-md-6 col-xl-3">
                            <div className="widget footer-widget">
                                <div className="th-widget-about">
                                    <div className="about-logo">
                                        <Link to="/">
                                            <img src={process.env.PUBLIC_URL + "/assets/img/logo-white.png"} alt="Tourm" />
                                        </Link>
                                    </div>
                                    <p className="about-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                         Eligendi enim non laborum amet consequatur fugit perferendis temporibuss.
                                    </p>
                                    <div className="th-social">
    <a href="https://www.facebook.com/vincentselvakumar.org/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f" />
    </a>
    <a href="https://x.com/vsk_prophecies?lang=en" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter" />
    </a>
    <a href="https://www.youtube.com/@VincentSelvakumar" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-youtube" />
    </a>
    <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp" />
    </a>
    <a href="https://www.instagram.com/vincentselvakumaar/?hl=en" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram" />
    </a>
</div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title">Quick Links</h3>
                                <div className="menu-all-pages-container">
                                    <ul className="menu">
                                        <li>
                                       
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">About us</Link>
                                        </li>
                                        <li>
                                        <a href="https://www.youtube.com/@VincentSelvakumar" target="_blank" rel="noopener noreferrer"> Sermons</a>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Send us your Prayer Request</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget footer-widget">
                                <h3 className="widget_title">Address</h3>
                                <div className="th-widget-contact">
                                    <div className="info-box_text">
                                        <div className="icon">
                                            <img src={process.env.PUBLIC_URL + "/assets/img/icon/phone.svg"} alt="img" />
                                        </div>
                                        <div className="details">
                                            <p>
                                                <Link to="tel:+91 9731722977" className="info-box_link">
                                                +91 9731722977
                                                </Link>
                                            </p>
                                            
                                        </div>
                                    </div>
                                    <div className="info-box_text">
                                        <div className="icon">
                                            <img src={process.env.PUBLIC_URL + "/assets/img/icon/envelope.svg"} alt="img" />
                                        </div>
                                        <div className="details">
                                            <p>
                                                <Link
                                                    to="mailto:vojmedia@gmail.com"
                                                    className="info-box_link"
                                                >
                                                    vojmedia@gmail.com
                                                </Link>
                                            </p>
                                            <p>
                                                <Link
                                                    to="mailto:info@vincentselvakumaar.org"
                                                    className="info-box_link"
                                                >
                                                    info@vincentselvakumaar.org
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info-box_text">
                                        <div className="icon">
                                            <img src={process.env.PUBLIC_URL + "/assets/img/icon/location-dot.svg"} alt="img" />
                                        </div>
                                        <div className="details">
                                            <p>Voice Of Jesus Media Bangalore India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget footer-widget">
                                <h3 className="widget_title">Instagram Post</h3>
                                <div className="sidebar-gallery">
                                    <div className="gallery-thumb">
                                    <a
        href="https://www.vincentselvakumarbooks.com/product-page/satan-s-gateway"
        target="_blank"
        rel="noopener noreferrer"
    >
        <img src={process.env.PUBLIC_URL + "/assets/img/widget/gallery_1_1.jpg"} alt="Book Cover" />
    </a>
    <a
        href="https://www.vincentselvakumarbooks.com/product-page/satan-s-gateway"
        target="_blank"
        rel="noopener noreferrer"
        className="gallery-btn"
    >
        <i className="fas fa-shopping-bag" />
    </a>
                                    </div>
                                    <div className="gallery-thumb">
                                    <a
        href="https://www.vincentselvakumarbooks.com/product-page/satan-s-gateway-english"
        target="_blank"
        rel="noopener noreferrer"
    >
        <img src={process.env.PUBLIC_URL + "/assets/img/widget/gallery_1_2.jpg"} alt="Book Cover" />
    </a>
    <a
        href="https://www.vincentselvakumarbooks.com/product-page/satan-s-gateway-english"
        target="_blank"
        rel="noopener noreferrer"
        className="gallery-btn"
    >
        <i className="fas fa-shopping-bag" />
    </a>
                                    </div>
                                    <div className="gallery-thumb">
                                    <a
        href="https://www.vincentselvakumarbooks.com/product-page/revival-enemies-tamil"
        target="_blank"
        rel="noopener noreferrer"
    >
        <img src={process.env.PUBLIC_URL + "/assets/img/widget/gallery_1_3.jpg"} alt="Book Cover" />
    </a>
    <a
        href="https://www.vincentselvakumarbooks.com/product-page/revival-enemies-tamil"
        target="_blank"
        rel="noopener noreferrer"
        className="gallery-btn"
    >
        <i className="fas fa-shopping-bag" />
    </a>
                                    </div>
                                    <div className="gallery-thumb">
                                    <a
        href="https://www.vincentselvakumarbooks.com/product-page/revival-enemies"
        target="_blank"
        rel="noopener noreferrer"
    >
        <img src={process.env.PUBLIC_URL + "/assets/img/widget/gallery_1_4.jpg" }alt="Book Cover" />
    </a>
    <a
        href="https://www.vincentselvakumarbooks.com/product-page/revival-enemies"
        target="_blank"
        rel="noopener noreferrer"
        className="gallery-btn"
    >
        <i className="fas fa-shopping-bag" />
    </a>
                                    </div>
                                    <div className="gallery-thumb">
                                    <a
        href="https://www.vincentselvakumarbooks.com/product-page/thallupadiyagama-kathaigal"
        target="_blank"
        rel="noopener noreferrer"
    >
        <img src={process.env.PUBLIC_URL + "/assets/img/widget/gallery_1_5.jpg"} alt="Book Cover" />
    </a>
    <a
        href="https://www.vincentselvakumarbooks.com/product-page/thallupadiyagama-kathaigal"
        target="_blank"
        rel="noopener noreferrer"
        className="gallery-btn"
    >
        <i className="fas fa-shopping-bag" />
    </a>
                                    </div>
                                    <div className="gallery-thumb">
                                    <a
        href="https://www.vincentselvakumarbooks.com/product-page/echarikkai-cheithigal"
        target="_blank"
        rel="noopener noreferrer"
    >
        <img src={process.env.PUBLIC_URL + "/assets/img/widget/gallery_1_6.jpg" }alt="Book Cover" />
    </a>
    <a
        href="https://www.vincentselvakumarbooks.com/product-page/echarikkai-cheithigal"
        target="_blank"
        rel="noopener noreferrer"
        className="gallery-btn"
    >
        <i className="fas fa-shopping-bag" />
    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="copyright-wrap background-image"
                style={{ backgroundImage: "url('/assets/img/bg/copyright_bg_1.jpg')" }}
            >
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-6">
                            <p className="copyright-text">
                                Copyright 2025 <Link to="/">VOJM</Link>. All Rights
                                Reserved.
                            </p>
                        </div>
                        <div className="col-md-6 text-end d-none d-md-block">
                            <div className="footer-card">
                            <p className="copyright-text">
                                made width  ❤️ from VOJM
                            </p>
                                {/* <span className="title">We Accept</span> */}
                                {/* <img src={process.env.PUBLIC_URL + "/assets/img/shape/cards.png" alt="" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>

    )
}

export default FooterOne
