import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NiceSelect from './NiceSelect';
import MobileMenu from './MobileMenu';
import LoginForm from './LoginForm';

function HeaderOne() {
    // const languageOptions = [
    //     { value: "language", label: "Language" },
    //     { value: "CNY", label: "CNY" },
    //     { value: "EUR", label: "EUR" },
    //     { value: "AUD", label: "AUD" },
    // ];
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {/*============================== Header Area ==============================*/}
            <header className="th-header header-layout1">
                <div className="header-top">
                    <div className="container th-container">
                        <div className="row justify-content-center justify-content-xl-between align-items-center">
                            <div className="col-auto d-none d-md-block">
                              
                            </div>
                            <div className="col-auto">
                                <div className="header-right">
                                    {/* <div className="currency-menu">
                                        <NiceSelect options={languageOptions} defaultValue="Language" />
                                    </div> */}

                                    {/* <div className="header-links">
                                        <ul>
                                             <li className="d-none d-md-inline-block">
                                                <Link to="/faq">FAQ</Link>
                                            </li> 
                                             <li className="d-none d-md-inline-block">
                                                <Link to="/contact">Support</Link>
                                            </li> 
                                            <li>
                                                <button
                                                    type="button"
                                                    onClick={() => setIsLoginFormOpen(true)}
                                                >
                                                    Sign In / Register
                                                    <i className="fa-regular fa-user" />
                                                </button>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`sticky-wrapper ${isSticky ? "sticky" : ""}`}>
                    {/* Main Menu Area */}
                    <div className="menu-area">
                        <div className="container th-container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-auto">
                                    <div className="header-logo">
                                        <Link to="/">
                                            <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="VOJM" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-auto me-xl-auto">
                                    <nav className="main-menu d-none d-xl-inline-block">
                                        <ul>
                                        <li>
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/about">About Us</Link>
                                            </li>
                                            {/* <li>
                                            <Link to="/gallery">Gallery</Link>
                                            </li> */}
                                          
                                       
{/*                                        
                                            <li className="menu-item-has-children">
                                                <Link to="#">Pages</Link>
                                                <ul className="sub-menu">
                                                    <li className="menu-item-has-children">
                                                        <Link to="#">Shop</Link>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <Link to="/shop">Shop</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/shop/1">Shop Details</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/cart">Cart Page</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/checkout">Checkout</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/wishlist">Wishlist</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <Link to="/gallery">Gallery</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/tour">Our Tour</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/tour-details">Tour Details</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/resort">Resort page</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/resort/1">Resort Details</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/tour-details">Tour Details</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/tour-guide">Tour Guider</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/tour-guide/1">
                                                            Tour Guider Details
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/faq">Faq Page</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/price">Price Package</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/error">Error Page</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                         */}
                                           
                                            <li>
                                            <a href="https://jvprophecy.vincentselvakumar.org/login" target="_blank" rel="noopener noreferrer">
                                            Prophecies</a>
                                            </li>
                                            <li>
                                                <a href="https://www.vincentselvakumarbooks.com/bookstore" target="_blank" rel="noopener noreferrer">
                                                Books 
                                                </a> </li>
                                                <li>
                                                <Link to="/contact">Contact us</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <button
                                        type="button"
                                        className="th-menu-toggle d-block d-xl-none"
                                        onClick={() => setIsMobileMenuOpen(true)}
                                    >
                                        <i className="far fa-bars" />
                                    </button>
                                </div>
                                <div className="col-auto d-none d-xl-block">
                                    <div className="header-button">
                                        <Link to="/price" className="th-btn style3 th-icon">
                                            Donate
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="logo-bg bg-mask"
                            style={{
                                WebkitMaskImage: "url(/assets/img/logo_bg_mask.png)",
                                maskImage: "url(/assets/img/logo_bg_mask.png)"
                            }} />
                    </div>
                </div>
            </header>
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
            <LoginForm isOpen={isLoginFormOpen} onClose={() => setIsLoginFormOpen(false)} />
        </>

    )
}

export default HeaderOne
