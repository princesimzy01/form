import React from "react";
import "./personal.css";
import { useState } from "react";

const BillingInfo = (props) => {
  const [cardName, setCardName] = useState("");
  return (
    <div className="container">
      <h2 className="form__header">Complete your Purchase</h2>
      <ul className="form__steps">
        <li>Personal Info</li>
        <li className="active">Billing Info</li>
        <li>Confirm Payment</li>
      </ul>
      <form>
        <label for="cardName">
          Name on Card<span className="red__star"> *</span>
        </label>
        <input
          type="text"
          name="cardName"
          placeholder="Opara Linus Ahmed"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        ></input>
        <label for="cardType">
          Card Type<span className="red__star"> *</span>
        </label>
        <select name="cardType">
          <option>Visa</option>
          <option>Master Card</option>
        </select>
        <div className="card_details">
          <div>
            <label for="cardDetails">
              Card details <span className="red__star"> *</span>
            </label>
            <input
              type="text"
              name="cardDetails"
              placeholder="44960  44960  44960  44960"
            ></input>
          </div>
          <div>
            <label for="expiry">Expiry Date</label>
            <input name="expiry" type="month" min=""></input>
          </div>
          <div>
            <label for="cvv">CVV</label>
            <input name="cvv" type="text" placeholder="928"></input>
          </div>
        </div>
        <div className="btns_flex">
          <button
            type="submit"
            className="btn_primary"
            onClick={() => props.onFormSwitch("BillingLog")}
          >
            Next
          </button>
          <div className="cancel">Cancel Payment</div>
        </div>
      </form>
    </div>
  );
};

export default BillingInfo;
