import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./componants/navbar/Navbar";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import MobileMenu from "./componants/navbar/MobileMenu";
import Checkout from "./pages/Checkout";

import Address from "./pages/address";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	// Function to toggle isOpen state
	const toggleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Router>
			<Navbar isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products/:category" element={<Products />} />
				<Route path="/product/:id" element={<Product />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/Checkout" element={<Checkout />} />
				<Route path="/address" element={<Address />} />
				<Route path="/Payment" element={<Payment />} />
				<Route path="/confirmation" element={<Confirmation />} />
			</Routes>

			{isOpen && <MobileMenu onClose={toggleIsOpen} />}
		</Router>
	);
}

export default App;
