import React from "react";

const Subscribe = () => {
  return (
    <>
      <section className="py-2 py-md-5 subscribe_bg">
        <div className="container ">
          <div className=" mx-auto d-flex flex-column align-items-center justify-content-center">
            <h2 className="text-center ff_montserrat fw_bold fs_xlr color_2 mt-5">
              Subscribe Newsletter &{" "}
              <span className=" d-lg-block ">get letest news</span>
            </h2>
            <form
              action="action.php"
              className="py-2 rounded-5 w-lg-75  d-flex  justify-content-between px-2 ps-3  mb-5 shadow mt-4"
            >
              <input
                required
                type="email"
                placeholder="Enter your email address"
                className=" color_1  py-2 px-sm-2 outline border-0 rounded-4 ff_rubic fw_regular fs_lg "
              />

              <button className="ff_montserrat  fw_semibold fs_md text-white bg_blue border-0 py-2 rounded-5 px-sm-4  px-1 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
