import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function FullPageBanner({ title, description, link, image }) {
  return (
    <div className=" w-full flex flex-col justify-center items-center py-[50px] bg-[#fafafa] mt-[10px] ">
      <div className=" flex-col justify-center items-center ">
        <h1 className=" font-semibold text-[45px] md:text-[60px] text-black justify-center ">{title}</h1>
        <h3 className=" text-black text-[18px] md:text-[25px] flex w-full justify-center ">
          {description}
        </h3>
        <Link to={link} className="hover:underline text-[#356bbb] mt-[15px]">
          <h5 className=" flex w-full justify-center items-center text-[20px]  ">
            Learn more
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-[14px] ml-[5px] mt-[6px] "
            />
          </h5>
        </Link>
      </div>
      <img
        src={image}
        alt=" iphone 15 "
        className="w-full max-w-[90vw] mt-[30px] "
      />
    </div>
  );
}

export default FullPageBanner;
