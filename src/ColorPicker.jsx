import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#fff");
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <p style={{ backgroundColor: color }}>Selected color{color}</p>
      <label htmlFor="">Pick a color</label>
      <input
        type="color"
        value={color}
        placeholder={color}
        onChange={handleColorChange}
      />
    </div>
  );
}
export default ColorPicker;
