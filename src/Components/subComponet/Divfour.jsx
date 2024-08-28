import React from "react";
import { FaRegClock } from "react-icons/fa6";

const Divfour = () => {
  return (
    <div>
      <div className=" firstSectionSmallImage w-[270px] p-5 text-white h-[215px]  ">
        <div className=" flex justify-end ">
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
            City of New York on a trip to Arctic Nunavut{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Divfour;
