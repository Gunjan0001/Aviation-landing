import React from "react";
import logo from "../assets/images/png/logo.png";
import fb from "../assets/images/png/facebook.png";
import In from "../assets/images/png/in.png";
import twiter from "../assets/images/png/twitter.png";

function Footer() {
  return (
    <>
      <section className="bg_footer pt-4 pt-md-5">
        <div className="container pt-4 pt-md-5 border_bottom">
          <div className="row b_bottom pb-5 ">
            <div className="col-md-4 ">
              <article className="pe-lg-5 d-flex d-sm-block flex-column align-items-center">
                <article className=" d-flex  align-items-center ">
                  <img src={logo} alt="logo" />
                  <h2 className="ps-2 ff_montserrat fw_extra_bold fs_lg  text-white ">
                    FT PLANE
                  </h2>
                </article>

                <p className=" ff_montserrat fw_regular fs_md fs_normal  color_10 mt-4 pe-lg-5   ">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>

                <article className=" d-none d-md-flex gap-3 mt-4 ">
                  <a
                    className="social_icon "
                    href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525804923%7Cb%7Cfacebook%20%27%7C&placement=&creative=550525804923&key"
                    target="_blank"
                  >
                    {" "}
                    <img src={fb} alt="facebook" />
                  </a>
                  <a
                    className="social_icon"
                    href="https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530338610&extra_1=s|c|547419127652|e|instagram%20login|&placement=&creative=547419127652&keyword=instagram%20login&partner_id=googlesem&extra_2=campaignid%3D13530338610%26adgroupid%3D126262414054%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3D"
                    target="_blank"
                  >
                    {" "}
                    <img src={In} alt="facebook" />
                  </a>
                  <a
                    className="social_icon"
                    href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                    target="_blank"
                  >
                    {" "}
                    <img src={twiter} alt="facebook" />
                  </a>
                </article>
              </article>
            </div>
            <div className="col-1 d-none d-md-block"></div>
            <div className="col-md-7 ">
              <div className="row mt-4 mt-md-0 text-center text-sm-start">
                <div className="col-sm-4 ">
                  <article>
                    <h2 className="fw-bold fs_24 text-white ff pt-3 ff_montserrat fw_bold fs_xxlg text-center text-sm-start ">
                      Address
                    </h2>
                    <article className="mt-3 d-flex flex-column">
                      <a
                        href="#"
                        className=" text-decoration-none mb-0 mt-3 style transition  ff_montserrat fw_regular fs_md fs_normal  color_10  "
                      >
                        Integrations
                      </a>
                      <a
                        href="#"
                        className=" text-decoration-none mb-0 mt-3  style transition ff_montserrat fw_regular fs_md fs_normal  color_10"
                      >
                        Hello
                      </a>
                      <a
                        href="#"
                        className=" text-decoration-none mb-0 mt-3 style transition  ff_montserrat fw_regular fs_md fs_normal  color_10"
                      >
                        Intercom
                      </a>
                      <a
                        href="#"
                        className=" text-decoration-none mb-0 mt-3 style transition  ff_montserrat fw_regular fs_md fs_normal  color_10"
                      >
                        Customer
                      </a>
                    </article>
                  </article>
                </div>
                <div className="col-sm-4 ">
                  <article>
                    <h2 className=" fs_24 text-white ff pt-3 ff_montserrat fw_bold fs_xxlg">
                      About
                    </h2>
                    <article className="mt-3 d-flex flex-column">
                      <a
                        href="#"
                        className=" text-decoration-none mb-0 mt-3 style transition ff_montserrat fw_regular fs_md fs_normal  color_10"
                      >
                        Our Blog
                      </a>
                      <a
                        href="#"
                        className=" text-decoration-none mb-0 mt-3 style transition ff_montserrat fw_regular fs_md fs_normal  color_10"
                      >
                        Customers
                      </a>
                      <a
                        href="#"
                        className=" text-decoration-none mb-0 mt-3 style transition ff_montserrat fw_regular fs_md fs_normal  color_10"
                      >
                        Our Team
                      </a>
                      <a
                        href="#"
                        className=" text-decoration-none mb-0 mt-3 style transition ff_montserrat fw_regular fs_md fs_normal  color_10"
                      >
                        Careers
                      </a>
                      <a
                        href="#"
                        className=" text-decoration-none mb-0 mt-3 style transition ff_montserrat fw_regular fs_md fs_normal  color_10"
                      >
                        Integrations
                      </a>
                    </article>
                  </article>
                </div>
                <div className="col-sm-4 ">
                  <article>
                    <h2 className=" fs_24 text-white ff_montserrat fw_bold fs_xxlg pt-3">
                      Support
                    </h2>
                    <article className="mt-3 d-flex flex-column">
                      <a
                        href="#"
                        className=" text-decoration-none mb-0 mt-3  style transition  ff_montserrat fw_regular fs_md fs_normal  color_10"
                      >
                        Test Zoom
                      </a>
                      <a
                        href="#"
                        className=" text-decoration-none mb-0 mt-3  style transition  ff_montserrat fw_regular fs_md fs_normal  color_10"
                      >
                        Account
                      </a>
                      <a
                        href="#"
                        className=" text-decoration-none mb-0 mt-3  style transition  ff_montserrat fw_regular fs_md fs_normal  color_10"
                      >
                        Support Center
                      </a>
                      <a
                        href="#"
                        className=" text-decoration-none mb-0 mt-3 style transition   ff_montserrat fw_regular fs_md fs_normal  color_10"
                      >
                        Live Training
                      </a>
                      <a
                        href="#"
                        className=" text-decoration-none mb-0 mt-3  style transition ff_montserrat fw_regular fs_md fs_normal  color_10 "
                      >
                        Accessibility
                      </a>
                    </article>
                  </article>
                </div>
              </div>
              <article className=" d-flex gap-3 mt-4 justify-content-center mt-5 d-md-none">
                <a
                  className="social_icon"
                  href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525804923%7Cb%7Cfacebook%20%27%7C&placement=&creative=550525804923&key"
                  target="_blank"
                >
                  {" "}
                  <img src={fb} alt="facebook" />
                </a>
                <a
                  className="social_icon"
                  href="https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530338610&extra_1=s|c|547419127652|e|instagram%20login|&placement=&creative=547419127652&keyword=instagram%20login&partner_id=googlesem&extra_2=campaignid%3D13530338610%26adgroupid%3D126262414054%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3D"
                  target="_blank"
                >
                  {" "}
                  <img src={In} alt="facebook" />
                </a>
                <a
                  className="social_icon"
                  href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                  target="_blank"
                >
                  {" "}
                  <img src={twiter} alt="facebook" />
                </a>
              </article>
            </div>
          </div>
        </div>{" "}
        <p className="text-center text-white fw-normal mt-4 fs_14 py-4 mb-0">
          Copyright &#169; FT PLANE 2022 All right reserved
        </p>
      </section>
    </>
  );
}

export default Footer;
