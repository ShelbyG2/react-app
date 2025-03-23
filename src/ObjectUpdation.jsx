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
