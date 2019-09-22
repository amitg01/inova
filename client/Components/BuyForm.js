import React, { useState } from "react";

function BuyForm(props) {
  const [product, setProduct] = useState("");
  const [amount, setAmount] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    name == "product" ? setProduct(value) : setAmount(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.buyFormSubmit(product, amount);
    setProduct("");
    setAmount(0);
  };

  return (
    <form>
      <input
        type="text"
        name="product"
        value={product}
        placeholder="Enter Name"
        onChange={handleChange}
      />
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

export default BuyForm;
