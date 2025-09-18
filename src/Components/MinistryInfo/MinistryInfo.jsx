import React from "react";
import { Link } from "react-router-dom";


function MinistryInfo() {
    return (
        <div className="ministry-sec">
            <div className="container">
                <div className="ministry-info">
                    <div className="input-wrap">
                        <div className="row align-items-center justify-content-between">
                            {/* Founder */}
                            <div className="form-group col-md-6 col-lg-auto">
                                <div className="icon">
                                    <i className="fa-light fa-user" />
                                </div>
                                <div className="search-input">
                                    <label>Founder</label>
                                    <p className="static-info text-black">Vincent Selvakumaar</p>
                                </div>
                            </div>

                            {/* Years of Ministry */}
                            <div className="form-group col-md-6 col-lg-auto">
                                <div className="icon">
                                <i className="fa-solid fa-calendar-alt"></i>
                                </div>
                                <div className="search-input">
                                    <label>Years of Ministry</label>
                                    <p className="static-info text-black">40+ Years</p>
                                </div>
                            </div>

                            {/* Books Published */}
                            <div className="form-group col-md-6 col-lg-auto">
                                <div className="icon">
                                    <i className="fa-light fa-book" />
                                </div>
                                <div className="search-input">
                                    <label>Books Published</label>
                                    <p className="static-info text-black">55 Books</p>
                                </div>
                            </div>

                            {/* YouTube Sermons */}
                            <div className="form-group col-md-6 col-lg-auto">
                                <div className="icon">
                                    <i className="fa-brands fa-youtube" />
                                </div>
                                <div className="search-input">
                                    <label> Sermons</label>
                                    <p className="static-info text-black">2000+ Messages</p>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="form-btn col-md-12 col-lg-auto">
  <Link to="/about" className="th-btn">
    <img src={"https://www.vincentselvakumar.org/assets/img/icon/search.svg"} alt="" />
    Explore Ministry
  </Link>
</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MinistryInfo;
