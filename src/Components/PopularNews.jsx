import React from "react";
import { FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosInformationCircleOutline } from "react-icons/io";

const PopularNews = () => {
  return (
    <>
      <div className=" w-full mt-[70px] mb-[121px] bg-[#F9FAFF] relative flex justify-center ">
        <div className=" mt-[57px] mb-[136px] w-[1170px] flex justify-between ">
          {/* one */}
          <div className="">
            <div className="w-[239px] h-[35px] text-[25px] font-semibold font-WorkSans text-[#000D39] ">
              <h2>Most Popular News</h2>
            </div>

            <div className=" w-[370px] h-[625px] mt-[17px] ">
              <h4 className=" text-[21px] font-medium font-WorkSans text-[#000D39] ">
                Top Stories
              </h4>
              <div className=" w-[370px] bg-white mt-[10px] h-[130px] p-5  mb-5 font-medium font-WorkSans  ">
                <p className=" text-[#555555] text-[13px] flex gap-[2px] items-center ">
                  <span className="text-[18px] text-[#E12127] ">
                    {" "}
                    <FaRegClock />
                  </span>
                  July 02, 2021
                </p>
                <h3 className="text-[18px] font-semibold font-WorkSans text-[#000D39] mt-1 ">
                  The secret to moving this ancient sphinx
                </h3>
              </div>

              <div className=" w-[370px] bg-white mt-[10px] h-[130px] p-5 mb-5 font-medium font-WorkSans  ">
                <p className=" text-[#555555] text-[13px] flex gap-[2px] items-center ">
                  <span className="text-[18px] text-[#E12127] ">
                    {" "}
                    <FaRegClock />
                  </span>
                  July 02, 2021
                </p>
                <h3 className="text-[18px] font-semibold font-WorkSans text-[#000D39] mt-1 ">
                  The secret to moving this ancient sphinx
                </h3>
              </div>

              <div className=" w-[370px] bg-white mt-[10px] h-[130px] p-5 mb-5 font-medium font-WorkSans  ">
                <p className=" text-[#555555] text-[13px] flex gap-[2px] items-center ">
                  <span className="text-[18px] text-[#E12127] ">
                    {" "}
                    <FaRegClock />
                  </span>
                  July 02, 2021
                </p>
                <h3 className="text-[18px] font-semibold font-WorkSans text-[#000D39] mt-1 ">
                  The secret to moving this ancient sphinx
                </h3>
              </div>

              <div className=" w-[370px] bg-white mt-[10px] h-[130px] p-5 mb-5 font-medium font-WorkSans  ">
                <p className=" text-[#555555] text-[13px] flex gap-[2px] items-center ">
                  <span className="text-[18px] text-[#E12127] ">
                    {" "}
                    <FaRegClock />
                  </span>
                  July 02, 2021
                </p>
                <h3 className="text-[18px] font-semibold font-WorkSans text-[#000D39] mt-1 ">
                  The secret to moving this ancient sphinx
                </h3>
              </div>
            </div>
          </div>
          {/* one */}

          {/* tow */}

          <div className="">
            {/* navbar */}
            <div className=" w-[770px] h-[50px] bg-[#E5E9F6] items-center flex justify-center ">
              <ul className="w-[622px] flex justify-between  ">
                <li>
                  {" "}
                  <Link
                    className="text-[17px] font-medium font-WorkSans text-[#000D39] hover:text-[#E12127] transition-all"
                    to="#"
                  >
                    {" "}
                    All{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link
                    className="text-[17px] font-medium font-WorkSans text-[#000D39] hover:text-[#E12127] transition-all"
                    to="#"
                  >
                    {" "}
                    Travel{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link
                    className="text-[17px] font-medium font-WorkSans text-[#000D39] hover:text-[#E12127] transition-all"
                    to="#"
                  >
                    {" "}
                    Lifestyle{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link
                    className="text-[17px] font-medium font-WorkSans text-[#000D39] hover:text-[#E12127] transition-all"
                    to="#"
                  >
                    {" "}
                    Fashion{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link
                    className="text-[17px] font-medium font-WorkSans text-[#000D39] hover:text-[#E12127] transition-all"
                    to="#"
                  >
                    {" "}
                    Tecnology{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link
                    className="text-[17px] font-medium font-WorkSans text-[#000D39] hover:text-[#E12127] transition-all"
                    to="#"
                  >
                    {" "}
                    Sports{" "}
                  </Link>{" "}
                </li>
              </ul>
            </div>
            {/* navbar */}
            
            <div className="flex mt-[34px] gap-[30px] ">
              <div className="">
                <div className=" w-[270px] mb-[33px] h-[269px] ">
                  <div className=" w-[270px] relative ">
                    <img src="photos/mostPopularRightImage.png" alt="photo" />
                    <div className=" w-[80px] h-[30px] bg-[#5200FF] flex justify-center items-center text-white text-[15px] font-semibold font-WorkSans absolute top-[10px] rounded-[3px] right-[10px] ">
                      {" "}
                      Travel{" "}
                    </div>
                  </div>
                  <p className=" text-[#555555] mt-[23px] text-[13px] font-WorkSans font-medium flex gap-[2px] items-center ">
                    <span className="text-[18px] text-[#E12127] ">
                      {" "}
                      <FaRegClock />
                    </span>
                    July 02, 2021
                  </p>
                  <h3 className="text-[18px] font-semibold font-WorkSans text-[#000D39] mt-1 ">
                    New York on a trip to Arctic Nunavut of City
                  </h3>
                </div>

                <div className=" w-[270px] h-[269px] ">
                  <div className=" w-[270px] relative ">
                    <img src="photos/mostPopularRightImage.png" alt="photo" />
                    <div className=" w-[80px] h-[30px] bg-[#E12127] flex justify-center items-center text-white text-[15px] font-semibold font-WorkSans absolute top-[10px] rounded-[3px] right-[10px] ">
                      {" "}
                      Fashion{" "}
                    </div>
                  </div>
                  <p className=" text-[#555555] mt-[23px] text-[13px] font-WorkSans font-medium flex gap-[2px] items-center ">
                    <span className="text-[18px] text-[#E12127] ">
                      {" "}
                      <FaRegClock />
                    </span>
                    July 02, 2021
                  </p>
                  <h3 className="text-[18px] font-semibold font-WorkSans text-[#000D39] mt-1 ">
                    Love Care A Beautiful Girl Breack a 24 Years Guy
                  </h3>
                </div>
              </div>

              <div className="">
                <div className=" w-[470px] h-[430px] ">
                  <div className=" w-[470px] relative ">
                    <img
                      src="photos/mostPopularRightbigImage.png"
                      alt="photo"
                    />
                    <div className=" w-[100px] h-[30px] bg-[#FF005C] flex justify-center items-center text-white text-[15px] font-semibold font-WorkSans absolute top-[20px] rounded-[3px] right-[20px] ">
                      {" "}
                      Lifestyle{" "}
                    </div>
                  </div>
                  <p className=" text-[#555555] mt-[30px] text-[15px] font-WorkSans font-medium flex gap-[2px] items-center ">
                    <span className="text-[20px] text-[#E12127] ">
                      {" "}
                      <FaRegClock />
                    </span>
                    July 02, 2021
                  </p>
                  <h3 className="text-[25px] font-semibold font-WorkSans text-[#000D39] mt-1 ">
                    Lifestyle brings big changes inpeople lives. Are you ready?
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* tow */}
        </div>
        <div className=" w-[770px] h-[130px] midPageAdd absolute  left-[30%] bottom-[-50px] ">
          <div className=" flex gap-[10px] items-center justify-end pr-2 ">
            <p className=" text-[16px] text-[#cfcfcf] ">
              {" "}
              <IoIosInformationCircleOutline />{" "}
            </p>
            <p className=" text-[16px] text-[#cfcfcf] ">X</p>
          </div>


            {/* add */}
          <div className=" w-full flex justify-between items-center  ">
            <div className=" ml-[30px] w-[147px] text-[15px] font-semibold font-WorkSans text-white h-[44px] ">
              <p> Smart & Responsive ADVERTISEMENT </p>
            </div>
            <div className=" w-[185px] text-[28px] font-semibold font-WorkSans text-white h-[70px] ">
              <p> Get 35% Off Limited Offer </p>
            </div>
            <button className=" w-[118px] mr-[41px] h-[40px] bg-[#E12127] flex text-[15px] font-semibold font-WorkSans text-white justify-center items-center ">
              {" "}
              Shop Now{" "}
            </button>
          </div>
            {/* add */}



        </div>
      </div>
    </>
  );
};

export default PopularNews;
