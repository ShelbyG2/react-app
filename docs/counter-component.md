# Counter Component

## Concepts Learned

1. **State Management with useState Hook**:

   - Importing and using the `useState` hook from React
   - Creating and updating state variables
   - Understanding state in functional components

2. **Event Handlers in React**:

   - Creating functions that modify state
   - Connecting event handlers to button clicks

3. **User Interaction and UI Updates**:

   - Understanding how state changes trigger re-rendering
   - Creating an interactive component that responds to user actions

4. **Arrow Function Syntax**:
   - Using ES6 arrow functions for component and event handlers

## Code Structure

```jsx
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
        Increment
      </button>
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
      <button className="counter-button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
```

## Usage Example

```jsx
// In a parent component
<Counter />
```

## Learning Outcomes

- Understanding how to manage and update state in React components
- Learning to respond to user interactions
- Implementing simple event handlers for UI updates
- Creating reusable interactive components
- Understanding the basics of React's rendering cycle when state changes
