import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrash, faChevronUp, faChevronDown, } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { removeItem, increaseQuantity, decreaseQuantity, } from "../../redux/features/cart/cartSlice";

function CartItem({ id, title, image, model, price, rating, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className=" w-[90vw] md:w-[65vw] h-[200px] bg-white mt-[20px] rounded-[10px] p-[20px] flex ">
      <img
        src={image}
        alt=""
        className="md:w-[15vw] w-[35vw] object-contain "
      />
      <div className=" w-[38vw] pl-[15px] flex flex-col ">
        <h2 className="text-[17px] md:text-[20px] font-light ">{title}</h2>
        <p className=" hidden md:flex text-[#848484] text-[14px] mt-[5px]">
          {model}
        </p>
        <div className="flex flex-col md:flex-row my-[12px] md:my-[20px] items-center ">
          <div className="flex mr-auto md:mr-[0px]">
            {rating && (
              <>
                {[...Array(Math.round(rating.rate))].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className="text-[13px] md:text-[17px] md:mr-[5px]"
                  />
                ))}
              </>
            )}
          </div>
          <div className="hidden md:flex text-[14px] md:text-[16px]">
            <span className=" font-light ml-[-10px] md:ml-[20px]  ">
              {rating ? rating.rate : null}
            </span>
            <span className=" font-light flex ml-[20px]">
              Ratings: {rating ? rating.count : null}
            </span>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex font-light text-[14px]">
            <span className="">R{price}</span>
            <span className="mx-[5px]">x</span>
            <span className="">{quantity}</span>
            <span className=" hidden md:flex md:ml-[50%] lg:ml-[150%] font-normal">Total</span>
            <span className=" hidden md:flex ml-[15px] font-semibold">
              R{(quantity * price).toFixed(2)}
            </span>
          </div>
          
        </div>
        <p className=" flex w-full md:hidden mt-[10px] ">
          <span className="  md:hidden md:ml-[150%] font-normal">Total</span>
            <span className="  md:hidden ml-[15px] font-semibold">
              R{(quantity * price).toFixed(2)}
            </span>
          </p>

        <div className="flex md:hidden w-full justify-evenly items-center ">
        <FontAwesomeIcon
          icon={faTrash}
          className="text-[17px] text-red-400 mr-[5px]"
           onClick={() => {
            dispatch(removeItem(id));
          }}
        />
        <div className="ml-[10px] flex items-center w-full justify-evenly">
          <FontAwesomeIcon
            icon={faChevronUp}
            className="text-[17px] text-green-400 mr-[5px]"
               onClick={() => {
              dispatch(increaseQuantity(id));
            }}
          />
          <span className="text-[20px] my-[10px] mr-[9px]">{quantity}</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-[17px] text-red-400 mr-[5px]"
            onClick={() => {
              if ( quantity === 1 ) {
                dispatch(removeItem(id));
                return
              }
              dispatch(decreaseQuantity(id));
            }}
          />
        </div>
      </div>
      </div>
      <div className="hidden md:flex flex-col w-[7vw] items-end ">
        <FontAwesomeIcon
          icon={faTrash}
          className="text-[17px] text-red-400 mr-[5px]"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        />
        <div className="flex flex-col mt-auto items-end">
          <FontAwesomeIcon
            icon={faChevronUp}
            className="text-[17px] text-green-400 mr-[5px]"
            onClick={() => {
              dispatch(increaseQuantity(id));
            }}
          />
          <span className="text-[20px] my-[10px] mr-[9px]">{quantity}</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-[17px] text-red-400 mr-[5px]"
            onClick={() => {
              if (quantity === 1) {
                dispatch(removeItem(id));
                return;
              }
              dispatch(decreaseQuantity(id));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
