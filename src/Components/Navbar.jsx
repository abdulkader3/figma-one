import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdSearch } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";



const Navbar = () => {

    const [isMoved, setIsMoved] = useState(false);

    const handleClick = () => {
        setIsMoved(!isMoved);
      };



  return (
    <>
    <nav className='h-[80px] bg-[#E5E9F6] flex justify-center w-full'>
        <div className="navOneDiv   w-[1170px] flex justify-between items-center  ">
            <ul className='flex justify-between w-[80%] '>
                <li className=' text-[17px] font-semibold font-WorkSans text-[#000D39] hover:text-[#E12127] transition-all ' > <Link to='#' > Home+ </Link> </li>
                <li className=' text-[17px] font-semibold font-WorkSans text-[#000D39] hover:text-[#E12127] transition-all ' > <Link to='#' > Fashion </Link> </li>
                <li className=' text-[17px] font-semibold font-WorkSans text-[#000D39] hover:text-[#E12127] transition-all ' > <Link to='#' > Travel </Link> </li>
                <li className=' text-[17px] font-semibold font-WorkSans text-[#000D39] hover:text-[#E12127] transition-all ' > <Link to='#' > Tecnology </Link> </li>
                <li className=' text-[17px] font-semibold font-WorkSans text-[#000D39] hover:text-[#E12127] transition-all ' > <Link to='#' > lifestyle </Link> </li>
                <li className=' text-[17px] font-semibold font-WorkSans text-[#000D39] hover:text-[#E12127] transition-all ' > <Link to='#' > Features </Link> </li>
                <li className=' text-[17px] font-semibold font-WorkSans text-[#000D39] hover:text-[#E12127] transition-all ' > <Link to='#' > Education </Link> </li>
                <li className=' text-[17px] font-semibold font-WorkSans text-[#000D39] hover:text-[#E12127] transition-all ' > <Link to='#' > Pages+ </Link> </li>
                <li className=' text-[17px] font-semibold font-WorkSans text-[#000D39] hover:text-[#E12127] transition-all ' > <Link to='#' > Sports </Link> </li>
            </ul>
            <div className="navButton flex gap-[26px] ">
                <div className="flex gap-5">
                <button className=' text-[30px] text-[#000D39] ' > <IoMdSearch/> </button>
                <button className=' text-[30px] text-[#000D39] ' > <AiOutlineMenu/> </button>
                </div>
                <button
                    onClick={handleClick}
                    className="w-[50px] h-[26px] bg-[#B4B8C6] p-1 flex items-center rounded-[73px]"
                  >
                    <div
                      className={`w-[20px] rounded-full h-[20px] bg-[#000D39] transform transition-transform duration-500 ${
                        isMoved ? "translate-x-[22px]" : "translate-x-0"
                      } `}
                    ></div>
                  </button>
            </div>
        </div>
    </nav>
      
    </>
  )
}

export default Navbar
