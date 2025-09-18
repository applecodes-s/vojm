import React from 'react'
import { Link } from 'react-router-dom'

function GetInTouch() {
    return (
        <div className="space">
            <div className="container">
                <div className="title-area text-center">
                    <span className="sub-title">Get In Touch</span>
                    <h2 className="sec-title">Our Contact Information</h2>
                </div>
                <div className="row gy-4 justify-content-center">
                    <div className="col-xl-4 col-lg-6">
                        <div className="about-contact-grid style2">
                            <div className="about-contact-icon">
                                <img src={"https://www.vincentselvakumar.org/assets/img/icon/location-dot2.svg"} alt="" />
                            </div>
                            <div className="about-contact-details">
                                <h6 className="box-title">Our Address</h6>
                                <p className="about-contact-details-text">
                                    Voice Of Jesus Media
                                    
                                </p>
                                <p className="about-contact-details-text">Bangalore, India</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className="about-contact-grid">
                            <div className="about-contact-icon">
                                <img src={"https://www.vincentselvakumar.org/assets/img/icon/call.svg"} alt="" />
                            </div>
                            <div className="about-contact-details pb-4">
                                <h6 className="box-title">Phone Number</h6>
                                <p className="about-contact-details-text">
                                    <Link to="tel:9731722977">+91 97317 22977</Link>
                                </p>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        <div className="about-contact-grid">
                            <div className="about-contact-icon">
                                <img src={"https://www.vincentselvakumar.org/assets/img/icon/mail.svg"} alt="" />
                            </div>
                            <div className="about-contact-details">
                                <h6 className="box-title">Email Address</h6>
                                <p className="about-contact-details-text">
                                    <Link to="mailto:prayers@vincentselvakumaar.org">prayers@vincentselvakumaar.org</Link>
                                </p>
                                <p className="about-contact-details-text">
                                    <Link to="mailto:info@vincentselvakumaar.org">info@vincentselvakumaar.org</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GetInTouch
