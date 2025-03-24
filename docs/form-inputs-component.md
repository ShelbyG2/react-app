# Form Inputs Component

## Concepts Learned

1. **Form Handling in React**:

   - Managing form inputs with state
   - Controlled components pattern
   - Handling different types of form elements

2. **Event Handlers for Form Elements**:

   - Using onChange events to update state
   - Creating separate handler functions for different inputs
   - Accessing event data with `e.target.value`

3. **Multiple State Variables**:

   - Managing multiple states in a single component
   - Organizing state by purpose

4. **Various Form Input Types**:

   - Text inputs
   - Textarea elements
   - Select dropdowns
   - Radio buttons

5. **Two-way Data Binding**:
   - Setting input values from state
   - Updating state from input changes
   - Creating a complete input cycle

## Code Structure

```jsx
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
      {/* Text input */}
      <input type="text" value={name} onChange={handleNameContent} />
      <p>Name: {name}</p>
      <br />

      {/* Textarea */}
      <textarea
        value={comment}
        onChange={handleCommentContent}
        placeholder="Enter your comment"
      />
      <p>Your comment is: {comment}</p>
      <br />

      {/* Select dropdown */}
      <select value={payment} onChange={handlePaymentContent}>
        <option value="">Select payment Method</option>
        <option value="Visa">Visa</option>
        <option value="GooglePay">GooglePay</option>
        <option value="Mastercard">Mastercard</option>
      </select>
      <p>Your payment Method is: {payment}</p>

      {/* Radio buttons */}
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
```

## Learning Outcomes

- Understanding React's controlled component pattern
- Learning to handle various types of form inputs
- Managing multiple state variables efficiently
- Implementing form input validation and feedback
- Creating interactive forms with immediate state updates
- Connecting form inputs to display elements for feedback
