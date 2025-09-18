import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Pagination, EffectFade, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
function BannerOne() {
    const swiperRef = useRef(null);

    useEffect(() => {
        // Function to add animation classes
        const animationProperties = () => {
            document.querySelectorAll('[data-ani]').forEach((element) => {
                const animationName = element.getAttribute('data-ani');
                element.classList.add(animationName);
            });

            document.querySelectorAll('[data-ani-delay]').forEach((element) => {
                const delayTime = element.getAttribute('data-ani-delay');
                element.style.animationDelay = delayTime;
            });
        };

        animationProperties();
    }, []);

    // Event handler for custom navigation arrows
    const handleSliderNavigation = (direction) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;
            if (direction === "prev") {
                swiper.slidePrev();
            } else {
                swiper.slideNext();
            }
        }
    };

    return (
        <div className="th-hero-wrapper hero-1" id="hero">

            <Swiper
                modules={[Navigation, Pagination, EffectFade, Autoplay]} // Initialize necessary modules
                effect="fade" // Use fade effect
                loop={true} // Enable loop
                speed={2000}
                autoplay={{
                    delay: 3000, // 👈 how long each slide stays (5s)
                    disableOnInteraction: false,
                 }}
                pagination={{
                    el: ".swiper-pagination", // Custom pagination container
                    clickable: true, // Enable clickable pagination
                }}
                navigation={{
                    nextEl: ".slider-next", // Custom next button
                    prevEl: ".slider-prev", // Custom prev button
                }}
                className="th-slider hero-slider-1"
                id="heroSlide1"
            >
                <div className="swiper-wrapper">
                    <SwiperSlide>
                        <div className="hero-inner">
                            <div
                                className="th-hero-bg"
                                style={{
                                    backgroundImage: `url("https://www.vincentselvakumar.org/assets/img/hero/hero_bg_1_1.jpg")`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                }}
                            >

                            </div>
                            <div className="container">
                                <div className="hero-style1">
                                    <span
                                        className="sub-title style1"
                                        data-ani="slideinup"
                                        data-ani-delay="0.2s"
                                    >
                                       Welcome to the Ministry of Prophet
                                    </span>
                                    <h1
                                        className="hero-title"
                                        data-ani="slideinup"
                                        data-ani-delay="0.4s"
                                    >
                                        Vincent Selvakumaar{" "}
                                    </h1>
                                    <div
                                        className="btn-group"
                                        data-ani="slideinup"
                                        data-ani-delay="0.6s"
                                    >
                                        <Link to="/about" className="th-btn th-icon">
                                            About
                                        </Link>
                                        <a 
  href="https://www.youtube.com/@VincentSelvakumar" 
  className="th-btn style2 th-icon" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Watch Sermons
</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero-inner">
                            <div
                                className="th-hero-bg"
                                style={{
                                    backgroundImage: `url("https://www.vincentselvakumar.org/assets/img/hero/hero_bg_1_2.jpg")`, 
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                }}
                            ></div>
                            <div className="container">
                                <div className="hero-style1">
                                    <span
                                        className="sub-title style1"
                                        data-ani="slideinup"
                                        data-ani-delay="0.2s"
                                    >
                                       Spiritual Books
                                    </span>
                                    <h1
                                        className="hero-title"
                                        data-ani="slideinup"
                                        data-ani-delay="0.4s"
                                    >
                                        New Release -{"Tamil & English"}
                                    </h1>
                                    <div
                                        className="btn-group"
                                        data-ani="slideinup"
                                        data-ani-delay="0.6s"
                                    >  <Link to="/about" className="th-btn th-icon">
                                    About
                                </Link>
                                        <a
  href="https://www.vincentselvakumarbooks.com/product-page/satan-s-gateway"
  className="th-btn style2 th-icon"
  target="_blank"
  rel="noopener noreferrer"
>
  Order Now
</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero-inner">
                            <div
                                className="th-hero-bg"
                                style={{
                                    backgroundImage: `url("https://www.vincentselvakumar.org/assets/img/hero/hero_bg_1_3.jpg")`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                }}
                            ></div>
                            <div className="container">
                                <div className="hero-style1">
                                    <span
                                        className="sub-title style1"
                                        data-ani="slideinup"
                                        data-ani-delay="0.2s"
                                    >
                                       Strengthening Believers Through God’s Word
                                    </span>
                                    <h1
                                        className="hero-title"
                                        data-ani="slideinup"
                                        data-ani-delay="0.4s"
                                    >
                                       The Pulpit of Christian Living{" "}
                                    </h1>
                                    <div
                                        className="btn-group"
                                        data-ani="slideinup"
                                        data-ani-delay="0.6s"
                                    ><a
                                    href="https://www.youtube.com/watch?v=3zprKxjLlEQ&list=PLvDojcgf9-Na71HJi9JsgR49KKRLxyFfA"
                                    className="th-btn th-icon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Explore Sermons
                                  </a>
                                  
                                  <a
                                    href="https://www.youtube.com/@VincentSelvakumar"
                                    className="th-btn style2 th-icon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Watch Videos
                                  </a>
                                  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
                <div className="th-swiper-custom">
                    <button
                        className="slider-arrow slider-prev"
                        onClick={() => handleSliderNavigation("prev")}
                    >
                        <img src={"https://www.vincentselvakumar.org/assets/img/icon/right-arrow.svg"} alt="Prev" />
                    </button>
                    <div className="swiper-pagination" /> {/* Pagination container */}
                    <button
                        className="slider-arrow slider-next"
                        onClick={() => handleSliderNavigation("next")}
                    >
                        <img src={"https://www.vincentselvakumar.org/assets/img/icon/left-arrow.svg"} alt="Next" />
                    </button>
                </div>
            </Swiper>
        </div>

    )
}

export default BannerOne
