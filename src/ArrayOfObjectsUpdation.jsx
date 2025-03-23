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
    <div className="p-4">
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
          className="border p-2 mr-2"
        />
        <input
          type="text"
          value={make}
          onChange={handleMakeChange}
          placeholder="Make"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          value={model}
          onChange={handleModelChange}
          placeholder="Model"
          className="border p-2 mr-2"
        />
        <button
          onClick={handleAddCar}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Car
        </button>
      </div>
    </div>
  );
}

export default CarList;