# Object State Component

## Concepts Learned

1. **Managing Object State in React**:

   - Using the `useState` hook with objects
   - Proper techniques for updating object state

2. **State Immutability**:

   - Using the spread operator (`...`) to maintain immutability
   - Creating new object references when updating state

3. **Multiple Property Updates**:

   - Updating specific properties of an object state
   - Preserving other properties while changing select ones

4. **Form Controls for Object Properties**:

   - Creating inputs tied to specific object properties
   - Updating individual object properties based on user input

5. **Event Handlers for Object State**:
   - Defining specific handlers for each object property
   - Using functional state updates with objects

## Code Structure

```jsx
import React, { useState } from "react";

function CarComponent() {
  const [car, setCar] = useState({
    Make: "Subaru",
    Model: "Impreza",
    YearOfMake: 2019,
  });

  const handleMakeChange = (e) => {
    setCar((c) => ({ ...c, Make: e.target.value }));
  };

  const handleModelChange = (e) => {
    setCar((c) => ({ ...c, Model: e.target.value }));
  };

  const handleYearChange = (e) => {
    setCar((c) => ({ ...c, YearOfMake: e.target.value }));
  };

  return (
    <div>
      <p>
        Your favorite car is: {car.Make} {car.Model} {car.YearOfMake}
      </p>
      <input type="text" value={car.Make} onChange={handleMakeChange} /> <br />
      <input type="text" value={car.Model} onChange={handleModelChange} />{" "}
      <br />
      <input type="number" value={car.YearOfMake} onChange={handleYearChange} />
    </div>
  );
}

export default CarComponent;
```

## Usage Example

```jsx
// In a parent component
<CarComponent />
```

## Learning Outcomes

- Understanding how to properly manage object state in React
- Learning to update object properties while maintaining immutability
- Implementing controlled form inputs for object properties
- Using functional updates with the useState hook
- Creating a form that updates complex state
- Applying best practices for state management with objects
