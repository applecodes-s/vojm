import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

// Updated songs array with streaming links
const songs = [
  {
    id: 1,
    name: "Inisai Geethangal Part 2",
    image: process.env.PUBLIC_URL +"/assets/img/team/team_1_1.jpg",
    youtube: "https://www.youtube.com/watch?v=1_MM8OXrUQ4&list=OLAK5uy_mTuvXcnySF0srH6KRlVInHcS8V_TDrBRI&index=2",
    youtubeMusic: "https://www.youtube.com/watch?v=1_MM8OXrUQ4&list=OLAK5uy_mTuvXcnySF0srH6KRlVInHcS8V_TDrBRI&index=2",
    spotify: "https://open.spotify.com/album/2kWyY5wOzik9C9rV8FibRi?si=f6Qr3cB-RNuftnFnrwQHAQ",
    amazon: "https://music.amazon.com/albums/B0B81ZHJW3?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_HdWahxfe2RSxmVFfZr8zkBfeD",
  },
  {
    id: 2,
    name: "Kaalam Ini Selladhu",
    image: process.env.PUBLIC_URL + "/assets/img/team/team_1_2.jpg",
    youtube: "https://www.youtube.com/watch?v=ev-XLgermDI&list=OLAK5uy_loSzUVBryGdxSWRhNEY-WNGmAA15nsUoA",
    youtubeMusic: "https://www.youtube.com/watch?v=ev-XLgermDI&list=OLAK5uy_loSzUVBryGdxSWRhNEY-WNGmAA15nsUoA",
    spotify: "https://open.spotify.com/album/4MT4Q5CW7vavtsOvU8R7RQ?si=kr3GoOWCTtWa2kyV91T37w",
    amazon: "https://music.amazon.com/albums/B0B7QFNF48?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_eTTU4VUTOyT2qYcyyuEsryBuX",
  },
  {
    id: 3,
    name: "Neatru Indru Naalai",
    image: process.env.PUBLIC_URL + "/assets/img/team/team_1_3.jpg",
    youtube: "https://youtu.be/ZPold4GK3HI?si=vl6ux1-OhVMQZD4-",
    youtubeMusic: "https://www.youtube.com/watch?v=3sU_iy8RJVQ&list=OLAK5uy_k-fdymecIoqJELNNRb_rn9S9Iu_GV75yE",
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0aTFTz",
    amazon: "https://music.amazon.com/albums/B0F66YMSMK?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_1k13ezKZmpReaK6Eqvz2ygPAh",
  },
  {
    id: 4,
    name: "Inisai Geethangal Part 1",
    image: process.env.PUBLIC_URL + "/assets/img/team/team_1_4.jpg",
    youtube: "https://www.youtube.com/watch?v=nrcmkrOVBt8&list=OLAK5uy_nCuydv9g-27dzf1_LOQ0Ks7Yu8LjZZ3A8",
    youtubeMusic: "https://www.youtube.com/watch?v=nrcmkrOVBt8&list=OLAK5uy_nCuydv9g-27dzf1_LOQ0Ks7Yu8LjZZ3A8",
    spotify: "https://open.spotify.com/album/0VtLx9A5g7xyzF47O5m2Tg?si=DsGesM8pQ1m8d05GOgn0gg",
    amazon: "https://music.amazon.com/albums/B0B4GX1SRP?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_SdQ7LuIiY1rTR3QMsdxQaXAqn",
  },
  {
    id: 5,
    name: "Vidhaikindra Kaalam",
    image: process.env.PUBLIC_URL + "/assets/img/team/team_1_5.jpg",
    youtube: "https://www.youtube.com/watch?v=hjdZYV7hARs&list=OLAK5uy_kgFDQ2ISDTEu3vRLvXgFKVBjxJPaiCar0",
    youtubeMusic: "https://www.youtube.com/watch?v=hjdZYV7hARs&list=OLAK5uy_kgFDQ2ISDTEu3vRLvXgFKVBjxJPaiCar0",
    spotify: "https://open.spotify.com/album/3ybdltArAF56nNVocAoG2o?si=RVx0nCCmStWsy3mZtHuJfA",
    amazon: "https://music.amazon.com/albums/B0B7ZSSD3T?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_QdCiMYrltwkwvN5kSHwe4WyXd",
  },
  {
    id: 6,
    name: "Ekkalam Thonithidum",
    image: process.env.PUBLIC_URL + "/assets/img/team/team_1_6.jpg",
    youtube: "https://www.youtube.com/watch?v=KqbKv6HZC_I&list=OLAK5uy_nJSvLTUyrMEx7zr32HlnQ_60KTb1coJ_A",
    youtubeMusic: "https://www.youtube.com/watch?v=KqbKv6HZC_I&list=OLAK5uy_nJSvLTUyrMEx7zr32HlnQ_60KTb1coJ_A",
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0aTFTz",
    amazon: "https://music.amazon.com/albums/B0F3KVWP7H?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_UPdSfFAtF8l0l2tKPQRzSmgu0",
  },
  {
    id: 7,
    name: "Neatru Indru Naalai",
    image: process.env.PUBLIC_URL + "/assets/img/team/team_1_3.jpg",
    youtube: "https://youtu.be/ZPold4GK3HI?si=vl6ux1-OhVMQZD4-",
    youtubeMusic: "https://www.youtube.com/watch?v=3sU_iy8RJVQ&list=OLAK5uy_k-fdymecIoqJELNNRb_rn9S9Iu_GV75yE",
    spotify: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0aTFTz",
    amazon: "https://music.amazon.com/albums/B0F66YMSMK?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_1k13ezKZmpReaK6Eqvz2ygPAh",
  },
  {
    id: 8,
    name: "Kaalam Ini Selladhu",
    image: process.env.PUBLIC_URL + "/assets/img/team/team_1_2.jpg",
    youtube: "https://www.youtube.com/watch?v=ev-XLgermDI&list=OLAK5uy_loSzUVBryGdxSWRhNEY-WNGmAA15nsUoA",
    youtubeMusic: "https://www.youtube.com/watch?v=ev-XLgermDI&list=OLAK5uy_loSzUVBryGdxSWRhNEY-WNGmAA15nsUoA",
    spotify: "https://open.spotify.com/album/4MT4Q5CW7vavtsOvU8R7RQ?si=kr3GoOWCTtWa2kyV91T37w",
    amazon: "https://music.amazon.com/albums/B0B7QFNF48?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_eTTU4VUTOyT2qYcyyuEsryBuX",
  },
  // Add more objects similarly
];

function SongsSlider() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    if (swiperInstance && paginationRef.current) {
      swiperInstance.params.pagination.el = paginationRef.current;
      swiperInstance.pagination.init();
      swiperInstance.pagination.update();
    }
  }, [swiperInstance]);

  return (
    <section
      className="bg-smoke space overflow-hidden mb-20"
      style={{ backgroundImage: "url(/assets/img/bg/team_bg_1.png)" }}
    >
      <div className="container z-index-common">
        <div className="title-area text-center">
          <span className="sub-title">
            Let every tune lead you to God’s presence.
          </span>
          <h2 className="sec-title">Spirit-Filled Songs</h2>
        </div>
        <div className="slider-area">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            speed={1000}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay:1000 }}
            className="th-slider teamSlider1 has-shadow"
            onSwiper={setSwiperInstance}
          >
            {songs.map((songs) => (
              <SwiperSlide key={songs.id}>
                <div className="th-team team-box">
                  <div className="team-img">
                    <img
                      src={`${songs.image}`}
                      alt={songs.name}
                    />
                  </div>
                  <div className="team-content">
                    <div className="media-body">
                      <h3 className="box-title">
                        <a
                          href={songs.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {songs.name}
                        </a>
                      </h3>
                      <div className="th-social">
                        {/* Spotify */}
                        <a
                          href={songs.spotify}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Listen on Spotify"
                        >
                          <i className="fab fa-spotify" />
                        </a>

                        {/* Amazon Music */}
                        <a
                          href={songs.amazon}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Listen on Amazon Music"
                        >
                          <i className="fab fa-amazon" />
                        </a>

                        {/* YouTube */}
                        <a
                          href={songs.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Watch on YouTube"
                        >
                          <i className="fab fa-youtube" />
                        </a>

                     
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
    
  );
}

export default SongsSlider;
