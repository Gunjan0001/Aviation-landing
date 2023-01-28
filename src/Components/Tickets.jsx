import React from "react";
import raju from "../assets/images/png/raju.png";
import zaire from "../assets/images/png/zarie.png";
import marcus from "../assets/images/png/marcus.png";
import davis from "../assets/images/png/davis.png";
import male from "../assets/images/png/male.png";
import female from "../assets/images/png/female.png";
import aged from "../assets/images/png/aged.png";
import girl from "../assets/images/png/girl.png";
import Carousel from "react-bootstrap/Carousel";
const Tickets = () => {
  return (
    <>
      <section className="pt-md-5">
        <div className="container">
          <h2 className="ff_montserrat fw_bold  fs_xlr color_5 text-center mt-5">
            Best travelars of this month
          </h2>
          <Carousel className="d-sm-none">
            <Carousel.Item>
              <div className="box text-center pb-3 scale transition">
                <img src={raju} alt="s4-image1" className="w-100" />
                <img src={male} alt="s4-profilepic1" className="mt_10" />
                <p className="ff_montserrat fw_semi_bold fs_normal fs_xlg color_2 mb-0">
                  Raju Mullah
                </p>
                <p className="ff_montserrat fw_medium fs_normal fs_md color_10">
                  @rajumulllah
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="box text-center pb-3 scale transition">
                <img src={zaire} alt="s4-image2" className="w-100" />
                <img src={female} alt="s4-profilepic2" className="mt_10" />
                <p className="ff_montserrat fw_semi_bold fs_normal fs_xlg color_2 mb-0">
                  Zaire Vetrovs
                </p>
                <p className="ff_montserrat fw_medium fs_normal fs_md color_10">
                  @zairevetrovs
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="box text-center pb-3 scale transition">
                <img src={marcus} alt="s4-image3" className="w-100" />
                <img src={aged} alt="s4-profilepic3" className="mt_10" />
                <p className="ff_montserrat fw_semi_bold fs_normal fs_xlg color_2 mb-0">
                  Marcus Dias
                </p>
                <p className="ff_montserrat fw_medium fs_normal fs_md color_10">
                  @marcusdias
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="box text-center pb-3 scale transition">
                <img src={davis} alt="s4-image4" className="w-100" />
                <img src={girl} alt="s4-profilepic4" className="mt_10" />
                <p className="ff_montserrat fw_semi_bold fs_normal fs_xlg color_2 mb-0">
                  Davis Schleifer
                </p>
                <p className="ff_montserrat fw_medium fs_normal fs_md color_10">
                  @davisschleifer
                </p>
              </div>
            </Carousel.Item>
          </Carousel>
          <div className="row my-5 d-none d-sm-flex">
            <div className="col-12 col-sm-6 col-lg-3 mb-3">
              <div className="box text-center pb-3 scale transition">
                <img src={raju} alt="s4-image1" className="w-100" />
                <img src={male} alt="s4-profilepic1" className="mt_10" />
                <p className="ff_montserrat fw_semi_bold fs_normal fs_xlg color_2 mb-0">
                  Raju Mullah
                </p>
                <p className="ff_montserrat fw_medium fs_normal fs_md color_10">
                  @rajumulllah
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-3">
              <div className="box text-center pb-3 scale transition">
                <img src={zaire} alt="s4-image2" className="w-100" />
                <img src={female} alt="s4-profilepic2" className="mt_10" />
                <p className="ff_montserrat fw_semi_bold fs_normal fs_xlg color_2 mb-0">
                  Zaire Vetrovs
                </p>
                <p className="ff_montserrat fw_medium fs_normal fs_md color_10">
                  @zairevetrovs
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-3">
              <div className="box text-center pb-3 scale transition">
                <img src={marcus} alt="s4-image3" className="w-100" />
                <img src={aged} alt="s4-profilepic3" className="mt_10" />
                <p className="ff_montserrat fw_semi_bold fs_normal fs_xlg color_2 mb-0">
                  Marcus Dias
                </p>
                <p className="ff_montserrat fw_medium fs_normal fs_md color_10">
                  @marcusdias
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-3">
              <div className="box text-center pb-3 scale transition">
                <img src={davis} alt="s4-image4" className="w-100" />
                <img src={girl} alt="s4-profilepic4" className="mt_10" />
                <p className="ff_montserrat fw_semi_bold fs_normal fs_xlg color_2 mb-0">
                  Davis Schleifer
                </p>
                <p className="ff_montserrat fw_medium fs_normal fs_md color_10">
                  @davisschleifer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tickets;
