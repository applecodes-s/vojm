import React from 'react';
import { Link } from 'react-router-dom';

function AboutOne({ showFullContent }) {
    return (
        <div
            className="about-area position-relative overflow-hidden space"
            id="about-sec"
            style={{ paddingBottom: '40px' }} // controlled padding

        >
            <div className="container shape-mockup-wrap">
                <div className="row">
                    <div className="col-xl-6">
                    <div className="img-box1 mb-20 relative">
  <div className="img1">
    <img
      src={process.env.PUBLIC_URL + "/assets/img/normal/about_1_1.jpg"}
      alt="About"
      className="rounded-[30%]"
    />
  </div>
  <div className="img2 pl-8 ml-12 mb-8">
    <img
      src={process.env.PUBLIC_URL + "/assets/img/normal/about_1_2.jpg"}
      alt="About"
      className="rounded-full"
    />
  </div>
  <div className="img3 ml-8 mt-2">
    <img
      src={process.env.PUBLIC_URL + "/assets/img/normal/about_1_3.jpg"}
      alt="About"
      className="rounded-full"
    />
  </div>
</div>

                    </div>

                    <div className="col-xl-6">
                        <div className="ps-xl-4 ms-xl-2">
                            <div className="title-area mb-20 pe-xl-5 me-xl-5">
                                <span className="sub-title style1">About</span>
                                <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                                     Vincent Selvakumaar
                                </h2>
                            </div>

                            <div className="about-text">
                                <p>
                                    Brother Vincent Selvakumaar was born in an ordinary Christian family.
                                    After the demise of his mother, he was exposed to the harsh realities of life at a young age.
                                    During his college days, he was addicted not only to drugs but also to smoking. Added to this, he was also an atheist.
                                </p>

                                <p>
                                            After having completed over three decades of full-time ministry, the Lord God called and made a covenant.
                                            The Lord commanded Brother Vincent Selvakumaar to abandon all his ministerial and other worldly responsibilities.
                                            The Lord wanted the full time of Brother to be dedicated to hear the end-time revelations and other hidden
                                            mysteries and secrets. As a mark of allegiance to the commandment of God...
                                        </p>

                                {!showFullContent && (
    <>
      {/* About Items - Only for Home */}
      {/* <div className="about-item-wrap mt-10">
        <div className="about-item style2">
          <div className="about-item_img">
            <img src={process.env.PUBLIC_URL + "/assets/img/icon/about_1_1.svg"} alt="" />
          </div>
          <div className="about-item_centent">
            <h5 className="box-title">Lorem, ipsum.</h5>
            <p className="about-item_text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, modi.
            </p>
          </div>
        </div>
        <div className="about-item style2">
          <div className="about-item_img">
            <img src={process.env.PUBLIC_URL + "/assets/img/icon/about_1_2.svg"} alt="" />
          </div>
          <div className="about-item_centent">
            <h5 className="box-title">Lorem, ipsum dolor.</h5>
            <p className="about-item_text">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, illo.
            </p>
          </div>
        </div>
      </div> */}
    </>
  )} 
                                {showFullContent ? (
                                    <>
                                        <p>
                                            After having completed over three decades of full-time ministry, the Lord God called and made a covenant.
                                            The Lord commanded Brother Vincent Selvakumaar to abandon all his ministerial and other worldly responsibilities.
                                            The Lord wanted the full time of Brother to be dedicated to hear the end-time revelations and other hidden
                                            mysteries and secrets. As a mark of allegiance to the commandment of God...
                                        </p>
                                        <p>
                                            He left all ministry and other meetings and abstained from almost every worldly responsibility. He started to
                                            wait in the presence of God. As a result, the Lord started to reveal the end-time prophetical and spiritual
                                            truth. Brother’s calling is almost akin to the Old Testament prophets, who had a close walk with the Lord in
                                            its highest intimacy and unity with the Spirit.
                                        </p>
                                        <p>
                                            Brother’s messages and biblical interpretations carry an in-depth analysis and call for self-introspection and
                                            reformation among the Christian populace. Of late, the Lord is sharing all the things concerning the Second
                                            Coming and the natural calamities, disasters, and destruction which mark the beginning of the end of the world
                                            and the preparation of a New Heaven and New Earth.
                                        </p>
                                        </>
) : null}
                                
                            </div>

                            {!showFullContent && (
                                <div className="mt-35">
                                    <Link to="/about" className="th-btn style3 th-icon">
                                        Learn More
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutOne;
