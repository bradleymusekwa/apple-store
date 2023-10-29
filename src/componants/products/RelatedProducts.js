import React from "react";
import { useNavigate } from "react-router-dom";

function RelatedProducts({ id, image }) {
  const navigate = useNavigate();

  // set new url path product and reload page to show clicked
  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex w-[60px] h-[60px] rounded-lg my-[10px] justify-center items-center bg-white"
    >
      <img src={image} alt="" className="flex w-[50px] object-contain" />
    </div>
  );
}

export default RelatedProducts;
