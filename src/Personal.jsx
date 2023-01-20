import React from "react";
import "./personal.css";
import { useState } from "react";

const Personal = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [second, setSecond] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (name === "" && email === "" && address === "") {
      alert("Fields cannot be empty");
    }
    console.log(name);
  };
  return (
    <div className="container">
      <h2 className="form__header">Complete your Purchase</h2>
      <ul className="form__steps">
        <li>
          <a href="#p" className="active">
            Personal Info
          </a>
        </li>
        <li>Billing Info</li>
        <li>Confirm Payment</li>
      </ul>
      <hr></hr>
      <form onSubmit={submitHandler}>
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Opara Linus Ahmed"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label for="email">
          Email Address <span className="red__star"> *</span>
        </label>
        <p className="info__text">
          The purchase receipt would be sent to this address
        </p>
        <input
          type="email"
          name="email"
          placeholder="OparaLinusAhmed@devmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label for="address1">Address 1</label>
        <input
          type="text"
          name="address1"
          placeholder="The address of the user goes here"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></input>
        <label for="address2">Address 2</label>
        <input
          type="text"
          name="address2"
          placeholder="and here"
          value={second}
          onChange={(e) => setSecond(e.target.value)}
        ></input>
        <div className="grid__form">
          <div>
            <label for="lg">Local Government</label>
            <input type="text" name="lg" placeholder="Surulere"></input>
          </div>
          <div>
            <label for="state">State</label>
            <select id="state" name="state">
              <option value="volvo">Lagos</option>
              <option value="saab">Abuja</option>
            </select>
          </div>
        </div>
        <div className="btns_flex">
          <button
            type="submit"
            className="btn_primary"
            onClick={() => props.onFormSwitch("Billing")}
          >
            Next
          </button>
          <div className="cancel">Cancel Payment</div>
        </div>
      </form>
    </div>
  );
};

export default Personal;
