import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../redux/features/reducer/userSlice";
import { ValidateAddress } from "./Validation";
import "./Address.css";

const Address = (props) => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const initialAddress = {
    name: "",
    streetname: "",
    city: "",
    province: "",
    country: "",
  };

  const [values, setValues] = useState(initialAddress);
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser(values));
  };

  const handleValidation = (event) => {
    event.preventDefault();
    const validationErrors = ValidateAddress(values);
    setErrors(validationErrors);
  };

  const submit = (event) => {
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
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
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
            {errors.streetname && (
              <p style={{ color: "red" }}>{errors.streetname}</p>
            )}
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
            {errors.city && <p style={{ color: "red" }}>{errors.city}</p>}
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
            {errors.province && (
              <p style={{ color: "red" }}>{errors.province}</p>
            )}
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
            {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
          </label>
          <p className="para">
            <input type="checkbox" /> Save this as your default address
          </p>
          <input
            type="submit"
            value="Add Address"
            className="add-address-btn"
          />
          <p>
            <span style={{ float: "left" }}>
              <Link to={-1}>
                <button>Back</button>
              </Link>
            </span>
            <span className="secure-connection">
              <FontAwesomeIcon icon={faLock} style={{ marginRight: "5px" }} />
              Secure Connection
            </span>
          </p>
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
  text3: PropTypes.string,
};

export default Address;
