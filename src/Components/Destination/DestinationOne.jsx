import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";


const destinations = [
  {
    id: 1,
    name: "Christian Living",
    listings: 9,
    image: process.env.PUBLIC_URL +"/assets/img/destination/destination_1_1.jpg",
    link: "https://www.youtube.com/watch?v=UJNwgXCZZ00&list=PLvDojcgf9-NZvDiFGhTmDtRiMGm0Akpbi"
  },
  {
    id: 2,
    name: "Apostolic Ministry",
    listings: 7,
    image: process.env.PUBLIC_URL +"/assets/img/destination/destination_1_2.jpg",
    link: "https://www.youtube.com/watch?v=tUaYAymi-Lc&list=PLvDojcgf9-NbQ6isWSA46tdyhTEJU8t4h"
  },
  {
    id: 3,
    name: "Biblical History",
    listings: 8,
    image: process.env.PUBLIC_URL +"/assets/img/destination/destination_1_3.jpg",
    link: "https://www.youtube.com/watch?v=pEEzYW1ZWWI&list=PLvDojcgf9-NZCdTs7g9c1jt-QJj7iZ6FG"
  },
  {
    id: 4,
    name: "One World",
    listings: 17,
    image: process.env.PUBLIC_URL +"/assets/img/destination/destination_1_4.jpg",
    link: "https://www.youtube.com/watch?v=MaExggwJImE&list=PLvDojcgf9-NYi_eNz0DiTRVOwek-QOLJu"
  },
  {
    id: 5,
    name: "Corona Virus",
    listings: 17,
    image: process.env.PUBLIC_URL +"/assets/img/destination/destination_1_5.jpg",
    link: "https://www.youtube.com/watch?v=vE5iy_HeP6M&list=PLvDojcgf9-NZ-n2irrfHZpiBCBai_HeGP"
  }
];

const sliderOptions = {
  modules: [EffectCoverflow, Navigation],
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: 5,
  initialSlide: 0,
  grabCursor: true,
  loop: true,
  speed: 1500,
  coverflowEffect: {
    rotate: 0,
    stretch: 95,
    depth: 212,
    modifier: 1
  },
  navigation: {
    nextEl: ".slider-next",
    prevEl: ".slider-prev"
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
    1200: { slidesPerView: 3 }
  }
};

function DestinationOne() {
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    const sliderWrap = document.querySelector(".slider-drag-wrap");
    const sliderLink = document.querySelectorAll(".slider-drag-wrap a");

    const handleMouseEnter = () => setCursorActive(true);
    const handleMouseLeave = () => setCursorActive(false);

    if (sliderWrap) {
      sliderWrap.addEventListener("mouseenter", handleMouseEnter);
      sliderWrap.addEventListener("mouseleave", handleMouseLeave);
    }

    sliderLink.forEach((link) => {
      link.addEventListener("mouseenter", () => setCursorActive(false));
      link.addEventListener("mouseleave", () => setCursorActive(true));
    });

    return () => {
      if (sliderWrap) {
        sliderWrap.removeEventListener("mouseenter", handleMouseEnter);
        sliderWrap.removeEventListener("mouseleave", handleMouseLeave);
      }

      sliderLink.forEach((link) => {
        link.removeEventListener("mouseenter", () => setCursorActive(false));
        link.removeEventListener("mouseleave", () => setCursorActive(true));
      });
    };
  }, []);

  return (
    <div className="position-relative overflow-hidden">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Top Messages</span>
          <h2 className="sec-title">Powerful Messages</h2>
        </div>

        <div className={`slider-drag-wrap ${cursorActive ? "active" : ""}`}>
          <Swiper {...sliderOptions} className="destination-slider">
            {destinations.map((dest) => (
              <SwiperSlide key={dest.id}>
                <div className="destination-box gsap-cursor">
                  <div className="destination-img">
                    <img src={dest.image} alt={dest.name} />
                    <div className="destination-content">
                      <div className="media-left">
                        <h4 className="box-title">
                          <a
                            href={dest.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {dest.name}
                          </a>
                        </h4>
                        <span className="destination-subtitle">
                          {dest.listings} Messages
                        </span>
                      </div>
                      <div>
                        <a
                          href={dest.link}
                          className="th-btn style2 th-icon"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Watch
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="th-swiper-custom">
  {/* <button className="slider-arrow slider-prev">
    <img
      src={process.env.PUBLIC_URL + "/assets/img/icon/left-arrow.svg"}
      alt="Prev"
    />
  </button>

  <button className="slider-arrow slider-next">
    <img
      src={process.env.PUBLIC_URL + "/assets/img/icon/right-arrow.svg"}
      alt="Next"
    />
  </button> */}
</div>

        </div>
      </div>
    </div>
  );
}

export default DestinationOne;
