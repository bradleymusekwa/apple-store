import React, { useEffect } from "react";
import LeftSideBar from "../componants/products/LeftSideBar";
import BagCheckout from "../componants/cart/BagCheckout";
import CartItem from "../componants/cart/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
	const { cartItems, quantity, total } = useSelector(store => store.cart);
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(calculateTotals());
		},
		[cartItems, dispatch]
	);

	// empty cart
	if (quantity < 1) {
		return (
			<section className="w-full min-h-[92vh] bg-[#f1f1f1] flex relative">
				{/* left icon bar with icons */}
				<LeftSideBar />
				<div className=" md:ml-[110px] w-full flex md:w-[80%] flex-col justify-center items-center">
					<div className="flex text-[#454545] justify-center w-full text-[60px] font-extrabold ">
						Your Cart
					</div>
					<div className="flex text-[#454545] w-full justify-center text-[30px] font-light">
						is currently empty
					</div>
					<Link to="/products/iPhone">
						<button className="flex mt-[30px] w-[130px] h-[35px] justify-center items-center bg-[#454545] rounded-[9px] ">
							<svg
								width="16"
								height="18"
								viewBox="0 0 20 22"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M19.3117 6.94062C19.1727 6.8006 19.0073 6.68956 18.825 6.61392C18.6428 6.53829 18.4473 6.49957 18.25 6.5H15.25V5.75C15.25 4.35761 14.6969 3.02226 13.7123 2.03769C12.7277 1.05312 11.3924 0.5 10 0.5C8.60761 0.5 7.27226 1.05312 6.28769 2.03769C5.30312 3.02226 4.75 4.35761 4.75 5.75V6.5H1.75C1.35218 6.5 0.970644 6.65804 0.68934 6.93934C0.408035 7.22064 0.25 7.60218 0.25 8V18.125C0.25 19.9531 1.79688 21.5 3.625 21.5H16.375C17.2593 21.5003 18.1086 21.1545 18.7413 20.5367C19.0596 20.233 19.3132 19.8679 19.4865 19.4634C19.6599 19.059 19.7495 18.6236 19.75 18.1836V8C19.7506 7.80321 19.7122 7.60826 19.637 7.42642C19.5617 7.24458 19.4512 7.07946 19.3117 6.94062ZM6.25 5.75C6.25 4.75544 6.64509 3.80161 7.34835 3.09835C8.05161 2.39509 9.00544 2 10 2C10.9946 2 11.9484 2.39509 12.6517 3.09835C13.3549 3.80161 13.75 4.75544 13.75 5.75V6.5H6.25V5.75ZM15.25 10.25C15.25 11.6424 14.6969 12.9777 13.7123 13.9623C12.7277 14.9469 11.3924 15.5 10 15.5C8.60761 15.5 7.27226 14.9469 6.28769 13.9623C5.30312 12.9777 4.75 11.6424 4.75 10.25V9.5C4.75 9.30109 4.82902 9.11032 4.96967 8.96967C5.11032 8.82902 5.30109 8.75 5.5 8.75C5.69891 8.75 5.88968 8.82902 6.03033 8.96967C6.17098 9.11032 6.25 9.30109 6.25 9.5V10.25C6.25 11.2446 6.64509 12.1984 7.34835 12.9017C8.05161 13.6049 9.00544 14 10 14C10.9946 14 11.9484 13.6049 12.6517 12.9017C13.3549 12.1984 13.75 11.2446 13.75 10.25V9.5C13.75 9.30109 13.829 9.11032 13.9697 8.96967C14.1103 8.82902 14.3011 8.75 14.5 8.75C14.6989 8.75 14.8897 8.82902 15.0303 8.96967C15.171 9.11032 15.25 9.30109 15.25 9.5V10.25Z"
									fill="white"
								/>
							</svg>
							<p className=" text-[14px] flex justify-center items-center text-white ml-[10px] ">
								Add Items
							</p>
						</button>
					</Link>
				</div>
			</section>
		);
	}

	return (
		<div className=" w-full min-h-[94vh] bg-[#f1f1f1] flex  ">
			{/* Desktop View */}
			<div className=" hidden w-full min-h-[92vh] relative md:flex ">
				{/* left icon bar with icons */}
				<LeftSideBar />

				{/* center with search and products */}
				<div className=" mx-[120px] mt-[50px] flex flex-col w-full lg:max-w-[66%]  ">
					<div className="flex items-end">
						<h1 className=" text-[35px] font-light ">Check your Bag Items</h1>
						<h1 className=" ml-auto text-[20px] font-light mb-[5px] ">
							Cart Total: <span className="font-bold">
								R{total.toFixed(2)}
							</span>{" "}
						</h1>
					</div>

					{cartItems.map(item => {
						return <CartItem key={item.id} {...item} />;
					})}
				</div>

				{/* right side with cart products */}
				<BagCheckout />
				<span className=" fixed bottom-[60px] md:bottom-[120px] right-0 z-50 lg:hidden ">
					<Link to="/checkout">
						<button className="flex flex-col mt-[30px] w-[70px] h-[50px] justify-center items-center bg-black rounded-l-[5px] ">
							<svg
								width="16"
								height="18"
								viewBox="0 0 20 22"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M19.3117 6.94062C19.1727 6.8006 19.0073 6.68956 18.825 6.61392C18.6428 6.53829 18.4473 6.49957 18.25 6.5H15.25V5.75C15.25 4.35761 14.6969 3.02226 13.7123 2.03769C12.7277 1.05312 11.3924 0.5 10 0.5C8.60761 0.5 7.27226 1.05312 6.28769 2.03769C5.30312 3.02226 4.75 4.35761 4.75 5.75V6.5H1.75C1.35218 6.5 0.970644 6.65804 0.68934 6.93934C0.408035 7.22064 0.25 7.60218 0.25 8V18.125C0.25 19.9531 1.79688 21.5 3.625 21.5H16.375C17.2593 21.5003 18.1086 21.1545 18.7413 20.5367C19.0596 20.233 19.3132 19.8679 19.4865 19.4634C19.6599 19.059 19.7495 18.6236 19.75 18.1836V8C19.7506 7.80321 19.7122 7.60826 19.637 7.42642C19.5617 7.24458 19.4512 7.07946 19.3117 6.94062ZM6.25 5.75C6.25 4.75544 6.64509 3.80161 7.34835 3.09835C8.05161 2.39509 9.00544 2 10 2C10.9946 2 11.9484 2.39509 12.6517 3.09835C13.3549 3.80161 13.75 4.75544 13.75 5.75V6.5H6.25V5.75ZM15.25 10.25C15.25 11.6424 14.6969 12.9777 13.7123 13.9623C12.7277 14.9469 11.3924 15.5 10 15.5C8.60761 15.5 7.27226 14.9469 6.28769 13.9623C5.30312 12.9777 4.75 11.6424 4.75 10.25V9.5C4.75 9.30109 4.82902 9.11032 4.96967 8.96967C5.11032 8.82902 5.30109 8.75 5.5 8.75C5.69891 8.75 5.88968 8.82902 6.03033 8.96967C6.17098 9.11032 6.25 9.30109 6.25 9.5V10.25C6.25 11.2446 6.64509 12.1984 7.34835 12.9017C8.05161 13.6049 9.00544 14 10 14C10.9946 14 11.9484 13.6049 12.6517 12.9017C13.3549 12.1984 13.75 11.2446 13.75 10.25V9.5C13.75 9.30109 13.829 9.11032 13.9697 8.96967C14.1103 8.82902 14.3011 8.75 14.5 8.75C14.6989 8.75 14.8897 8.82902 15.0303 8.96967C15.171 9.11032 15.25 9.30109 15.25 9.5V10.25Z"
									fill="white"
								/>
							</svg>
							<p className=" text-[14px] flex justify-center items-center text-white ">
								Checkout
							</p>
						</button>
					</Link>
				</span>
			</div>

			{/* Cellphone View */}
			<div className=" px-[15px] w-full flex flex-col md:hidden relative">
				<div className="flex flex-col mt-[30px]">
					<h1 className=" text-[25px] font-light ">Check your Bag Items</h1>
					<h1 className=" text-[20px] font-light mb-[5px] ">
						Cart Total: <span className="font-bold">
							R{total.toFixed(2)}
						</span>{" "}
					</h1>
				</div>
				{cartItems.map(item => {
					return <CartItem key={item.id} {...item} />;
				})}
			</div>
			<span className=" fixed bottom-[60px] right-0 z-50 md:hidden ">
				<Link to="/checkout">
					<button className="flex flex-col mt-[30px] w-[70px] h-[50px] justify-center items-center bg-black rounded-l-[5px] ">
						<svg
							width="16"
							height="18"
							viewBox="0 0 20 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M19.3117 6.94062C19.1727 6.8006 19.0073 6.68956 18.825 6.61392C18.6428 6.53829 18.4473 6.49957 18.25 6.5H15.25V5.75C15.25 4.35761 14.6969 3.02226 13.7123 2.03769C12.7277 1.05312 11.3924 0.5 10 0.5C8.60761 0.5 7.27226 1.05312 6.28769 2.03769C5.30312 3.02226 4.75 4.35761 4.75 5.75V6.5H1.75C1.35218 6.5 0.970644 6.65804 0.68934 6.93934C0.408035 7.22064 0.25 7.60218 0.25 8V18.125C0.25 19.9531 1.79688 21.5 3.625 21.5H16.375C17.2593 21.5003 18.1086 21.1545 18.7413 20.5367C19.0596 20.233 19.3132 19.8679 19.4865 19.4634C19.6599 19.059 19.7495 18.6236 19.75 18.1836V8C19.7506 7.80321 19.7122 7.60826 19.637 7.42642C19.5617 7.24458 19.4512 7.07946 19.3117 6.94062ZM6.25 5.75C6.25 4.75544 6.64509 3.80161 7.34835 3.09835C8.05161 2.39509 9.00544 2 10 2C10.9946 2 11.9484 2.39509 12.6517 3.09835C13.3549 3.80161 13.75 4.75544 13.75 5.75V6.5H6.25V5.75ZM15.25 10.25C15.25 11.6424 14.6969 12.9777 13.7123 13.9623C12.7277 14.9469 11.3924 15.5 10 15.5C8.60761 15.5 7.27226 14.9469 6.28769 13.9623C5.30312 12.9777 4.75 11.6424 4.75 10.25V9.5C4.75 9.30109 4.82902 9.11032 4.96967 8.96967C5.11032 8.82902 5.30109 8.75 5.5 8.75C5.69891 8.75 5.88968 8.82902 6.03033 8.96967C6.17098 9.11032 6.25 9.30109 6.25 9.5V10.25C6.25 11.2446 6.64509 12.1984 7.34835 12.9017C8.05161 13.6049 9.00544 14 10 14C10.9946 14 11.9484 13.6049 12.6517 12.9017C13.3549 12.1984 13.75 11.2446 13.75 10.25V9.5C13.75 9.30109 13.829 9.11032 13.9697 8.96967C14.1103 8.82902 14.3011 8.75 14.5 8.75C14.6989 8.75 14.8897 8.82902 15.0303 8.96967C15.171 9.11032 15.25 9.30109 15.25 9.5V10.25Z"
								fill="white"
							/>
						</svg>
						<p className=" text-[14px] flex justify-center items-center text-white ">
							Checkout
						</p>
					</button>
				</Link>
			</span>
		</div>
	);
}

export default Cart;
