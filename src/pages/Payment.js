import React, { useState } from "react";
import "./Payment.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";


const CardDetailsForm = () => {
	const [cardHolder, setCardHolder] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [cardExpiryDate, setCardExpiryDate] = useState("");
	const [cardCvc, setCardCvc] = useState("");

	const handleSubmit = event => {
		event.preventDefault();
	};

	const navigate = useNavigate();

	return (
		<>
		<div className="card">
			<div className="card-header">
				<h1>SELECT CARD</h1>
<p>MasterCard ending in 4242</p>
<p>VISA Debit ending in 2894</p>
			</div>
			</div>
		<form onSubmit={handleSubmit}>
			<h1>ADD A NEW CARD</h1>
			<p className="mini-heading">Card Hold Name</p>
			<input
				type="text"
				placeholder="Card Holder Name"
				value={cardHolder}
				onChange={event => setCardHolder(event.target.value)}
			/>
			<p className="mini-heading">Card Number</p>
			<input
				type="number"
				placeholder="Card Number"
				value={cardNumber}
				onChange={event => setCardNumber(event.target.value)}
			/>
			<div className="date-cvc">
			<input
				type="text"
				placeholder="Card Expiry Date (MM/YYYY)"
				value={cardExpiryDate}
				onChange={event => setCardExpiryDate(event.target.value)}
			/>
			<input
				type="number"
				placeholder="Card CVC"
				value={cardCvc}
				onChange={event => setCardCvc(event.target.value)}
			/>
			</div>
			<div className="buttons">
			
			<button
				onClick={() => navigate("/Confirmation")}
			 class="btn">
				Add payment method
			</button>
		
			
			</div>
			<div className="low-bar">
						<div className="btn-back">
							<Link to={-1}>
								<button>Back</button>
							</Link>
						</div>
						<span className="secure-connection">
							<FontAwesomeIcon icon={faLock} style={{ marginRight: "5px" }} />
							Secure Connection
						</span>
						</div>
		</form>
		</>
	);
};

export default CardDetailsForm;
