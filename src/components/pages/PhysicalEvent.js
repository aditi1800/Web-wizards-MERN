import React, { useEffect } from "react";
import Layout from "./Layout";
import Footer from "../Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import "./PhysicalEvent.css";
const PhysicalEvent = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Layout />
      <div className="hero overlay physicalOverlay">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center mx-auto">
              <span className="subheading-white text-white mb-5">
                Physical Events
              </span>

              <p
                data-aos="fade-up"
                className=" mb-5 text-white lead text-white-50"
              >
                Come join us.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="blog-home2 py-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8 text-center">
                    <h2 className="my-3">Events</h2>
                    <h5 className="subtitle font-weight-normal">
                      Volunteer for our events
                    </h5>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-4 on-hover">
                    <div className="card border-0 mb-4 card1">
                      <a href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6">
                        <img
                          style={{ padding: "0px" }}
                          className="card-img-top"
                          src="images/tree.jpg"
                          alt="wrappixel kit"
                        />
                      </a>
                      <div className="date-pos bg-info-gradiant p-2 d-inline-block text-center rounded text-white position-absolute">
                        Oct<span className="d-block">23</span>
                      </div>
                      <h5 className="font-weight-medium mt-3 text-center">
                        <a
                          href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6"
                          className="text-decoration-none link"
                        >
                          Tree Plantation
                        </a>
                      </h5>
                      <p className="mt-3">
                        Business Park, Opp. Corns Sam Restaurant, New Yoark, US
                      </p>
                      <a
                        href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6"
                        className="text-decoration-none linking text-themecolor mt-2"
                      >
                        View Event
                      </a>
                    </div>
                  </div>

                  <div className="col-md-4 on-hover">
                    <div className="card border-0 mb-4">
                      <a href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6">
                        <img
                          className="card-img-top"
                          src="images/beach.jpg"
                          alt="wrappixel kit"
                        />
                      </a>
                      <div className="date-pos bg-info-gradiant p-2 d-inline-block text-center rounded text-white position-absolute">
                        Oct<span className="d-block">23</span>
                      </div>
                      <h5 className="font-weight-medium mt-3 text-center">
                        <a
                          href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6"
                          className="text-decoration-none link"
                        >
                          Beach Clean up
                        </a>
                      </h5>
                      <p className="mt-3">
                        Business Park, Opp. Corns Sam Restaurant, New Yoark, US
                      </p>
                      <a
                        href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6"
                        className="text-decoration-none linking text-themecolor mt-2"
                      >
                        View Event
                      </a>
                    </div>
                  </div>

                  <div className="col-md-4 on-hover">
                    <div className="card border-0 mb-4">
                      <a href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6">
                        <img
                          className="card-img-top"
                          src="images/cancer.jpg"
                          alt="wrappixel kit"
                        />
                      </a>
                      <div className="date-pos bg-info-gradiant p-2 d-inline-block text-center rounded text-white position-absolute">
                        Oct<span className="d-block">23</span>
                      </div>
                      <h5 className="font-weight-medium mt-3 text-center">
                        <a
                          href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6"
                          className="text-decoration-none link"
                        >
                          Talk Cancer
                        </a>
                      </h5>
                      <p className="mt-3">
                        Business Park, Opp. Corns Sam Restaurant, New Yoark, US
                      </p>
                      <a
                        href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6"
                        className="text-decoration-none linking text-themecolor mt-2"
                      >
                        View Event
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PhysicalEvent;
