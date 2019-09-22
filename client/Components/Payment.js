import React, { useState } from "react";

function Payment(props) {
  const [mode, setMode] = useState("cash");
  const [amount, setAmount] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    name == "mode" ? setMode(value) : setAmount(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.buyFormSubmit(product, amount);
    setProduct("");
    setAmount(0);
  };

  return (
    <form className="paymentForm">
      <select name="mode" onChange={handleChange} value={mode}>
        <option value="cash">Cash</option>
        <option value="UPI">UPI</option>
        <option value="adjustment">Adjustment</option>
      </select>

      <input
        type="number"
        name="amount"
        value={amount}
        placeholder="Enter Number"
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Done
      </button>
    </form>
  );
}

export default Payment;
