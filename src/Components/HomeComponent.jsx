import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";



const HomeComponent = () => {
  return (
    <>
    <div className="main">

        {/* top one */}
        <div className="top w-full h-[50px] flex justify-between items-center  bg-[#000D39] ">


           {/* one */}
           <div className=" flex gap-[19px]">
             {/* Tranding */}
             <div className="tranding flex items-center rounded-[3px] pl-[14px] pr-[14px] w-[100px] h-[34px] bg-[#ffffff37] ">
                <p className='text-[17px] font-medium text-white font-WorkSans ' >Tranding</p>
            </div>
            {/* Tranding */}

            {/* Tranding text */}
            <div className="tranding flex items-center h-[28px]">
                <p className='text-[17px] font-medium text-white font-WorkSans ' >Every success is helped by someone behind the people</p>
            </div>
            {/* Tranding text */}
           </div>
           {/* one */}

           {/* tow */}
           <div className=" h-[50px] gap-[19px] flex  items-center ">


            {/* wether */}
            <div className="wether flex gap-[10px] text-white">
                <img className=' w-[30px] h-[30px] ' src="photos/wether.png" alt="wether" />
                <p>Dhaka 36°</p>

            </div>
            {/* wether */}


            {/* date */}
            <div className="date flex gap-[10px] text-white">
                <img className=' w-[30px] h-[30px] ' src="photos/date.png" alt="date" />
                <p>Monday - July 2, 2021</p>

            </div>
            {/* date */}
           </div>
           {/* tow */}

        </div>
        {/* top one */}


        {/* top tow */}
        <div className="tow flex h-[150px]  items-center bg-[#F1F4FF] justify-between ">


            {/* logo */}
            <img className=' w-[242px] h-[60px] ' src="photos/logo.png" alt="logo" />
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
            <button className=' w-[118px] h-[40px] bg-[#ffffff37] ' > <Link to='#'> Buy Now </Link> </button>
            {/* button */}


            </div>
            {/* top big image */}



            {/* social midea */}
            <ul className=' flex gap-[13px] '>
                <li className=' text-[30px] hover:text-[#E12127] transition-all ' > <Link to='#'> <FaFacebookF/> </Link> </li>
                <li className=' text-[30px] hover:text-[#E12127] transition-all ' > <Link to='#'> <FaTwitter/> </Link> </li>
                <li className=' text-[30px] hover:text-[#E12127] transition-all ' > <Link to='#'> <BiLogoLinkedin /> </Link> </li>
                <li className=' text-[30px] hover:text-[#E12127] transition-all ' > <Link to='#'> <FaWhatsapp/> </Link> </li>
                <li className=' text-[30px] hover:text-[#E12127] transition-all ' > <Link to='#'> <FaInstagram/> </Link> </li>
            </ul>
            {/* social midea */}

              {/* user */}
              <Link to='#'> <img className=' w-[50px] h-[50px] ' src="photos/User.png" alt="user" /> </Link>
            {/* user */}

        </div>
        {/* top tow */}
    </div>
      
    </>
  )
}

export default HomeComponent
