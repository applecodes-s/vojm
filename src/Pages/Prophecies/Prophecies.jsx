import React from "react";
import { Link } from "react-router-dom";
import HeaderOne from "../../Components/Header/HeaderOne";
import FooterOne from "../../Components/Footer/FooterOne";
import Breadcrumb from "../../Components/BreadCrumb/Breadcrumb";

export default function Prophecies() {
  const months = [
    {
      name: "July 2025",
      color: "#0d6786",
      weeks: [{ week: "Week 1", date: "20th July" }],
    },
    {
      name: "August 2025",
      color: "#0d6786",
      weeks: [
        { week: "Week 2", date: "17th Aug" },
        // { week: "Week 3", date: "24th Aug" },
      ],
    },
    {
      name: "September 2025",
      color: "#0d6786",
      weeks: [
        { week: "Week 3", date: "14th Sept" },
        { week: "Week 4", date: "21st Sept" },
      ],
    },
    {
      name: "October 2025",
      color: "#0d6786",
      weeks: [{ week: "Week 5", date: "19th Oct" }],
    },
  ];

  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Prophecies" currentPage="Prophecies" />

      <section className="space-top space-bottom">
        <div className="container">
          <h2 className="sec-title text-center mb-5">Select Jebikalaam Vanga Prophecy</h2>

          <div className="row justify-content-center">
            {months.map((month, i) => (
              <div
                key={i}
                className="col-lg-10 col-md-11 col-sm-12 d-flex flex-wrap align-items-center justify-content-between mb-4 py-3 px-3 rounded shadow-sm"
                style={{
                  backgroundColor: "#f8f9fa",
                }}
              >
                {/* 🟦 Month Block */}
                <div className="col-12 col-md-3 mb-3 mb-md-0 text-center">
                  <div
                    className="fw-bold py-4 px-2 text-white rounded"
                    style={{
                      backgroundColor: month.color,
                      borderRadius: "10px",
                      fontSize: "18px",
                    }}
                  >
                    {month.name}
                  </div>
                </div>

                {/* 🟧 Week Buttons */}
                <div className="col-12 col-md-8 d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
                  {month.weeks.map((w, idx) => (
                    <Link
                      key={idx}
                      to={`/prophecies/${month.name
                        .toLowerCase()
                        .replace(" ", "-")}-${w.week
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className="text-center fw-bold text-white py-3 px-4 rounded"
                      style={{
                        backgroundColor: "#e97132",
                        minWidth: "180px",
                        borderRadius: "10px",
                        textDecoration: "none",
                        transition: "0.3s",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.backgroundColor = "#c85a22")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor = "#e97132")
                      }
                    >
                      <div>{w.week}</div>
                      <small>{w.date}</small>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterOne />
    </>
  );
}
