import React from "react";
import Personal from "./Personal";
import BillingInfo from "./BillingInfo";
import BillingLog from "./BillingLog";
import { useState } from "react";

const ButtonToggle = () => {
  const toggleform = (formName) => {
    setCurrentForm(formName);
  };

  const [currentForm, setCurrentForm] = useState("Personal");
  switch (currentForm) {
    case "Personal":
      return <Personal onFormSwitch={toggleform} />;

    case "Billing":
      return <BillingInfo onFormSwitch={toggleform} />;
    case "BillingLog":
      return <BillingLog onFormSwitch={toggleform} />;
    default:
      setCurrentForm("Personal");
  }
};

export default ButtonToggle;
