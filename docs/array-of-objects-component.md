# Array of Objects State Component

## Concepts Learned

1. **Managing Complex State**:

   - Using useState with arrays of objects
   - Maintaining and updating structured data

2. **Multiple Related States**:

   - Managing separate state variables for form inputs
   - Coordinating multiple states for a form

3. **Form Input with Objects**:

   - Gathering input data and creating object entries
   - Validating and processing form data

4. **Adding Objects to Arrays**:

   - Creating new objects from form input
   - Appending objects to an array state
   - Resetting form inputs after submission

5. **Removing Objects from Arrays**:

   - Using array filter method to remove items
   - Array filtering based on index

6. **Form Handling Techniques**:

   - Creating onChange handlers for multiple inputs
   - Coordinating form submission with state updates

7. **Tailwind CSS Styling**:
   - Using Tailwind utility classes for form styling
   - Creating responsive layouts with Tailwind
   - Applying focus and hover effects

## Code Structure

```jsx
import React, { useState } from "react";

function CarList() {
  const [cars, setCars] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  const handleAddCar = () => {
    const newCar = { year, make, model };
    setCars([...cars, newCar]);
    setYear(new Date().getFullYear());
    setMake("");
    setModel("");
  };

  const handleRemoveCar = (index) => {
    setCars(cars.filter((_, i) => i !== index));
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleMakeChange = (e) => {
    setMake(e.target.value);
  };

  const handleModelChange = (e) => {
    setModel(e.target.value);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">List of Car objects</h1>
      <ul className="list-disc pl-5">
        {cars.map((car, index) => (
          <li key={index} className="mb-2">
            {car.year} {car.make} {car.model}
            <button
              className="ml-2 text-red-500"
              onClick={() => handleRemoveCar(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <input
          type="number"
          value={year}
          onChange={handleYearChange}
          placeholder="Year"
          className="border p-2 mr-4 placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={make}
          onChange={handleMakeChange}
          placeholder="Make"
          className="border p-2 mr-2 placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={model}
          onChange={handleModelChange}
          placeholder="Model"
          className="border p-2 mr-2 placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddCar}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Car
        </button>
      </div>
    </div>
  );
}

export default CarList;
```

## Usage Example

```jsx
// In a parent component
<CarList />
```

## Learning Outcomes

- Creating and managing arrays of objects in React state
- Building forms that create structured data objects
- Implementing CRUD operations for object collections
- Using multiple related state variables effectively
- Creating clean form reset functionality
- Building data-driven list components
- Styling forms and lists with Tailwind CSS
- Implementing immutable state updates for complex data
