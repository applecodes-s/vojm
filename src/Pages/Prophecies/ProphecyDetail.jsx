import React from "react";
import { useParams, Link } from "react-router-dom";
import HeaderOne from "../../Components/Header/HeaderOne";
import FooterOne from "../../Components/Footer/FooterOne";
import Breadcrumb from "../../Components/BreadCrumb/Breadcrumb";
import prophecyData from "../../Components/Data/prophecyData.json";

export default function ProphecyDetail() {
  const { slug } = useParams(); // e.g. "july-week-1"

  // 🟩 Find the matching prophecy based on month + week
  const prophecy = prophecyData.find((item) => {
    const monthSlug = item.month?.toLowerCase();
    const weekSlug = item.week?.toLowerCase().replace(" ", "-");
    return slug.includes(monthSlug) && slug.includes(weekSlug);
  });

  if (!prophecy) {
    return (
      <>
        <HeaderOne />
        <Breadcrumb title="Prophecy Not Found" currentPage="Prophecies" />
        <section className="space-top space-bottom text-center">
          <h3>No prophecy found for this selection.</h3>
          <Link to="/prophecies" className="th-btn style3 mt-3">
            Back to Prophecies
          </Link>
        </section>
        <FooterOne />
      </>
    );
  }

  return (
    <>
      <HeaderOne />
      <Breadcrumb title={prophecy.title} currentPage={prophecy.week} />

      <section className="space-top space-bottom">
        <div className="container text-center">
          <h2 className="sec-title mb-3">{prophecy.subtitle}</h2>
          {/* <p className="destination-text mb-2">{prophecy.subtitle}</p> */}
          <h3 className="sec-title text-4xl text-black mb-5">{prophecy.date}</h3>

          <div className="row gy-4 justify-content-center">
            {/* 🟦 Tamil Card */}
            <div className="col-xl-3 col-md-6 d-flex justify-content-center">
              <div className="destination-item th-ani">
                <a
                  href={process.env.PUBLIC_URL + prophecy.tamilPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="destination-item_img global-img mb-7">
                    <img
                      src={process.env.PUBLIC_URL + prophecy.tamilImage}
                      alt={`${prophecy.title} Tamil`}
                      className="cursor-pointer"
                    />
                  </div>
                </a>
                <div className="destination-content text-center">
                <a
                    href={process.env.PUBLIC_URL + prophecy.tamilPdf}
                    target="_blank"
                  rel="noopener noreferrer"
                  >
                  <h3 className="box-title">Tamil</h3>
                  </a>
                  <a
                    href={prophecy.tamilPdf}
                    className="th-btn style3 th-icon mt-3"
                    download
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </div>

            {/* 🟧 English Card */}
            <div className="col-xl-3 col-md-6 d-flex justify-content-center">
              <div className="destination-item th-ani">
                <a
                  href={process.env.PUBLIC_URL + prophecy.englishPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="destination-item_img global-img mb-7">
                    <img
                      src={process.env.PUBLIC_URL + prophecy.englishImage}
                      alt={`${prophecy.title} English`}
                      className="cursor-pointer"
                    />
                  </div>
                </a>
                <div className="destination-content text-center">
                <a
                    href={process.env.PUBLIC_URL + prophecy.englishPdf}
                    target="_blank"
                  rel="noopener noreferrer"
                  >
                  <h3 className="box-title">English</h3>
                  </a>
                  <a
                    href={prophecy.englishPdf}
                    className="th-btn style3 th-icon mt-3"
                    download
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-5">
            <Link to="/prophecies" className="th-btn style4">
              ← Back to Prophecies
            </Link>
          </div>
        </div>
      </section>

      <FooterOne />
    </>
  );
}
