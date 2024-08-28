import React from "react";
import { FaRegClock } from "react-icons/fa6";

const Div = () => {
  return (
    <>
      <div className=" firstSectionSmallImage w-[270px] p-5 text-white h-[215px]  ">
        <div className=" flex justify-end ">
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
    </>
  );
};

export default Div;
