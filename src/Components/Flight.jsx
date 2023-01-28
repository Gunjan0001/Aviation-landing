import React from "react";
import earth_plane from "../assets/images/png/earth.png";
import aeroplane from "../assets/images/png/aeroplane.png";
import left from "../assets/images/png/left.png";
import right from "../assets/images/png/right.png";
import bar_code from "../assets/images/png/barcode.png";
import shortline from "../assets/images/png/shortline.png";
const Flight = () => {
  return (
    <>
      <section className=" blue pt-5">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-12 col-md-6">
              {" "}
              <div className="text-center text-md-start ">
                <h2 className="ff_montserrat fw_bold fs_xlr text-white w_496 mx-auto ">
                  Book Popular Flight Tickets
                </h2>
              </div>
              <div className="text-center text-md-start ">
                <p className="ff_montserrat fw_regular  fs_md color_4  w_496 mx-auto ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
              <div className="text-center text-md-start">
                <img
                  className="w-100 width_315"
                  src={earth_plane}
                  alt="earth"
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex justify-content-center pb-5 gap-5">
                <div className="shadows px-4 pt-4 pb-2">
                  <div className="d-flex align-items-center justify-content-between">
                    <span
                      className="ff_montserrat fw_medium color_3 changing fs_md text-decoration-none"
                      href="#"
                    >
                      Economy Saver
                    </span>
                    <div className="d-flex align-items-center">
                      <p className="ff_montserrat fw_semi_bold fs_md color_5 mb-0 me-2">
                        UK
                      </p>
                      <img src={aeroplane} alt="aeroplane" />
                      <p className="ff_montserrat fw_semi_bold fs_md color_5 mb-0 ms-2">
                        BD
                      </p>
                    </div>
                  </div>
                  <p className="ff_montserrat fw_bold fs_md color_5 mb-0 mt-4 ">
                    6 Flight Tickets
                  </p>
                  <div className="row my-4 position-relative">
                    <div className="col-6">
                      <p className="fs_xsm fw_medium ff_Montserrat color_8 mb-0 ">
                        Passenger
                      </p>
                      <h5 className="fs_md fw_semi_bold ff_Montserrat mt-2 color_5">
                        Raju Mullah
                      </h5>
                      <p className="fs_xsm fw_medium ff_Montserrat color_8 mb-0 ">
                        Flight
                      </p>
                      <h5 className="fs_md fw_semi_bold ff_Montserrat mt-2 color_5">
                        #5486626661
                      </h5>
                      <p className="fs_xsm fw_medium ff_Montserrat color_8 mb-0 ">
                        Class
                      </p>
                      <h5 className="fs_md fw_semi_bold ff_Montserrat mt-2 color_5">
                        Economy
                      </h5>
                    </div>
                    <div className="col-6 ">
                      <p className="fs_xsm fw_medium ff_Montserrat color_8 mb-0 ">
                        Date
                      </p>
                      <h5 className="fs_md fw_semi_bold ff_Montserrat mt-2 color_5">
                        20 Nov 2022
                      </h5>
                      <p className="fs_xsm fw_medium ff_Montserrat color_8 mb-0 ">
                        Gate
                      </p>
                      <h5 className="fs_md fw_semi_bold ff_Montserrat mt-2 color_5">
                        20 A
                      </h5>
                      <p className="fs_xsm fw_medium ff_Montserrat color_8 mb-0 ">
                        Seats
                      </p>
                      <h5 className="fs_md fw_semi_bold ff_Montserrat mt-2 color_5">
                        5B - 11B
                      </h5>
                    </div>
                    <div className=" position-relative border_dashed mb-5"></div>
                    <img src={bar_code} alt="barcode" />
                  </div>
                </div>
                <div className="mt-5 d-none d-lg-block">
                  <article className="circles mb-3 ms-2"></article>
                  <article className="circles mb-3 ms-2"></article>
                  <article className="circles mb-3 ms-2"></article>
                  <article className="circles mb-3 ms-2"></article>
                  <article className="circles mb-3 ms-2"></article>
                  <article className="circles mb-3 ms-2"></article>
                  <div className="d-flex flex-column">
                    <img
                      className="ms-3 h_151 mt-4 "
                      src={shortline}
                      alt="line"
                    />
                    <a href="#">
                      <img
                        className=" mt-4 color transition"
                        src={left}
                        alt="line"
                      />
                    </a>
                    <a href="#">
                      <img
                        className="color mt-2 transition"
                        src={right}
                        alt="line"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Flight;
