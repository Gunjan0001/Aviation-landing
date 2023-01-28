import React from "react";
import cloud from "../assets/images/png/cloud.png";
const Booknow = () => {
  return (
    <>
      <section className=" py-md-4" id="schedule">
        <div className="container">
          <div className="row my-5 align-items-center">
            <div className="col-md-6">
              <img src={cloud} alt="lets-fly simg" className="w-100 mb-3" />
            </div>
            <div className="col-md-6">
              <p className=" ff_montserrat fs_normal fw_large fs_lg color_3 text-center text-md-start">
                Let’s Fly
              </p>
              <h2 className="ff_montserrat fs_normal fw_bold fs_xxxlg color_7 text-center text-md-start">
                It’s one of the leading online flight booking platforms in the
                world
              </h2>
              <p className="ff_montserrat fs_normal fw_medium fs_md color_7 mt-4 ps-3 position-relative circle ">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text
              </p>
              <p className="ff_montserrat fs_normal fw_medium fs_md color_7 ps-3 position-relative circle ">
                If you are going to use a passage of Lorem Ipsum
              </p>
              <p className="ff_montserrat fs_normal fw_medium fs_md color_7 ps-3 position-relative circle ">
                Lorem Ipsum is therefore always free from repetition, injected
                humour, or non-characteristic words etc.
              </p>
              <p className="ff_montserrat fs_normal fw_medium fs_md color_7 ps-3 position-relative circle ">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <div className="d-flex  justify-content-center justify-content-md-start ">
                <button className="button ff_montserrat fs_normal fw-semibold fs_md text-white mt-3 transition ">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booknow;
