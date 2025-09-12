import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterOne = () => {
    const counters = [
        { value: 45, suffix: "+", title: "Years Experience" },
        { value: 2000, suffix: "+", title: "Sermons" },
        { value: 200000, suffix: "+", title: "Subscribers" },
        { value: 35, suffix: "M+", title: "Views" }
    ];

    // Use intersection observer to detect when component is in view
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div className="counter-area space" ref={ref}>
            <div className="container shape-mockup-wrap">
                <div className="row">
                    {counters.map((counter, index) => (
                        <div key={index} className="col-sm-6 col-xl-3 counter-card-wrap">
                            <div className="counter-card">
                                <div className="counter-shape"><span></span></div>
                                <div className="media-body">
                                    <h3 className="box-number">
                                        {inView && (
                                            <CountUp
                                                start={0}
                                                end={counter.value}
                                                duration={2} // Matches your jQuery settings
                                                delay={0}
                                            />
                                        )}
                                        {counter.suffix}
                                    </h3>
                                    <h6 className="counter-title">{counter.title}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className="shape-mockup shape1 d-none d-xl-block"
                    data-top="30%"
                    data-left="-15%"
                >
                    <img src={process.env.PUBLIC_URL + "assets/img/shape/shape_1.png"} alt="shape" />
                </div>
                <div
                    className="shape-mockup shape2 d-none d-xl-block"
                    style={{top:"45%", left:"-13%"}}
                >
                    <img src={process.env.PUBLIC_URL + "assets/img/shape/shape_2.png"} alt="shape" />
                </div>
                <div
                    className="shape-mockup shape3 d-none d-xl-block"
                    style={{top:"32%", left:"-7%"}}
                >
                    <img src={process.env.PUBLIC_URL + "assets/img/shape/shape_3.png"} alt="shape" />
                </div>
                <div
                    className="shape-mockup d-none d-xl-block"
                    style={{bottom:"-24%", left:"-15%"}}
                >
                    <img src={process.env.PUBLIC_URL + "assets/img/shape/shape_6.png"} alt="shape" />
                </div>
                <div
                    className="shape-mockup jump d-none d-xl-block"
                    data-top="5%"
                    data-right="-10%"
                    style={{top:"5%", right:"-10%"}}
                >
                    <img src={process.env.PUBLIC_URL + "assets/img/shape/shape_5.png"} alt="shape" />
                </div>
            </div>
        </div>
    );
};

export default CounterOne;
