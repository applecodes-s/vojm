import React from 'react';
import HeaderOne from '../../Components/Header/HeaderOne';
import FooterOne from '../../Components/Footer/FooterOne';
import Breadcrumb from '../../Components/BreadCrumb/Breadcrumb';
import prophecyData from '../../Components/Data/prophecyData.json';

function PropheciesPage() {
  return (
    <>
      {/* Header */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title="Prophecies" currentPage="Prophecies" />

      {/* Prophecy Grid */}
      <section className="space-top space-bottom">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            {prophecyData.map((prophecy) => (
              <>
                {/* Tamil Card */}
                <div key={`${prophecy.id}-tamil`} className="col-xl-3 col-md-6">
                  <div className="destination-item th-ani">
                    <div className="destination-item_img global-img">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          `/assets/img/prophecies/${prophecy.image}`
                        }
                        alt={prophecy.title}
                      />
                    </div>
                    <div className="destination-content text-center">
                      <h3 className="box-title">{prophecy.title} (Tamil)</h3>
                      <p className="destination-text">{prophecy.date}</p>
                      <a
                        href={process.env.PUBLIC_URL + prophecy.tamilPdf}
                        className="th-btn style3 th-icon"
                        download
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>

                {/* English Card */}
                <div key={`${prophecy.id}-english`} className="col-xl-3 col-md-6">
                  <div className="destination-item th-ani">
                    <div className="destination-item_img global-img">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          `/assets/img/prophecies/${prophecy.image}`
                        }
                        alt={prophecy.title}
                      />
                    </div>
                    <div className="destination-content text-center">
                      <h3 className="box-title">{prophecy.title} (English)</h3>
                      <p className="destination-text">{prophecy.date}</p>
                      <a
                        href={process.env.PUBLIC_URL + prophecy.englishPdf}
                        className="th-btn style4 th-icon"
                        download
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterOne />
    </>
  );
}

export default PropheciesPage;
