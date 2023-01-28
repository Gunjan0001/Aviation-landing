import React, { useState } from "react";
import logo from "../assets/images/png/logo.png";
import aeroplanebg from "../assets/images/png/aeroplane.bg.png";
import location from "../assets/images/png/location.png";
import Travler from "../assets/images/png/travlers.png";
import checkin from "../assets/images/png/check-in.png";
import checkout from "../assets/images/png/check-out.png";
import Carousel from "react-bootstrap/Carousel";

const Header = () => {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  const [activeTab, setActiveTab] = useState("home");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <section className="bg_color_1 min_vh_100_xl min_height_600 d-flex flex-column  ">
        <nav className="pt-3 ">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between ">
              <ul className="d-flex align-items-center d-none d-lg-flex ps-0">
                <li className="list-unstyled">
                  {" "}
                  <a href="#">
                    <img className="w-100" src={logo} alt="logo" />
                  </a>
                </li>
                <li className="list-unstyled  ms-2 ">
                  <a
                    href="#"
                    className="  text-decoration-none  ff_montserrat fw_800 fw_extra_bold fs_normal fs_xlg text-white"
                  >
                    FT PLANE
                  </a>
                </li>
              </ul>

              <ul className="d-flex align-items-center mb-0 gap-5  d-none d-lg-flex ps-0 ">
                <li className="list-unstyled ">
                  <a
                    href="#feature"
                    className="text-decoration-none ff_montserrat fw_800 fw_semi_bold fs_normal fs_md text-white hover position-relative transition"
                  >
                    All Flight
                  </a>
                </li>
                <li className="list-unstyled ">
                  <a
                    href="#schedule"
                    className=" text-decoration-none ff_montserrat fw_800 fw_semi_bold fs_normal fs_md text-white hover position-relative transition "
                  >
                    Schedule
                  </a>
                </li>
                <li className="list-unstyled ">
                  <a
                    href="#order"
                    className="text-decoration-none ff_montserrat fw_800 fw_semi_bold fs_normal fs_md text-white hover position-relative transition"
                  >
                    Passengers
                  </a>
                </li>
                <li className="list-unstyled ">
                  <a
                    href="#order"
                    className="text-decoration-none ff_montserrat fw_800 fw_semi_bold fs_normal fs_md text-white hover position-relative transition"
                  >
                    Your Orders
                  </a>
                </li>
                <li className="list-unstyled ">
                  <a
                    href="#"
                    className="text-decoration-none ff_montserrat fw_800 fw_semi_bold fs_normal fs_md text-white  transition btnnn"
                  >
                    Let’s Fly
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-lg-none d-flex ">
              <article className="w-100 d-flex justify-content-between">
                {" "}
                <article className="w-50">
                  {" "}
                  <ul className="d-flex align-items-center ps-0 mb-0 ">
                    <li className="list-unstyled">
                      {" "}
                      <a href="#">
                        <img src={logo} alt="logo" />
                      </a>
                    </li>
                    <li className="list-unstyled ">
                      <a
                        href="#"
                        className=" text-white  ff_montserrat fw_800 fw_extra_bold fs_normal fs_xlg  text-decoration-none"
                      >
                        FT PLANE
                      </a>
                    </li>
                  </ul>
                </article>
                <span>
                  {" "}
                  <div
                    onClick={() => setNavShow(!navShow)}
                    className="text-danger rounded-2 px-2 py-1 d-lg-none btns"
                  >
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                  </div>
                </span>
              </article>
              <div className={` ${navShow ? "nav-fix nav_bg" : "fix-navbar"}`}>
                <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center  list-unstyled gap-3 gap-md-5 pt-3 ">
                  <button
                    onClick={() => setNavShow(false)}
                    class="btn btn-close  d-lg-none"
                  ></button>
                  <li className="list-unstyled ">
                    <a
                      href="#"
                      className="text-decoration-none ff_montserrat fw_800 fw_semi_bold fs_normal fs_md text-white hover position-relative"
                    >
                      All Flight
                    </a>
                  </li>
                  <li className="list-unstyled ">
                    <a
                      href="#"
                      className=" text-decoration-none ff_montserrat fw_800 fw_semi_bold fs_normal fs_md text-white hover position-relative "
                    >
                      Schedule
                    </a>
                  </li>
                  <li className="list-unstyled ">
                    <a
                      href="#"
                      className="text-decoration-none ff_montserrat fw_800 fw_semi_bold fs_normal fs_md text-white hover position-relative"
                    >
                      Your Orders
                    </a>
                  </li>
                  <li className="list-unstyled ">
                    <a
                      href="#"
                      className="text-decoration-none ff_montserrat fw_800 fw_semi_bold fs_normal fs_md text-white hover position-relative"
                    >
                      Let’s Fly
                    </a>
                  </li>
                </ul>{" "}
              </div>
            </div>
          </div>
        </nav>
        <div className="d-flex flex-grow-1 flex-column align-items-center justify-content-center mb-5 ">
          <div className="container ">
            <h1 className=" fw_large fs_118  text-center mt-4">Aviation</h1>
            <img className="w-100  landing" src={aeroplanebg} alt="image" />
            <article className="translate_20 ">
              <h2 className="ff_montserrat  fw_bold fs_normal fs_xxlr text-center text-white mt-5 ">
                Travel around the world
              </h2>
              <p className="ff_inter fw_regular fs_sm color_4 text-center mt-3 ">
                One of the advantages of being disorganized is that one is
                always having surprising discoveries
              </p>
            </article>
          </div>
        </div>
      </section>
      <section>
        <div className="container ">
          <div className="  translate-middle-y ">
            {" "}
            <div className="nav-tabs w-100 w_md_50 px-0 justify-content-between ">
              <div
                className={`nav-tab ${
                  activeTab === "home" ? "active" : ""
                } col-4`}
                onClick={() => handleTabClick("home")}
              >
                <span className="d-block text-center ff_montserrat  fw_semi_bold fs_xmd color_5 ">
                  {" "}
                  Economy
                </span>
              </div>

              <div
                className={`nav-tab ${
                  activeTab === "about" ? "active" : ""
                } col-4 py-2 px-1`}
                onClick={() => handleTabClick("about")}
              >
                <span className="d-block text-center ff_montserrat  fw_semi_bold fs_xmd color_5">
                  {" "}
                  Busniness
                </span>
              </div>
              <div
                className={`nav-tab ${
                  activeTab === "contact" ? "active" : ""
                } col-4 py-2 px-1 `}
                onClick={() => handleTabClick("contact")}
              >
                <span className="d-block text-center ff_montserrat  fw_semi_bold fs_xmd color_5">
                  {" "}
                  First
                </span>
              </div>
            </div>
            <div className="overflow-hidden bg_shadow">
              {" "}
              <div className=" rounded-1 height">
                {activeTab === "home" && (
                  <article className=" py-2  ">
                    <Carousel className="d-sm-none">
                      <Carousel.Item>
                        <div className="d-flex bg-white  py-3  px-0 col-xl-2 col-lg-4 col-md-6 d-flex flex-column flex-lg-row align-items-center  text-center text-lg-start  justify-content-center">
                          <img className="pe-2" src={location} alt="location" />
                          <span>
                            <span className="text_dark_blue d-block ff_montserrat  fw_semi_bold fs_xmd color_5">
                              Location
                            </span>
                            <span className="text_dark_blue opacity-50 ff_montserrat fw_regular fs_md color_1 white_space">
                              Where are you going?
                            </span>
                          </span>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="d-flex bg-white  py-3  px-0 col-xl-2 col-lg-4 col-md-6 d-flex flex-column flex-lg-row align-items-center  text-center text-lg-start justify-content-center">
                          <img className="pe-2" src={Travler} alt="" />
                          <span>
                            <span className="text_dark_blue d-block ff_montserrat  fw_semi_bold fs_xmd color_5">
                              Travelers
                            </span>
                            <span className="text_dark_blue opacity-50 ff_montserrat fw_regular fs_md color_1">
                              Add guest
                            </span>
                          </span>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="d-flex bg-white  py-3  px-0 col-xl-2 col-lg-4 col-md-6 d-flex flex-column flex-lg-row align-items-center  text-center text-lg-start justify-content-center">
                          <img className="pe-2" src={checkin} alt="" />
                          <span>
                            <span className="text_dark_blue d-block ff_montserrat  fw_semi_bold fs_xmd color_5">
                              Check-in
                            </span>
                            <span className="text_dark_blue opacity-50 ff_montserrat fw_regular fs_md color_1">
                              Add date
                            </span>
                          </span>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="d-flex bg-white px-0 py-3 col-xl-2 col-lg-4 col-md-6 d-flex flex-column flex-lg-row align-items-center  text-center text-lg-start justify-content-center">
                          <img className="pe-2" src={checkout} alt="" />
                          <span>
                            <span className="text_dark_blue d-block ff_montserrat  fw_semi_bold fs_xmd color_5">
                              Check-out
                            </span>
                            <span className="text_dark_blue opacity-50 ff_montserrat fw_regular fs_md color_1">
                              Add date
                            </span>
                          </span>
                        </div>
                      </Carousel.Item>
                    </Carousel>
                    <div className=" b_radius row justify-content-evenly d-none d-sm-flex">
                      <div className="d-flex bg-white  py-4  px-0 col-xl-2 col-lg-4 col-md-6 d-flex flex-column flex-lg-row align-items-center  text-center text-lg-start  justify-content-center">
                        <img className="pe-2" src={location} alt="" />
                        <span>
                          <span className="text_dark_blue d-block ff_montserrat  fw_semi_bold fs_xmd color_5">
                            Location
                          </span>
                          <span className="text_dark_blue opacity-50 ff_montserrat fw_regular fs_md color_1">
                            Where are you going?
                          </span>
                        </span>
                      </div>
                      <div className="d-flex bg-white  py-4  px-0 col-xl-2 col-lg-4 col-md-6 d-flex flex-column flex-lg-row align-items-center  text-center text-lg-start justify-content-center">
                        <img className="pe-2" src={Travler} alt="" />
                        <span>
                          <span className="text_dark_blue d-block ff_montserrat  fw_semi_bold fs_xmd color_5">
                            Travelers
                          </span>
                          <span className="text_dark_blue opacity-50 ff_montserrat fw_regular fs_md color_1">
                            Add guest
                          </span>
                        </span>
                      </div>
                      <div className="d-flex bg-white  py-3  px-0 col-xl-2 col-lg-4 col-md-6 d-flex flex-column flex-lg-row align-items-center  text-center text-lg-start justify-content-center">
                        <img className="pe-2" src={checkin} alt="" />
                        <span>
                          <span className="text_dark_blue d-block ff_montserrat  fw_semi_bold fs_xmd color_5">
                            Check-in
                          </span>
                          <span className="text_dark_blue opacity-50 ff_montserrat fw_regular fs_md color_1">
                            Add date
                          </span>
                        </span>
                      </div>
                      <div className="d-flex bg-white px-0 py-3 col-xl-2 col-lg-4 col-md-6 d-flex flex-column flex-lg-row align-items-center  text-center text-lg-start justify-content-center">
                        <img className="pe-2" src={checkout} alt="" />
                        <span>
                          <span className="text_dark_blue d-block ff_montserrat  fw_semi_bold fs_xmd color_5">
                            Check-out
                          </span>
                          <span className="text_dark_blue opacity-50 ff_montserrat fw_regular fs_md color_1">
                            Add date
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center py-3 ">
                      <button className="button transition  ff_montserrat fs_normal  fw_semi_bold fs_md text-white btn_book   d-flex flex-column flex-lg-row align-items-center  text-center text-lg-start justify-content-center">
                        Book Now
                      </button>
                    </div>
                  </article>
                )}

                {activeTab === "about" && (
                  <article className=" py-2  bg-white b_radius overflow-auto">
                    <Carousel className="d-sm-none">
                      <Carousel.Item>
                        <div className="d-flex bg-white  py-3  px-0 col-xl-2 col-lg-4 col-md-6 d-flex flex-column flex-lg-row align-items-center  text-center text-lg-start  justify-content-center">
                          <img className="pe-2" src={location} alt="location" />
                          <span>
                            <span className="text_dark_blue d-block ff_montserrat  fw_semi_bold fs_xmd color_5">
                              Location
                            </span>
                            <span className="text_dark_blue opacity-50 ff_montserrat fw_regular fs_md color_1">
                              Where are you going?
                            </span>
                          </span>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="d-flex bg-white  py-3  px-0 col-xl-2 col-lg-4 col-md-6 d-flex flex-column flex-lg-row align-items-center  text-center text-lg-start justify-content-center">
                          <img className="pe-2" src={Travler} alt="" />
                          <span>
                            <span className="text_dark_blue d-block ff_montserrat  fw_semi_bold fs_xmd color_5">
                              Travelers
                            </span>
                            <span className="text_dark_blue opacity-50 ff_montserrat fw_regular fs_md color_1">
                              Add guest
                            </span>
                          </span>
                        </div>
                      </Carousel.Item>
                    </Carousel>
                    <div className=" b_radius row justify-content-evenly d-none d-sm-flex">
                      <div className="d-flex bg-white  py-4  px-0 col-xl-2 col-lg-4 col-md-6 d-flex flex-column flex-lg-row align-items-center  text-center text-lg-start  justify-content-center">
                        <img className="pe-2" src={location} alt="" />
                        <span>
                          <span className="text_dark_blue d-block ff_montserrat  fw_semi_bold fs_xmd color_5">
                            Location
                          </span>
                          <span className="text_dark_blue opacity-50 ff_montserrat fw_regular fs_md color_1">
                            Where are you going?
                          </span>
                        </span>
                      </div>
                      <div className="d-flex bg-white  py-4  px-0 col-xl-2 col-lg-4 col-md-6 d-flex flex-column flex-lg-row align-items-center  text-center text-lg-start justify-content-center">
                        <img className="pe-2" src={Travler} alt="" />
                        <span>
                          <span className="text_dark_blue d-block ff_montserrat  fw_semi_bold fs_xmd color_5">
                            Travelers
                          </span>
                          <span className="text_dark_blue opacity-50 ff_montserrat fw_regular fs_md color_1">
                            Add guest
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center py-3 ">
                      <button className="button transition  ff_montserrat fs_normal  fw_semi_bold fs_md text-white btn_book   d-flex flex-column flex-lg-row align-items-center  text-center text-lg-start justify-content-center">
                        Search
                      </button>
                    </div>
                  </article>
                )}

                {activeTab === "contact" && (
                  <article className=" py-2  bg-white b_radius overflow-auto">
                    <Carousel className="d-sm-none">
                      <Carousel.Item>
                        <div className="bg-white py-3 col-xl-3 col-lg-4 col-md-6 col-12 d-flex  align-items-center d-lg-block ">
                          <img className="pe-2" src={Travler} alt="" />
                          <span>
                            <span className="text_dark_blue d-block ff_montserrat  fw_semi_bold fs_xmd color_5">
                              Visetores ?
                            </span>
                            <span className="text_dark_blue ff_montserrat fw_regular fs_md color_1">
                              Search Room
                            </span>
                          </span>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="d-flex bg-white py-3 col-xl-3 col-lg-4 col-md-6 col-12  d-flex flex-column align-items-center d-lg-block">
                          <img className="pe-2" src={checkout} alt="" />
                          <span>
                            <span className="text_dark_blue d-block ff_montserrat  fw_semi_bold fs_xmd color_5">
                              Find Store
                            </span>
                            <span className="text_dark_blue opacity-50 ff_montserrat fw_regular fs_md color_1">
                              Add content
                            </span>
                          </span>
                        </div>{" "}
                      </Carousel.Item>
                      <Carousel.Item>
                        <div className="d-flex bg-white py-3 col-xl-3 col-lg-4 col-md-6 col-12  d-flex flex-column align-items-center d-lg-block">
                          <img className="pe-2" src={location} alt="" />
                          <span>
                            <span className="text_dark_blue d-block ff_montserrat  fw_semi_bold fs_xmd color_5">
                              Location
                            </span>
                            <span className="text_dark_blue ff_montserrat fw_regular fs_md color_1">
                              Get our location
                            </span>
                          </span>
                        </div>
                      </Carousel.Item>
                    </Carousel>

                    <div className=" b_radius row justify-content-evenly d-none d-sm-flex">
                      <div className="d-flex bg-white  py-4  px-0 col-xl-2 col-lg-4 col-md-6 d-flex flex-column flex-lg-row align-items-center  text-center text-lg-start  justify-content-center">
                        <img className="pe-2" src={location} alt="" />
                        <span>
                          <span className="text_dark_blue d-block ff_montserrat  fw_semi_bold fs_xmd color_5">
                            Location
                          </span>
                          <span className="text_dark_blue opacity-50 ff_montserrat fw_regular fs_md color_1">
                            Where are you going?
                          </span>
                        </span>
                      </div>
                      <div className="d-flex bg-white  py-4  px-0 col-xl-2 col-lg-4 col-md-6 d-flex flex-column flex-lg-row align-items-center  text-center text-lg-start justify-content-center">
                        <img className="pe-2" src={Travler} alt="" />
                        <span>
                          <span className="text_dark_blue d-block ff_montserrat  fw_semi_bold fs_xmd color_5">
                            Travelers
                          </span>
                          <span className="text_dark_blue opacity-50 ff_montserrat fw_regular fs_md color_1">
                            Add guest
                          </span>
                        </span>
                      </div>
                      <div className="d-flex bg-white  py-3  px-0 col-xl-2 col-lg-4 col-md-6 d-flex flex-column flex-lg-row align-items-center  text-center text-lg-start justify-content-center">
                        <img className="pe-2" src={checkin} alt="" />
                        <span>
                          <span className="text_dark_blue d-block ff_montserrat  fw_semi_bold fs_xmd color_5">
                            Check-in
                          </span>
                          <span className="text_dark_blue opacity-50 ff_montserrat fw_regular fs_md color_1">
                            Add date
                          </span>
                        </span>
                      </div>
                      <div className="d-flex bg-white px-0 py-3 col-xl-2 col-lg-4 col-md-6 d-flex flex-column flex-lg-row align-items-center  text-center text-lg-start justify-content-center">
                        <img className="pe-2" src={checkout} alt="" />
                        <span>
                          <span className="text_dark_blue d-block ff_montserrat  fw_semi_bold fs_xmd color_5">
                            Check-out
                          </span>
                          <span className="text_dark_blue opacity-50 ff_montserrat fw_regular fs_md color_1">
                            Add date
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center py-3">
                      <button className="button transition  ff_montserrat fs_normal  fw_semi_bold fs_md text-white btn_book   d-flex flex-column flex-lg-row align-items-center  text-center text-lg-start ">
                        Contact Us
                      </button>
                    </div>
                  </article>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
