import React from "react";
import { FaRegClock } from "react-icons/fa6";

const MostPopularNews = () => {
  return (
    <>
      <div className=" w-full h-[460px] mt-[70px] mb-[57px] flex justify-center items-center gap-[30px] ">
            <div className=" firstSectionBigImage w-[570px] p-5 text-white h-[460px]  ">
          <div className=" flex justify-between ">
            <img
              className=" w-auto h-[12px] "
              src="photos/Slider.png"
              alt="dot"
            />
            <div className=" w-[80px] h-[30px] bg-[#E12127] flex items-center justify-center ">
              <p className="text-[15px] font-semibold font-WorkSans text-white text-center ">
                Fashion{" "}
              </p>
            </div>
          </div>

          <div className=" h-[93%] flex justify-end flex-col ">
            <p className="flex h-[30px] items-center gap-2">
              <span className="text-[30px]">
                {" "}
                <FaRegClock />{" "}
              </span>
              July 02, 2021
            </p>
            <h3 className=" text-[25px] font-semibold font-WorkSans ">
              {" "}
              Hedonism and Tailoring: The Women’s Spring 2021 Collections Had It
              All{" "}
            </h3>
          </div>
             </div>

        <div className="h-[460px] flex flex-col items-start ">


        <div className="  w-[570px]  text-white  flex gap-[30px]  ">
          <div className=" firstSectionSmallImage w-[270px] p-5 text-white h-[215px]  ">
            <div className=" flex justify-between ">
              <div className=" w-[100px] h-[30px] bg-[#10D0FA] flex items-center justify-center ">
                <p className="text-[15px] font-semibold font-WorkSans text-white text-center ">
                Technology{" "}
                </p>
              </div>
            </div>

            <div className=" h-[93%] flex justify-end flex-col ">
              <p className="flex h-[30px] text-[13px] items-center gap-2">
                <span className="text-[18px]">
                  {" "}
                  <FaRegClock />{" "}
                </span>
                July 02, 2021
              </p>
              <h3 className=" text-[18px] font-semibold font-WorkSans ">
                {" "}
                The secret to moving this ancient sphinx{" "}
              </h3>
            </div>
          </div>

          <div className=" firstSectionSmallImage w-[270px] p-5 text-white h-[215px]  ">
            <div className=" flex justify-between ">
              <div className=" w-[80px] h-[30px] bg-[#5200FF] flex items-center justify-center ">
                <p className="text-[15px] font-semibold font-WorkSans text-white text-center ">
                Travel{" "}
                </p>
              </div>
            </div>

            <div className=" h-[93%] flex justify-end flex-col ">
              <p className="flex h-[30px] text-[13px] items-center gap-2">
                <span className="text-[18px]">
                  {" "}
                  <FaRegClock />{" "}
                </span>
                July 02, 2021
              </p>
              <h3 className=" text-[18px] font-semibold font-WorkSans ">
                {" "}
                The secret to moving this ancient sphinx{" "}
              </h3>
            </div>
          </div>
        </div>

        <div className=" firstSectionSmallthreeImage mt-[30px] w-[570px] p-5 text-white h-[215px]  ">
            <div className=" flex justify-end ">
              <div className=" w-[80px] h-[30px] bg-[#FF005C] flex items-center justify-center ">
                <p className="text-[15px] font-semibold font-WorkSans text-white text-center ">
                Lifestyle{" "}
                </p>
              </div>
            </div>

            <div className=" h-[93%] flex justify-end flex-col ">
              <p className="flex h-[30px] text-[13px] items-center gap-2">
                <span className="text-[18px]">
                  {" "}
                  <FaRegClock />{" "}
                </span>
                July 02, 2021
              </p>
              <h3 className=" text-[18px] font-semibold font-WorkSans ">
                {" "}
                The secret to moving this ancient sphinx{" "}
              </h3>
            </div>
          </div>

        



        </div>


      </div>
    </>
  );
};

export default MostPopularNews;
