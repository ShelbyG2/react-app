import React, { useState } from "react";
const Counter = () => {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount((count = 0));
  };

  return (
    <div className="counter">
      <h1 id="count">{count}</h1>
      <button className="counter-button" onClick={increment}>
        {" "}
        Increment
      </button>
      <button className="counter-button" onClick={reset}>
        {" "}
        Reset
      </button>
      <button className="counter-button" onClick={decrement}>
        {" "}
        Decrement
      </button>
    </div>
  );
};
export default Counter;
