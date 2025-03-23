import React, { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("Visa");
  const [shipping, setShipping] = useState("Delivery");

  const handleNameContent = (e) => {
    setName(e.target.value);
  };

  const handleCommentContent = (e) => {
    setComment(e.target.value);
  };

  const handlePaymentContent = (e) => {
    setPayment(e.target.value);
  };

  const handleShippingContent = (e) => {
    setShipping(e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleNameContent} />
      <p>Name: {name}</p>
      <br />
      <textarea
        value={comment}
        onChange={handleCommentContent}
        placeholder="Enter your comment"
      />
      <p>Your comment is: {comment}</p>
      <br />
      <select value={payment} onChange={handlePaymentContent}>
        <option value="">Select payment Method</option>
        <option value="Visa">Visa</option>
        <option value="GooglePay">GooglePay</option>
        <option value="Mastercard">Mastercard</option>
      </select>
      <p>Your payment Method is: {payment}</p>
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingContent}
        />
        Delivery
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Pickup"
          checked={shipping === "Pickup"}
          onChange={handleShippingContent}
        />
        Pickup
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
};

export default MyComponent;
