import React from "react";
import city1 from "../assets/images/png/city1.png";
import city2 from "../assets/images/png/city2.png";
import city3 from "../assets/images/png/city3.png";
import city4 from "../assets/images/png/city4.png";
import Carousel from "react-bootstrap/Carousel";
const Memories = () => {
  return (
    <>
      <section className="py-md-5">
        <div className="container">
          <h2 className="ff_montserrat fw_bold  fs_xlr color_5 text-center py-md-4 ">
            Make memories with us
          </h2>
          <Carousel className="d-sm-none">
            <Carousel.Item>
              <img className="w-100 position" src={city1} alt="city" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="w-100 " src={city2} alt="city" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="w-100 position " src={city3} alt="city" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="w-100 " src={city4} alt="city" />
            </Carousel.Item>
          </Carousel>
          <div className="row align-items-center py-5 d-none d-sm-flex">
            <div className="col-12 col-sm-6 col-lg-3 ">
              <img
                className="w-100 position scales transition"
                src={city1}
                alt="city"
              />
            </div>
            <div className="col-12 col-sm-6 col-lg-3 ">
              <img
                className="w-100 scales transition "
                src={city2}
                alt="city"
              />
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <img
                className="w-100 position scales transition"
                src={city3}
                alt="city"
              />
            </div>
            <div className="col-12 col-sm-6 col-lg-3 ">
              <img className="w-100 scales transition" src={city4} alt="city" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Memories;
