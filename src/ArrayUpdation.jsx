import React, { useState } from "react";

function ArrayUpdation() {
  const [foods, setFoods] = useState([
    "Biryani",
    "Qorma",
    "Karahi",
    "Nihari",
    "Pulao",
  ]);

  const addFood = () => {
    const newFood = document.getElementById("foodInput").value;
    setFoods((f) => [...f, newFood]);
  };

  const removeFood = (index) => {
    setFoods(foods.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">List of foods</h1>
      <ul className="list-disc pl-5">
        {foods.map((food, index) => (
          <li key={index} className="mb-2">
            {food}
            <button
              className="ml-2 text-red-500"
              onClick={() => removeFood(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <input
          type="text"
          id="foodInput"
          className="border p-2 mr-2"
          placeholder="Add a new food"
        />
        <button
          onClick={addFood}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Food
        </button>
      </div>
    </div>
  );
}

export default ArrayUpdation;
