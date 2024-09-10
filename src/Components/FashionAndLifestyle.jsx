import React from "react";
import { FaRegClock } from "react-icons/fa6";

const FashionAndLifestyle = () => {
  return (
    <>
      <div className=" w-full h-full flex justify-center ">
        <div className=" w-[1140px] h-[546px] items-center flex gap-[30px] ">
          {/* 1st div */}
          <div className="w-[770px] h-[546px] ">
            <div className="w-full mb-[21px] gap-[11px] flex items-center">
              <h2 className=" text-[25px] font-WorkSans font-semibold ">
                Fashion & Lifestyle
              </h2>
              <div className="w-[447px] h-[1px] bg-[#CFD4E4] "></div>
              <button className=" hover:text-[#E12127] active:scale-95 transition-all text-[17px] font-medium font-WorkSans ">
                View All
              </button>
            </div>

            <div className=" w-full h-full flex gap-[30px] ">
              <div className="w-[470px] falsbp h-[490px] ">
                <div className=" w-full flex justify-end ">
                  <div className=" w-[80px] h-[30px] flex mt-[30px] mr-[30px] justify-center items-center bg-[#E12127] ">
                    <p className=" text-[15px] font-semibold font-WorkSans text-white "> <span>Fashion</span> </p>
                  </div>
                </div>
                <div className=" pl-[30px] w-full h-[94%] flex items-end ">
                  <div className="w-full">
                  <div className="flex items-center gap-[7px] text-white">
                    <FaRegClock className="text-[24px]"/>
                    <p className=" text-[17px] font-WorkSans font-medium ">July 02, 2021</p>
                  </div>
                  <h3 className=" text-[21px] font-semibold mt-[23px] mb-[66px] font-WorkSans text-white ">Hedonism and Tailoring: The Women’s
                  Spring 2021 Collections Had It All</h3>
                  </div>
                </div>
              </div>


              <div className=" w-[270px] h-[490px] flex flex-col gap-[30px] ">

                <div className=" falssp w-[270px] h-[230px]  ">

                <div className=" w-full flex justify-end ">
                  <div className=" w-[80px] h-[30px] flex mt-[10px] mr-[10px] justify-center items-center bg-[#FF005C] ">
                    <p className=" text-[15px] font-semibold font-WorkSans text-white "> <span>Lifestyle</span> </p>
                  </div>
                </div>
                <div className=" pl-[10px] w-full h-[82%] flex items-end ">
                  <div className="w-full">
                  <div className="flex items-center gap-[7px] text-white">
                    <FaRegClock className="text-[18px]"/>
                    <p className=" text-[13px] font-WorkSans font-medium ">July 02, 2021</p>
                  </div>
                  <h3 className=" text-[18px] font-semibold mt-[6px] mb-[23px] font-WorkSans text-white ">Hedonism and Tailoring: The Women’s
                  Spring 2021 Collections Had It All</h3>
                  </div>
                </div>

                </div>
                <div className=" falssp w-[270px] h-[230px]  ">

                <div className=" w-full flex justify-end ">
                  <div className=" w-[80px] h-[30px] flex mt-[10px] mr-[10px] justify-center items-center bg-[#FF005C] ">
                    <p className=" text-[15px] font-semibold font-WorkSans text-white "> <span>Lifestyle</span> </p>
                  </div>
                </div>
                <div className=" pl-[10px] w-full h-[82%] flex items-end ">
                  <div className="w-full">
                  <div className="flex items-center gap-[7px] text-white">
                    <FaRegClock className="text-[18px]"/>
                    <p className=" text-[13px] font-WorkSans font-medium ">July 02, 2021</p>
                  </div>
                  <h3 className=" text-[18px] font-semibold mt-[6px] mb-[23px] font-WorkSans text-white ">Hedonism and Tailoring: The Women’s
                  Spring 2021 Collections Had It All</h3>
                  </div>
                </div>


                </div>
              </div>
            </div>
          </div>
          {/* 1st div */}

          {/* 2nd div */}
          <div className=" w-[370px] h-[534px] bg-transparent border-[1px] ">

          </div>
          {/* 2nd div */}
        </div>
      </div>
    </>
  );
};

export default FashionAndLifestyle;
