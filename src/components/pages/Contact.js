import React, { useEffect } from "react";
import Layout from "./Layout";
import Footer from "../Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Layout />
      <div className="hero overlay contactOverlay">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 text-center">
              <h1 className="heading text-white mb-2" data-aos="fade-up">
                Contact Us
              </h1>
              <p
                data-aos="fade-up"
                className=" mb-5 text-white lead text-white-50"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
                minima dignissimos hic mollitia eius et quam ducimus maiores eos
                magni.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6" data-aos="fade-up">
              <h2 className="heading">Get In Touch</h2>
              <p className="text-black-50">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </div>

          <form action="" className="row justify-content-between">
            <div
              className="col-md-6 col-lg-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="row">
                <div className="mb-3 col-lg-6">
                  <label for="name" className="ps-3 fw-bold mb-2">
                    Name
                  </label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3 col-lg-6">
                  <label for="email" className="ps-3 fw-bold mb-2">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>

                <div className="mb-3 col-lg-12">
                  <label for="message" className="ps-3 fw-bold mb-2">
                    Message
                  </label>
                  <textarea
                    name=""
                    id="message"
                    className="form-control"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>

                <div className="col-lg-6">
                  <input
                    type="submit"
                    className="btn btn-primary text-white py-3"
                    value="Send Message"
                    bgwarning
                  />
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row">
                <div className="col-6 col-lg-6 mb-4">
                  <h3 className="h6 fw-bold text-secondary">Address</h3>
                  <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                </div>
                <div className="col-6 col-lg-6 mb-4">
                  <h3 className="h6 fw-bold text-secondary">Phone</h3>
                  <p>
                    +1 939 3839 399 <br />
                    +1 492 5991 203
                  </p>
                </div>

                <div className="col-6 col-lg-6 mb-4">
                  <h3 className="h6 fw-bold text-secondary">Follow</h3>
                  <ul className="list-unstyled social-custom">
                    <li>
                      <a href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6">
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6">
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6">
                        <span className="icon-linkedin"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6">
                        <span className="icon-pinterest"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6">
                        <span className="icon-dribbble"></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-6 mb-4">
                  <h3 className="h6 fw-bold text-secondary">Email</h3>
                  <p>
                    <a href="https://www.youtube.com/watch?v=oEHHjs1UVXQ&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=6">
                      info@mydomain.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
