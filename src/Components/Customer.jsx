import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import map from "../assets/images/png/map.png";
import jaylon from "../assets/images/png/jaylon.png";
import star from "../assets/images/png/star.png";
import leftarrow from "../assets/images/png/leftarrow.png";
import rightarrow from "../assets/images/png/rightarrow.png";
export default function SimpleSlider() {
  var settings = {
    dots: false,

    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="pt-md-2" id="order">
      <div className="container">
        <p className="ff_montserrat fs_normal fw_semi_bold fs_xxlg color_3 text-center mt-5">
          What’s our customer saying
        </p>
        <h2 className="ff_montserrat fs_normal fw_bold fs_xlr color_2 text-center">
          Our Customer Feedback
        </h2>
        <div className="row align_items_center mt-5">
          <div className="col-12 col-md-7">
            <div>
              <img className="w-100" src={map} alt="map" />
            </div>
          </div>
          <div className="col-12 col-md-5">
            <Slider className="card_1" {...settings}>
              <div className=" p-3">
                <div className="d-flex align-items-center ">
                  <img src={jaylon} alt="jaylon" />
                  <div className="ms-3">
                    <p className="ff_montserrat fw_semi_bold fs_lg mb-0 color_2">
                      Jaylon Vaccaro
                    </p>
                    <div className="d-flex align-items-center mt-1">
                      <img className="me-1" src={star} alt="star" />
                      <img className="me-1" src={star} alt="star" />
                      <img className="me-1" src={star} alt="star" />
                      <img className="me-1" src={star} alt="star" />
                      <img className="me-1" src={star} alt="star" />
                    </div>
                  </div>
                </div>
                <p className="ff_montserrat  fw_medium fs_xmd fs_italic mt-3 color_9 w_458">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don
                </p>
              </div>
              <div className="card_1 p-3">
                <div className="d-flex align-items-center ">
                  <img src={jaylon} alt="jaylon" />
                  <div className="ms-3">
                    <p className="ff_montserrat fw_semi_bold fs_lg mb-0 color_2">
                      Jaylon Vaccaro
                    </p>
                    <div className="d-flex align-items-center mt-1">
                      <img className="me-1" src={star} alt="star" />
                      <img className="me-1" src={star} alt="star" />
                      <img className="me-1" src={star} alt="star" />
                      <img className="me-1" src={star} alt="star" />
                      <img className="me-1" src={star} alt="star" />
                    </div>
                  </div>
                </div>
                <p className="ff_montserrat  fw_medium fs_xmd fs_italic mt-3 color_9 w_458">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don
                </p>
              </div>
              <div className="card_1 p-3">
                <div className="d-flex align-items-center ">
                  <img src={jaylon} alt="jaylon" />
                  <div className="ms-3">
                    <p className="ff_montserrat fw_semi_bold fs_lg mb-0 color_2">
                      Jaylon Vaccaro
                    </p>
                    <div className="d-flex align-items-center mt-1">
                      <img className="me-1" src={star} alt="star" />
                      <img className="me-1" src={star} alt="star" />
                      <img className="me-1" src={star} alt="star" />
                      <img className="me-1" src={star} alt="star" />
                      <img className="me-1" src={star} alt="star" />
                    </div>
                  </div>
                </div>
                <p className="ff_montserrat  fw_medium fs_xmd fs_italic mt-3 color_9 w_458">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don
                </p>
              </div>
            </Slider>
            <div className="d-flex align-items-center justify-content-center">
              <a href="#">
                {" "}
                <img className="" src={leftarrow} alt="arrow" />
              </a>
              <a href="#">
                <img className="mt-3 " src={rightarrow} alt="arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
