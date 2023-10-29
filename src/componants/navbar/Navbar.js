import React, { useEffect } from "react";
import { logo } from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "../../redux/features/cart/cartSlice";

function Navbar({toggleIsOpen }) {
  const dispatch = useDispatch();
  const { quantity } = useSelector((store) => store.cart);
  dispatch(calculateTotals());
  useEffect(() => {}, [quantity]);

  const handleClick = () => {
    toggleIsOpen();
  };

  return (
    <div className=" sticky z-30 top-0 flex md:justify-center w-[100%] overflow-x-hidden h-[50px] bg-[#454545]  text-[12px] ">
      <div className=" z-10 hidden md:flex w-[80vw] justify-evenly items-center text-[#c9c9c9] ">
        <Link to="/">
          <img src={logo} alt="logo" className=" w-[25px] object-contain " />
        </Link>
        <Link to="products/Mac">
          <span className=" cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#c9c9c9] to-[#c9c9c9] hover:from-blue-300 hover:to-blue-700 transition-all duration-300 ">
            Mac
          </span>
        </Link>
        <Link to="products/iPad">
          <span className=" cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#c9c9c9] to-[#c9c9c9] hover:from-yellow-200 hover:to-orange-600 transition-all duration-300 ">
            iPad
          </span>
        </Link>
        <Link to="products/iPhone">
          <span className=" cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#c9c9c9] to-[#c9c9c9] hover:from-pink-200 hover:to-purple-600 transition-all duration-300 ">
            iPhone
          </span>
        </Link>
        <Link to="products/Watch">
          <span className=" cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#c9c9c9] to-[#c9c9c9] hover:from-blue-300 hover:to-blue-700 transition-all duration-300 ">
            Watch
          </span>
        </Link>
        <span className=" cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#c9c9c9] to-[#c9c9c9] hover:from-pink-200 hover:to-purple-600 transition-all duration-300 ">
          Log in
        </span>
        <Link to="/cart">
          <div className="flex relative ">
            <span className=" absolute text-[#454545] flex justify-center items-center text-[10px] bottom-3 left-[1px] bg-[#c9c9c9] h-[14px] w-[14px] rounded-[50%]">
              {quantity}
            </span>
            <FontAwesomeIcon
              icon={faBasketShopping}
              className="text-[14px] mt-[8px]"
            />
          </div>
        </Link>
      </div>

      {/* mobile view */}
      <div className=" w-full flex justify-between md:hidden ">
      <img src={logo} alt="logo" className=" w-[30px] object-contain ml-[20px] " onClick={handleClick}/>
      <Link to="/cart">
          <div className="flex relative mr-[25px] mt-[17px] ">
            <span className=" absolute text-[#454545] flex justify-center items-center text-[10px] bottom-3 left-[1px] bg-[#c9c9c9] h-[14px] w-[14px] rounded-[50%]">
              {quantity}
            </span>
            <FontAwesomeIcon
              icon={faBasketShopping}
              className="text-[14px] mt-[8px]"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
