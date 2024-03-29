import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faGift } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/features/cart/cartSlice";
import "./Checkout.css";

const Checkout = () => {
	const navigate = useNavigate();
	const { cartItems } = useSelector((store) => store.cart);
	const dispatch = useDispatch();
	
	const placeOrder = () => {
		dispatch(clearCart());
		navigate("/Confirmation");
	}
	return (
		<div className="content-checkout">
			<div className="left-column">
				<div className="shipping-address-card">
					<div className="Header-address-card">
						<h1 className="Shipping">Shipping Address</h1>
					</div>
					<div className="Shipping-address">
						<div className="Current-address">
							<p>Ben Alexander</p>
							<p>126 Loop Street</p>
							<p>New York</p>
							<p>Usa</p>
						</div>
						<button className="change-address-btn">Change</button>
					</div>
				</div>
				<div className="Payment-Method">
					<div className="Payment-header">
						<h1>Payment Method</h1>
					</div>
					<div className="Payment-content">
						<button className="change-payment-btn">Change</button>
						<div className="Current-payment">
							<p className="bank-card">
								<FontAwesomeIcon icon={faCreditCard} /> Mastercard
							</p>
							<p className="gift-card">
								<FontAwesomeIcon icon={faGift} /> R5753.21
							</p>
							<p className="billing-addres">
								Billing address same as shipping address
							</p>
						</div>
					</div>
				</div>
				<div className="content-reviewed-bag">
					<div className="review-bag-header">
						<h1>Review your bag</h1>
					</div>
					<div className="bag-content">

						{cartItems && cartItems.length > 0 && cartItems.map((item) => (
							<div className="bag-item">
								<p><b>x{item.quantity}</b></p>
								<img alt={item.title} src={item.image}/>
								<p>{item.title}</p>
							</div>
						))}
						<div className="item-view-bag-content" />
						<hr />
					</div>
				</div>
			</div>
			<div className="right-column">
				<div className="total-summary-card">
					<p className="order">Order Summary</p>
					<div className="summary-row">
						<p className="items-summary">Items:</p>
						<p className="item-price-summary">R849.37</p>
					</div>
					<div className="summary-row">
						<p className="shipping-summary">Shipping:</p>
						<p className="shipping-price-summary">R6.99</p>
					</div>
					<div className="summary-row">
						<p className="est-gst">Estimated GST:</p>
						<p className="est-gst-price-summary">R760.47</p>
					</div>
					<div className="summary-row">
						<p className="gift-card-summary">Gift Card:</p>
						<p className="gift-card-price-summary">R0.00</p>
					</div>
					<div>
						<hr />
					</div>
					<div className="summary-row">
						<p className="order-total">Order Total</p>
						<p className="order-total-price-summary">R6609.78</p>
					</div>
					<div>
						<hr />
					</div>
					<button onClick={() => placeOrder()} className="order-placement-btn">Place your order</button>
					<div className="back-cart-btn">
						<Link to={-1}>
							<button className="backtocart">Back</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
