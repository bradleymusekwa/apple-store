import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";


function WhiteBGWatchBaner({ image, logo, link }) {
  return (
    <div className=" md:w-[48vw] h-[100%] bg-[#fafafa] flex flex-col justify-between ">
    <div className=" flex-col justify-center items-center mt-[20px] ">
      <h1 className=" font-semibold text-[25px] text-black flex w-full justify-center ">
      <img src={logo} alt="white logo" className=" h-[25px] object-contain mt-[6px] mr-[2px] " />
        Carbon Neutral.
      </h1>
      <h3 className=" text-black text-[16px] flex w-full justify-center ">
        A first for Apple Watch. And Apple.
        
      </h3>
      <Link to={link} className="hover:underline text-[#4478c5] mt-[15px]">
        <h5 className=" flex w-full justify-center items-center text-[15px] mt-[5px] ">
          Learn more
          <FontAwesomeIcon
            icon={faAngleRight}
            className="text-[10px] ml-[5px] mt-[3px] "
          />
        </h5>
      </Link>
    </div>
    <img src={image} alt="watch" className=" max-h-[350px] object-contain " />
  </div>
  )
}

export default WhiteBGWatchBaner