import React from "react";
import guide from "../assets/images/png/guide.png";
import arrow from "../assets/images/png/arrow.png";
import discount from "../assets/images/png/discount.png";
import lock from "../assets/images/png/lock.png";
import online from "../assets/images/png/online.png";
import Carousel from "react-bootstrap/Carousel";
const Feature = () => {
  return (
    <>
      <section id="feature">
        <div className="container">
          <h2 className="ff_montserrat fw_bold  fs_xlr color_5 text-center">
            Our Features
          </h2>
          <Carousel className="d-sm-none">
            <Carousel.Item>
              <div className="box d-flex flex-column align-items-center justify-content-center px-3 pt-4 pb-5 scale transition">
                <img src={guide} alt="guide" />
                <h2 className="ff_montserrat fw_bold fs_normal fs_xlg color_5 mt-3">
                  Best Guide
                </h2>
                <p className="w_240 ff_montserrat fs_normal fs_md fw_regular text-center">
                  Suspendisse ultrices nibh non cursus sagittis. Morbi dictum
                  consequat ex, quis finibus magna.
                </p>
                <a href="#" className="mt-2">
                  <img src={arrow} />
                </a>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="box d-flex flex-column align-items-center justify-content-center px-3 pt-4 pb-5  scale transition">
                <img src={discount} alt="more discount" />
                <h2 className="ff_montserrat fw_bold fs_normal fs_xlg color_5 mt-3">
                  More Discount
                </h2>
                <p className="w_240 ff_montserrat fs_normal fs_md fw_regular text-center">
                  Suspendisse ultrices nibh non cursus sagittis. Morbi dictum
                  consequat ex, quis finibus magna.
                </p>
                <a href="#" className="mt-2">
                  {" "}
                  <img src={arrow} />
                </a>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="box d-flex flex-column align-items-center justify-content-center px-3 pt-4 pb-5 scale transition">
                <img src={lock} alt="private" />
                <h2 className="ff_montserrat fw_bold fs_normal fs_xlg color_5 mt-3">
                  Private
                </h2>
                <p className="w_240 ff_montserrat fs_normal fs_md fw_regular text-center">
                  Suspendisse ultrices nibh non cursus sagittis. Morbi dictum
                  consequat ex, quis finibus magna.
                </p>
                <a href="#" className="mt-2">
                  {" "}
                  <img src={arrow} />
                </a>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="box d-flex flex-column align-items-center justify-content-center px-3 pt-4 pb-5  scale transition">
                <img src={online} alt="online support" />
                <h2 className="ff_montserrat fw_bold fs_normal fs_xlg color_5 mt-3">
                  Online Support
                </h2>
                <p className="w_240 ff_montserrat fs_normal fs_md fw_regular text-center">
                  Suspendisse ultrices nibh non cursus sagittis. Morbi dictum
                  consequat ex, quis finibus magna.
                </p>
                <a href="#" className="mt-2">
                  {" "}
                  <img src={arrow} />
                </a>
              </div>
            </Carousel.Item>
          </Carousel>
          <div className="row pt-5 pb-md-5 align-items-center d-none d-sm-flex">
            <div className="col-12  col-sm-6 col-lg-3 mb-3">
              <div className="box d-flex flex-column align-items-center justify-content-center px-3 pt-4 pb-5 scales transition ">
                <img src={guide} alt="guide" />
                <h2 className="ff_montserrat fw_bold fs_normal fs_xlg color_5 mt-3">
                  Best Guide
                </h2>
                <p className="w_240 ff_montserrat fs_normal fs_md fw_regular text-center">
                  Suspendisse ultrices nibh non cursus sagittis. Morbi dictum
                  consequat ex, quis finibus magna.
                </p>
                <a href="#" className="mt-2">
                  <img src={arrow} />
                </a>
              </div>
            </div>
            <div className=" col-12 col-sm-6 col-lg-3  mb-3">
              <div className="box d-flex flex-column align-items-center justify-content-center px-3 pt-4 pb-5 scales transition  position ">
                <img src={discount} alt="more discount" />
                <h2 className="ff_montserrat fw_bold fs_normal fs_xlg color_5 mt-3">
                  More Discount
                </h2>
                <p className="w_240 ff_montserrat fs_normal fs_md fw_regular text-center">
                  Suspendisse ultrices nibh non cursus sagittis. Morbi dictum
                  consequat ex, quis finibus magna.
                </p>
                <a href="#" className="mt-2">
                  {" "}
                  <img src={arrow} />
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-3">
              <div className="box d-flex flex-column align-items-center justify-content-center px-3 pt-4 pb-5 scales transition ">
                <img src={lock} alt="private" />
                <h2 className="ff_montserrat fw_bold fs_normal fs_xlg color_5 mt-3">
                  Private
                </h2>
                <p className="w_240 ff_montserrat fs_normal fs_md fw_regular text-center">
                  Suspendisse ultrices nibh non cursus sagittis. Morbi dictum
                  consequat ex, quis finibus magna.
                </p>
                <a href="#" className="mt-2">
                  {" "}
                  <img src={arrow} />
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-3">
              <div className="box d-flex flex-column align-items-center justify-content-center px-3 pt-4 pb-5 scales transition  position">
                <img src={online} alt="online support" />
                <h2 className="ff_montserrat fw_bold fs_normal fs_xlg color_5 mt-3">
                  Online Support
                </h2>
                <p className="w_240 ff_montserrat fs_normal fs_md fw_regular text-center">
                  Suspendisse ultrices nibh non cursus sagittis. Morbi dictum
                  consequat ex, quis finibus magna.
                </p>
                <a href="#" className="mt-2">
                  {" "}
                  <img src={arrow} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
