import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/pagination'; // Import pagination styles

function PlaylistSlider() {
  return (
    <section
      className="tour-area position-relative bg-top-center overflow-hidden space bg-no-repeat"
      id="service-sec"
      style={{  paddingTop: '60px', // controlled padding
      backgroundImage: 'url(/assets/img/bg/tour_bg_1.jpg)' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="title-area text-center">
              <span className="sub-title">Deep spiritual teachings from the Word of God</span>
              <h2 className="sec-title">Biblical Insights Playlist</h2>
              <p className="sec-text">
              Discover the mysteries of Revelation through the prophetic sermons of Prophet Vincent Selvakumaar.
              </p>
            </div>
          </div>
        </div>
        <div className="slider-area playlist-slider">
          <Swiper
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1300: { slidesPerView: 4 },
            }}
            spaceBetween={24}
            grabCursor={true}
            className="swiper th-slider has-shadow slider-drag-wrap"
          >
            <SwiperSlide key="tour1">
              <div className="playlist-box th-ani gsap-cursor">
                <div className="playlist-box_img global-img">
                  <img src={"https://www.vincentselvakumar.org/assets/img/tour/tour_box_1.jpg"} alt="Seven Seals Messages" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                  <a 
    href="https://www.youtube.com/watch?v=WIrXa37er-I&list=PLvDojcgf9-NbvI-3r3q5s1DVrqGA-V8_M"
    target="_blank"
    rel="noopener noreferrer"
  >Revelation Messages</a>
                  </h3>
                  {/* <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.8</span> (4.8 Rating)
                      </span>
                    </div>
                    <Link to="/tour-details" className="woocommerce-review-link">
                      (<span className="count">4.8</span> Rating)
                    </Link>
                  </div> */}
                  <h4 className="playlist-box_price">
                    <span className="currency">Seven Seals</span>
                    <p className="sec-text text-black">
                    Unveiling Heaven’s Hidden Mysteries
              </p>
                  </h4>
                  <div className="tour-action">
                    <span>
                    71 Epi
                    </span>
                    <a 
    href="https://www.youtube.com/watch?v=WIrXa37er-I&list=PLvDojcgf9-NbvI-3r3q5s1DVrqGA-V8_M"
    target="_blank"
    rel="noopener noreferrer"
    className="th-btn style4 th-icon"
  >
                      Watch Now
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="tour2">
              <div className="playlist-box th-ani gsap-cursor">
                <div className="playlist-box_img global-img">
                  <img src={"https://www.vincentselvakumar.org/assets/img/tour/tour_box_2.jpg"} alt="Seven Trumpets Messages" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                  <a 
    href="https://www.youtube.com/watch?v=wfeqdLkL3MA&list=PLvDojcgf9-NYJPO-OgSBu6S1FSbSh2-88"
    target="_blank"
    rel="noopener noreferrer"
  >Revelation Messages</a>
                  </h3>
                  {/* <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.8</span> (4.8 Rating)
                      </span>
                    </div>
                    <Link to="/tour-details" className="woocommerce-review-link">
                      (<span className="count">4.8</span> Rating)
                    </Link>
                  </div> */}
                   <h4 className="playlist-box_price">
                    <span className="currency">Seven Trumpets </span>
                    <p className="sec-text text-black">
                    Unveiling Heaven’s Hidden Mysteries
              </p>
                  </h4>
                  <div className="tour-action">
                    <span>
                      10 Epi                    </span>
                    <a 
    href="https://www.youtube.com/watch?v=wfeqdLkL3MA&list=PLvDojcgf9-NYJPO-OgSBu6S1FSbSh2-88"
    target="_blank"
    rel="noopener noreferrer"
  className="th-btn style4 th-icon">
                      Watch Now
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="tour3">
              <div className="playlist-box th-ani gsap-cursor">
                <div className="playlist-box_img global-img">
                  <img src={"https://www.vincentselvakumar.org/assets/img/tour/tour_box_3.jpg"} alt="Dubai Tour Package" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                  <a 
    href="https://www.youtube.com/watch?v=wnnU3_UIrZw&list=PLvDojcgf9-NYkmvtX_juKrzgIbZi6JcyZ"
    target="_blank"
    rel="noopener noreferrer"
  >Revelation Messages</a>
                  </h3>
                  {/* <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.8</span> (4.8 Rating)
                      </span>
                    </div>
                    <Link to="/tour-details" className="woocommerce-review-link">
                      (<span className="count">4.8</span> Rating)
                    </Link>
                  </div> */}
                  <h4 className="playlist-box_price">
                    <span className="currency">The Judgement</span>
                    <p className="sec-text text-black">
                    Standing Before God’s Throne 
              </p>
                  </h4>
                  <div className="tour-action">
                    <span>
                      10 Epi
                    </span>
                    <a 
    href="https://www.youtube.com/watch?v=wnnU3_UIrZw&list=PLvDojcgf9-NYkmvtX_juKrzgIbZi6JcyZ"
    target="_blank"
    rel="noopener noreferrer"
   className="th-btn style4 th-icon">
                      Watch Now
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide key="tour4">
              <div className="playlist-box th-ani gsap-cursor">
                <div className="playlist-box_img global-img">
                  <img src={"https://www.vincentselvakumar.org/assets/img/tour/tour_box_4.jpg"} alt="Seven Churches messages" />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                  <a 
    href="https://www.youtube.com/watch?v=W14u1rgGORo&list=PLvDojcgf9-NbovzJr-558BS_XhgdOTplV"
    target="_blank"
    rel="noopener noreferrer"
  >Revelation messages</a>
                  </h3>
                  {/* <div className="tour-rating">
                    <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                      <span style={{ width: '100%' }}>
                        Rated <strong className="rating">5.00</strong> out of 5 based on{' '}
                        <span className="rating">4.8</span> (4.8 Rating)
                      </span>
                    </div>
                    <Link to="/tour-details" className="woocommerce-review-link">
                      (<span className="count">4.8</span> Rating)
                    </Link>
                  </div> */}
                  <h4 className="playlist-box_price">
                    <span className="currency">Seven Churches </span>
                    <p className="sec-text text-black">
                    Churches Judged by the Lord
              </p>
                  </h4>
                  <div className="tour-action">
                    <span>
                     20 Epi
                    </span>
                    <a 
    href="https://www.youtube.com/watch?v=W14u1rgGORo&list=PLvDojcgf9-NbovzJr-558BS_XhgdOTplV"
    target="_blank"
    rel="noopener noreferrer"
   className="th-btn style4 th-icon">
                      Watch Now
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
           
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default PlaylistSlider;
