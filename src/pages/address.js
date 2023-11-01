import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../redux/features/reducer/userSlice";
import { ValidateAddress } from "./Validation";
import "./Address.css";
import { useNavigate } from "react-router-dom";

const Address = props => {
	const users = useSelector(state => state.users);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const initialAddress = {
		name: "",
		streetname: "",
		city: "",
		province: "",
		country: ""
	};

	const [values, setValues] = useState(initialAddress);
	const [errors, setErrors] = useState({});

	const handleInput = event => {
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		dispatch(addUser(values));
	};

	const handleValidation = event => {
		event.preventDefault();
		const validationErrors = ValidateAddress(values);
		setErrors(validationErrors);
	};

	const submit = event => {
		handleValidation(event);
		handleSubmit(event);
	};

	return (
		<div className="address-page">
			<div className="form-container">
				<form onSubmit={submit}>
					<label>
						<span className="input-label">Shipping Name</span>
						<input
							type="text"
							name="name"
							placeholder="Your full name"
							value={values.name}
							onChange={handleInput}
						/>
						{errors.name &&
							<p style={{ color: "red" }}>
								{errors.name}
							</p>}
					</label>
					<label>
						<span className="input-label">Street Name</span>
						<input
							type="text"
							name="streetname"
							placeholder="Your street address"
							value={values.streetname}
							onChange={handleInput}
						/>
						{errors.streetname &&
							<p style={{ color: "red" }}>
								{errors.streetname}
							</p>}
					</label>
					<label>
						<span className="input-label">City</span>
						<input
							type="text"
							name="city"
							placeholder="Your city or hometown"
							value={values.city}
							onChange={handleInput}
						/>
						{errors.city &&
							<p style={{ color: "red" }}>
								{errors.city}
							</p>}
					</label>
					<label>
						<span className="input-label">State / Province</span>
						<input
							type="text"
							name="province"
							placeholder="Your state or province"
							value={values.province}
							onChange={handleInput}
						/>
						{errors.province &&
							<p style={{ color: "red" }}>
								{errors.province}
							</p>}
					</label>
					<label>
						<span className="input-label">Country</span>
						<input
							type="text"
							name="country"
							placeholder="Your country"
							value={values.country}
							onChange={handleInput}
						/>
						{errors.country &&
							<p style={{ color: "red" }}>
								{errors.country}
							</p>}
					</label>

					<div className="para">
						<input type="checkbox" />
						<p>Save this as your default address</p>
					</div>

					<button
						className="add-address-btn"
						onClick={() => navigate("/Payment")}
					>
						Add Address
					</button>
					
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
			</div>
		</div>
	);
};

Address.propTypes = {
	props: PropTypes.any,
	trigger: PropTypes.bool,
	children: PropTypes.array,
	setTrigger: PropTypes.func,
	text2: PropTypes.string,
	text3: PropTypes.string
};

export default Address;
