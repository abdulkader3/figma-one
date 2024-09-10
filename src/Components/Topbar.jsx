import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Topbar = () => {
  return (
    <>
      <div className="tow flex h-[150px] bg-[#F1F4FF] justify-center ">
        <div className=" h-[150px] w-[1170px] flex justify-between items-center ">
          {/* logo */}
          <img
            className=" w-[242px] h-[60px] "
            src="photos/logo.png"
            alt="logo"
          />
          {/* logo */}

          {/* top big image */}
          <div className=" topBigImage w-[560px] p-4 h-[80px] flex items-center justify-between ">
            <div className="flex  items-center gap-[11px] ">
              {/* image */}
              <div className=" w-[107px] mt-4 h-[36px] ">
                <img src="photos/addPhoto.png" alt="image" />
              </div>
              {/* image */}

              {/* line */}
              <div className=" w-[1px] h-[36px] bg-white "></div>
              {/* line */}

              {/* text */}
              <div className=" w-[147px] text-white ">
                <p>Smart & Responsive ADVERTISEMENT</p>
              </div>
              {/* text */}
            </div>

            {/* button */}
            <button className=" w-[118px] h-[40px] bg-[#ffffff37] ">
              {" "}
              <Link to="#"> Buy Now </Link>{" "}
            </button>
            {/* button */}
          </div>
          {/* top big image */}

          {/* social midea */}
          <ul className=" flex gap-[13px] ">
            <li className=" text-[30px] hover:text-[#E12127] transition-all ">
              {" "}
              <Link to="#">
                {" "}
                <FaFacebookF />{" "}
              </Link>{" "}
            </li>
            <li className=" text-[30px] hover:text-[#E12127] transition-all ">
              {" "}
              <Link to="#">
                {" "}
                <FaTwitter />{" "}
              </Link>{" "}
            </li>
            <li className=" text-[30px] hover:text-[#E12127] transition-all ">
              {" "}
              <Link to="#">
                {" "}
                <BiLogoLinkedin />{" "}
              </Link>{" "}
            </li>
            <li className=" text-[30px] hover:text-[#E12127] transition-all ">
              {" "}
              <Link to="#">
                {" "}
                <FaWhatsapp />{" "}
              </Link>{" "}
            </li>
            <li className=" text-[30px] hover:text-[#E12127] transition-all ">
              {" "}
              <Link to="#">
                {" "}
                <FaInstagram />{" "}
              </Link>{" "}
            </li>
          </ul>
          {/* social midea */}

          {/* user */}
          <Link to="#">
            {" "}
            <img
              className=" w-[50px] h-[50px] "
              src="photos/User.png"
              alt="user"
            />{" "}
          </Link>
          {/* user */}
        </div>
      </div>
    </>
  );
};

export default Topbar;
