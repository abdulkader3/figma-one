import React from 'react'
import Div from './subComponet/Div'
import DivTow from './subComponet/DivTow'
import Divthree from './subComponet/Divthree'
import Divfour from './subComponet/Divfour'


const Topnews = () => {
  return (
    <>
    <div className=" h-[281px] w-full flex flex-col items-center  ">

        <div className="flex items-center gap-8">
            <h3 className='text-[25px] font-semibold font-WorkSans text-[#000D39] ' >Todays Top News</h3>
            <div className=" w-[800px] h-[1px] bg-black "></div>
            <img className='h-[12px]' src="photos/SliderTow.png" alt="dot" />
        </div>


        <div className="w-[1170px] flex gap-[30px] justify-center ">
          <Div/>
          <DivTow/>
          <Divthree/>
          <Divfour/>
        </div>
    </div>
      
    </>
  )
}

export default Topnews
