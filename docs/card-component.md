# Card Component

## Concepts Learned

1. **Component Composition**:

   - Creating reusable card UI components
   - Implementing consistent styling

2. **Prop Usage**:

   - Passing and receiving multiple props
   - Dynamic content rendering based on props

3. **CSS with JavaScript**:

   - Implementing inline styles with JavaScript objects
   - Dynamic styling with prop values

4. **Conditional Styling**:
   - Applying different styles based on prop values

## Detailed Code Explanation

```jsx
import React from "react";

function Card(props) {
  // Destructure props to extract name, img, heading, and button
  const { name, img, heading, button } = props;

  // Define the card style with dynamic width based on props
  const cardStyle = {
    width: props.width,
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    backgroundColor: "#fff",
  };

  // Define the image style with specified dimensions
  const imgStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  };

  // Define heading style with specific typography
  const headingStyle = {
    marginTop: "15px",
    fontSize: "1.5rem",
    color: "#333",
  };

  // Define paragraph style for the name text
  const paragraphStyle = {
    margin: "10px 0",
    color: "#666",
  };

  // Define button style with color and hover effects
  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  };

  return (
    // Card container with dynamic styling
    <div style={cardStyle}>
      {/* Card image with specified styling */}
      <img src={img} alt={name} style={imgStyle} />

      {/* Card heading with styling */}
      <h3 style={headingStyle}>{heading}</h3>

      {/* Card paragraph with name property */}
      <p style={paragraphStyle}>{name}</p>

      {/* Button with dynamic text from props */}
      <button style={buttonStyle}>{button}</button>
    </div>
  );
}

export default Card;
```

## Control Flow Structure

```
┌─────────────────────────┐
│ Component Initialization│
│ - Import React          │
│ - Define Card Component │
└───────────┬─────────────┘
            │
┌───────────▼─────────────┐
│ Props Reception         │
│ - Destructure props     │
│ - Extract name, img,    │
│   heading, button       │
└───────────┬─────────────┘
            │
┌───────────▼─────────────┐
│ Style Definition        │
│ - Define cardStyle      │
│ - Define imgStyle       │
│ - Define headingStyle   │
│ - Define paragraphStyle │
│ - Define buttonStyle    │
└───────────┬─────────────┘
            │
┌───────────▼─────────────┐
│ JSX Rendering           │
│ - Create container div  │
│ - Add image component   │
│ - Add heading element   │
│ - Add paragraph element │
│ - Add button element    │
└───────────┬─────────────┘
            │
┌───────────▼─────────────┐
│ Component Export        │
│ - Export for reuse      │
└─────────────────────────┘
```

## How This Component Works

1. **Component Initialization**:

   - The component imports React (required for JSX)
   - It defines a functional component that accepts props

2. **Props Processing**:

   - The component destructures the props object to extract specific values:
     - `name`: Text to be displayed in the paragraph
     - `img`: Image source URL
     - `heading`: Text for the card heading
     - `button`: Text for the button label
   - The `width` prop is used directly from the props object for card sizing

3. **Style Definition**:

   - The component defines five style objects as JavaScript objects:
     - `cardStyle`: Defines the overall card container appearance with dynamic width
     - `imgStyle`: Defines how the image should appear
     - `headingStyle`: Typography for the heading
     - `paragraphStyle`: Typography for the paragraph
     - `buttonStyle`: Appearance of the button element

4. **Rendering Process**:

   - The component returns a JSX structure with:
     - A div container with `cardStyle` applied
     - An img element with the src from props
     - An h3 element with the heading text
     - A paragraph with the name text
     - A button with the button text

5. **Component Export**:
   - The component is exported as the default export

## Implementation Details

1. **Inline Styling Approach**:

   - This component uses JavaScript objects for styling rather than CSS classes
   - This allows for dynamic styling based on props (like the width)
   - Style objects provide encapsulation and prevent style conflicts

2. **Style Organization**:

   - Styles are separated into distinct objects for each element
   - This modular approach makes styles easier to maintain and update

3. **Dynamic Prop Usage**:

   - The component demonstrates how to use props for both content and styling
   - The card width is controlled by the props.width property

4. **CSS-in-JS Pattern**:

   - This component follows the CSS-in-JS pattern, which is common in React
   - Style properties use camelCase instead of kebab-case (as in traditional CSS)

5. **Reusability Design**:
   - The component is designed to be reusable with different content
   - By accepting props for key content, it can render different cards with consistent styling

## Usage Example

```jsx
// In a parent component
<Card
  width="300px"
  name="Product Name"
  img="https://example.com/image.jpg"
  heading="Featured Product"
  button="Buy Now"
/>
```

## Learning Outcomes

- Creating reusable UI components with consistent styling
- Implementing inline styles with JavaScript objects
- Using props for dynamic content and styling
- Organizing styles in a modular, maintainable way
- Building components that can be easily customized by parent components
