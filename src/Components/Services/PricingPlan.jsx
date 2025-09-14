import React from 'react'
import { Link } from 'react-router-dom'

function PricingPlan({className}) {
    return (
        <section className={`position-relative ${className}`}>
            <div className="container shape-mockup-wrap">
                <div className="title-area text-center">
                    {/* <span className="sub-title">Lorem, ipsum.</span> */}
                    <h2 className="sec-title">Support Us with Your Donation</h2>
                </div>
                <div className="row gy-4 justify-content-center">
                    <div className="col-xl-4 col-md-6">
                        <div className="price-card ">
                            {/* <div className="offer-tag">Popular</div> */}
                            <div className="price-card_wrapp">
                                {/* <div className="price-card_icon">
                                    <img src={process.env.PUBLIC_URL + "assets/img/icon/price_1_1.svg"} alt="img" />
                                </div> */}
                                <h3 className="box-title">AXIS Bank</h3>
                            </div>
                            <div className="price-card_content">
                                {/* <h4 className="price-card_price">
                                     Bank Transfer Details
                                </h4> */}
                                {/* <p className="price-card_text">
                                    Essential services for basic and signle person seeking.
                                </p> */}
                                <div className="checklist">
                                    <ul>
                                    <li><strong>Bank Name:</strong> AXIS Bank</li>
                                    <li><strong>Account Name:</strong> Vincent Selvakumar</li>
                                    <li><strong>Account Number:</strong> 9100 1002 2737 183</li>
                                    <li><strong>IFSC Code:</strong> UTIB0001080</li>
                                    <li><strong>Branch:</strong> Ramanathapuram, TN</li>
                                    </ul>
                                </div>
                                <div className="qr-code mt-3 text-center">

    <img
      src={process.env.PUBLIC_URL + "/assets/img/qr.png"}
      alt="AXIS Bank QR"
      style={{ maxWidth: "150px" }}
    />
  </div>
                            </div>
                            <div className="price-btn">
                                <Link to="/contact" className="th-btn style3 w-100">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="price-card ">
                            {/* <div className="offer-tag">Popular</div> */}
                            <div className="price-card_wrapp">
                                {/* <div className="price-card_icon">
                                    <img src={process.env.PUBLIC_URL + "assets/img/icon/price_1_1.svg"} alt="img" />
                                </div> */}
                                <h3 className="box-title">ICICI Bank</h3>
                            </div>
                            <div className="price-card_content">
                                {/* <h4 className="price-card_price">
                                    Bank Transfer Details
                                </h4> */}
                                {/* <p className="price-card_text">
                                    Essential services for basic and signle person seeking.
                                </p> */}
                                <div className="checklist">
                                    <ul>
                                    <li><strong>Bank Name:</strong> ICICI Bank</li>
                                    <li><strong>Account Name:</strong> Vincent Selvakumar</li>
                                    <li><strong>Account Number:</strong> 02960 100 3735</li>
                                    <li><strong>IFSC Code:</strong> ICIC0000296</li>
                                    <li><strong>Branch:</strong> Rajajinagar, Bangalore</li>
                                    </ul>
                                </div>
                                <div className="qr-code mt-3 text-center">
    <img
      src={process.env.PUBLIC_URL + "/assets/img/qr.png"}
      alt="AXIS Bank QR"
      style={{ maxWidth: "150px" }}
    />
  </div>
                            </div>
                            <div className="price-btn">
                                <Link to="/contact" className="th-btn style3 w-100">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-xl-4 col-md-6">
                        <div className="price-card ">
                            <div className="offer-tag">Popular</div>
                            <div className="price-card_wrapp">
                                <div className="price-card_icon">
                                    <img src={process.env.PUBLIC_URL + "assets/img/icon/price_1_3.svg" alt="img" />
                                </div>
                                <h3 className="box-title">Premium Plan</h3>
                            </div>
                            <div className="price-card_content">
                                <h4 className="price-card_price">
                                    $1580.00<span className="duration">/Per Night</span>
                                </h4>
                                <p className="price-card_text">
                                    Essential services for basic and signle person seeking.
                                </p>
                                <div className="checklist">
                                    <ul>
                                        <li>Up to 2 members</li>
                                        <li>Room Service Fees</li>
                                        <li>Driver Service Feet</li>
                                        <li>Tour management</li>
                                        <li>Collaboration</li>
                                        <li>Entrance Fees</li>
                                        <li> Auto refresh ads</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="price-btn">
                                <Link to="/contact" className="th-btn style3 w-100">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div
                    className="shape-mockup movingX d-none d-xxl-block"
                    style={{ bottom: "0%", right: "-18%" }}
                >
                    <img
                        className="gmovingX"
                        src={process.env.PUBLIC_URL + "assets/img/normal/about-slide-img.png"}
                        alt="shape"
                    />
                </div>
                <div
                    className="shape-mockup d-none d-xl-block"
                    style={{ bottom: "-13%", left: "-16%" }}
                >
                    <img src={process.env.PUBLIC_URL + "assets/img/shape/shape_6.png"} alt="shape" />
                </div>
                <div
                    className="shape-mockup jump d-none d-xl-block"
                    style={{ top: "15%", left: "-10%" }}
                >
                    <img src={process.env.PUBLIC_URL + "assets/img/shape/shape_2_2.png"} alt="shape" />
                </div>
            </div>
        </section>

    )
}

export default PricingPlan
