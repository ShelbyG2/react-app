# Color Picker Component

## Concepts Learned

1. **Color Input in React**:

   - Using the HTML5 color input type
   - Managing color values with state

2. **Inline Styling with React**:

   - Using the `style` prop with JavaScript objects
   - Dynamically changing styles based on state

3. **State Management for UI Controls**:

   - Tracking and updating color state
   - Reflecting state changes in both the UI and controls

4. **Controlled Component Pattern**:

   - Implementing controlled input for the color picker
   - Synchronizing input value with component state

5. **React Event Handling**:
   - Handling color input changes
   - Updating state based on user selection

## Code Structure

```jsx
import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#fff");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <p style={{ backgroundColor: color }}>Selected color: {color}</p>
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
```

## Usage Example

```jsx
// In a parent component
<ColorPicker />
```

## Learning Outcomes

- Understanding how to implement specialized HTML5 input types
- Learning to apply dynamic inline styles based on state
- Managing UI state for interactive controls
- Creating visual feedback for user selections
- Implementing the controlled component pattern for form elements
- Using state to synchronize the UI with user input
