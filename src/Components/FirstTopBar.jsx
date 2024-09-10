import React from "react";

const FirstTopBar = () => {
  return (
    <>
      <div className="top w-full h-[50px] flex justify-center  bg-[#000D39] ">
        <div className=" w-[1170px] flex items-center gap-[227px]  justify-end ">
          {/* one */}
          <div className=" flex gap-[19px]">
            {/* Tranding */}
            <div className="tranding flex items-center rounded-[3px] pl-[14px] pr-[14px] w-[100px] h-[34px] bg-[#ffffff37] ">
              <p className="text-[17px] font-medium text-white font-WorkSans ">
                Tranding
              </p>
            </div>
            {/* Tranding */}

            {/* Tranding text */}
            <div className="tranding flex items-center h-[28px]">
              <p className="text-[17px] font-medium text-white font-WorkSans ">
                Every success is helped by someone behind the people
              </p>
            </div>
            {/* Tranding text */}
          </div>
          {/* one */}

          {/* tow */}
          <div className=" h-[50px] gap-[19px] flex  items-center ">
            {/* wether */}
            <div className="wether flex gap-[10px] text-white">
              <img
                className=" w-[30px] h-[30px] "
                src="photos/wether.png"
                alt="wether"
              />
              <p>Dhaka 36°</p>
            </div>
            {/* wether */}

            {/* date */}
            <div className="date flex gap-[10px] text-white">
              <img
                className=" w-[30px] h-[30px] "
                src="photos/date.png"
                alt="date"
              />
              <p>Monday - July 2, 2021</p>
            </div>
            {/* date */}
          </div>
          {/* tow */}
        </div>
      </div>
    </>
  );
};

export default FirstTopBar;
