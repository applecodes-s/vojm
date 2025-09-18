import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const CategoryOne = () => {
  const swiperRef = useRef(null);

  const categories = [
    { id: 1, title: "Prophecy", imgSrc: "https://www.vincentselvakumar.org/assets/img/category/category_1_1.jpg", url: "https://www.vincentselvakumarbooks.com/product-page/jebikkappada-vendiya-dheergadharisanangal" },
    { id: 2, title: "Revival", imgSrc: "https://www.vincentselvakumar.org/assets/img/category/category_1_2.jpg", url: "https://www.vincentselvakumarbooks.com/product-page/revival-enemies-tamil" },
    { id: 3, title: "Prayer", imgSrc: "https://www.vincentselvakumar.org/assets/img/category/category_1_3.jpg", url: "https://www.vincentselvakumarbooks.com/product-page/jebikkalaam-vaanga" },
    { id: 4, title: "Youth Inspiration", imgSrc: "https://www.vincentselvakumar.org/assets/img/category/category_1_4.jpg", url: "https://www.vincentselvakumarbooks.com/product-page/ways-to-overcome-violation-of-sins" },
    { id: 5, title: "Bible Study", imgSrc: "https://www.vincentselvakumar.org/assets/img/category/category_1_5.jpg", url: "https://www.vincentselvakumarbooks.com/product-page/copy-of-aazhangal-sollum-satchigal-part-i" },
    { id: 6, title: "Prophecy", imgSrc: "https://www.vincentselvakumar.org/assets/img/category/category_1_1.jpg", url: "https://www.vincentselvakumarbooks.com/product-page/end-time-warnings" },
    { id: 7, title: "Revival", imgSrc: "https://www.vincentselvakumar.org/assets/img/category/category_1_2.jpg", url: "https://www.vincentselvakumarbooks.com/product-page/revival-enemies" },
    { id: 8, title: "Prayer", imgSrc: "https://www.vincentselvakumar.org/assets/img/category/category_1_3.jpg", url: "https://www.vincentselvakumarbooks.com/product-page/prophecies-that-are-to-be-prayed" },
    { id: 9, title: "Youth Inspiration", imgSrc: "https://www.vincentselvakumar.org/assets/img/category/category_1_4.jpg", url: "https://www.vincentselvakumarbooks.com/product-page/meerum-paavangalum-athai-merkkollum-vithangalum"},
    { id: 10, title: "Bible Study", imgSrc: "https://www.vincentselvakumar.org/assets/img/category/category_1_5.jpg", url: "https://www.vincentselvakumarbooks.com/product-page/tamil-book" },
  ];

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiperInstance = swiperRef.current.swiper;

    // ✅ Start autoplay properly
    if (swiperInstance && swiperInstance.autoplay) {
      swiperInstance.autoplay.start();
    }
    // ✅ Custom pagination with numbers
    if (swiperInstance.pagination) {
      swiperInstance.pagination.renderBullet = function (index, className) {
        let formattedNumber = index + 1 < 10 ? "0" + (index + 1) : index + 1;
        return `<span class="${className} number">${formattedNumber}</span>`;
      };
      swiperInstance.pagination.init();
      swiperInstance.pagination.update();
    }
    // ✅ Custom wheel effect for category slider
    const multiplier = {
      translate: 0.1,
      rotate: 0.01,
    };

    const calculateWheel = () => {
      const slides = document.querySelectorAll(".single");
      slides.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        const r = window.innerWidth * 0.5 - (rect.x + rect.width * 0.5);
        let ty = Math.abs(r) * multiplier.translate - rect.width * multiplier.translate;

        if (ty < 0) {
          ty = 0;
        }
        const transformOrigin = r < 0 ? "left top" : "right top";
        slide.style.transform = `translate(0, ${ty}px) rotate(${-r * multiplier.rotate}deg)`;
        slide.style.transformOrigin = transformOrigin;
      });
    };

    const raf = () => {
      requestAnimationFrame(raf);
      calculateWheel();
    };

    raf();

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      className="category-area bg-top-center"
      style={{
        backgroundImage: "url('https://www.vincentselvakumar.org/assets/img/bg/category_bg_1.png')",
        backgroundRepeat: "no-repeat"
      }}    >
      <div className="container th-container">
        <div className="title-area text-center">
          <span className="sub-title">Explore Our Book Categories</span>
          <h2 className="sec-title">Find Your Next Read</h2>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
            1400: { slidesPerView: 5 },
          }}
          spaceBetween={40}
          loop={true}
          speed={500}
          autoplay={{
            delay: 500, // 👈 slide stays 4s before moving
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // 👈 better UX
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets"
          }} // ✅ Defined renderBullet inside pagination
       
          className="th-slider has-shadow categorySlider"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="category-card single">
                <div className="box-img global-img">
                  <img src={category.imgSrc} alt={category.title} loading="lazy" />
                </div>
                <h3 className="box-title">
  <a href={category.url} target="_blank" rel="noopener noreferrer">
    {category.title}
  </a>
</h3>

                {/* <Link className="line-btn" to="/destination">
                  See more
                </Link> */}
              </div>
            </SwiperSlide>
          ))}


  {/* Pagination */}
  <div className="slider-controller w-100 justify-content-center">
  <div className="swiper-pagination"></div>
</div>


        </Swiper>

      </div>
    </section>
  );
};

export default CategoryOne;
