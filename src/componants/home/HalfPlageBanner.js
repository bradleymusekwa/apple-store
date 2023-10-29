import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function HalfPlageBanner({ title, description, link, image }) {
  return (
    <div className=" md:w-[48vw] h-[100%] bg-[#fafafa] flex flex-col justify-center items-center ">
          <div className=" flex-col justify-center items-center mt-[20px] ">
            <h1 className=" font-semibold text-[35px] text-black flex w-full justify-center ">
              {title}
            </h1>
            <h3 className=" text-black text-[20px] flex w-full justify-center ">
              {description}
            </h3>
            <Link to={link} className="hover:underline text-[#356bbb] mt-[15px]">
              <h5 className=" flex w-full justify-center items-center text-[14px]  ">
                Learn more
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-[10px] ml-[5px] mt-[2px] "
                />
              </h5>
            </Link>
          </div>
          <img
            src={image}
            alt="iPad"
            className=" max-h-[350px] object-contain "
          />
        </div>
  )
}

export default HalfPlageBanner