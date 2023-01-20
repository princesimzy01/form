import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";

const BillingLog = () => {
  return (
    <div className="container">
      <h2 className="form__header">Complete your Purchase</h2>
      <ul className="form__steps">
        <li>Personal Info</li>
        <li className="active">Billing Info</li>
        <li>Confirm Payment</li>
      </ul>
      <hr></hr>
      <div className="card">
        <ul className="card_header">
          <li>Item Name</li>
          <li>
            <TbCurrencyNaira /> Price
          </li>
        </ul>
        <div className="card_content">
          <ul>
            <li>Data science and usualability</li>
            <li>50,000.00</li>
          </ul>
          <ul>
            <li>Shipping</li>
            <li>0.00</li>
          </ul>
          <div className="total">
            <ul>
              <li>Total</li>
              <li>50,000.00</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="btns_flex">
        <button type="submit" className="btn_primary">
          Pay
        </button>
        <div className="cancel">Cancel Payment</div>
      </div>
    </div>
  );
};

export default BillingLog;
