import React, { useState } from "react";
function Myfruits() {
  const [food, setFood] = useState(["Mango", "Apple", "Banana"]);

  function handleAddedFood() {
    const newFood = document.getElementById("food-input").value;
    document.getElementById("food-input").value = "";
    setFood((f) => [...f, newFood]);
  }
  function handleRemovedFood(index) {
    setFood(food.filter((_, i) => i !== index));
  }
  return (
    <div>
      <h1>List of my Foods</h1>
      <ol>
        {food.map((food, index) => (
          <li key={index} onClick={() => handleRemovedFood(index)}>
            {food}
          </li>
        ))}
      </ol>
      <input type="text" placeholder="Enter your food" id="food-input" />
      <button onClick={handleAddedFood}>Add food</button>
    </div>
  );
}

export default Myfruits;
