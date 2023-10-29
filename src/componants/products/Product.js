import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function Product({ title, id, image, price, model }) {
  const navigate = useNavigate();

  // set new url path product and reload page to show clicked
  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className=" w-[223.26px] p-[16px] h-[380px] flex flex-col  items-center justify-evenly my-[10px] mx-[20px] "
    >
      <div className="flex justify-center items-center w-[191.36px] h-[232px] rounded-[22px] bg-white">
        <img
          src={image}
          alt=""
          className="flex max-h-[200px] max-w-[160px] object-contain"
        />
      </div>
      <div className="flex flex-col p-[8px] w-[191.36px]">
        <h3 className=" font-semibold ">{title.slice(0, 15)}</h3>
        <p className=" text-[#454545] text-[13px] font-light mb-[8px] ">
          {model}
        </p>
        <div className="flex w-[191.36px] justify-between items-center ">
          <h3 className=" font-semibold text-[16px] ">R{price}</h3>

          <button className="mr-[12px] bg-[#000000] border-[#000000] mt-[-18px] w-[35px] h-[35px] border flex justify-center items-center rounded-[8px]">
            <FontAwesomeIcon icon={faEye} className="text-[20px] text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
