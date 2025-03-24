# useEffect Hook Component

## Concepts Learned

1. **useEffect Hook Basics**:

   - Importing and using the `useEffect` hook
   - Running side effects in functional components
   - Managing component lifecycle events

2. **Dependency Array**:

   - Using the empty dependency array `[]` to run effects only once
   - Controlling when effects run based on dependencies

3. **Browser API Integration**:

   - Accessing window properties (innerWidth, innerHeight)
   - Working with browser events like resize

4. **Cleanup Functions**:

   - Adding event listeners safely
   - Proper event listener cleanup (though not implemented in this example)

5. **Multiple useEffect Hooks**:

   - Using multiple useEffect calls for different concerns
   - Organizing side effects by purpose

6. **Document Manipulation**:
   - Changing the document title using useEffect
   - Reflecting component state in browser features

## Code Structure

```jsx
import React, { useState, useEffect } from "react";

function UseEffect() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event listener Added");

    // Missing cleanup function that should be here:
    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} X ${height}`;
  }, []);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <h2>Window width: {width}px </h2>
      <h2>Window height: {height}px </h2>
    </>
  );
}

export default UseEffect;
```

## Learning Outcomes

- Understanding when and how to use the useEffect hook
- Learning to implement side effects in functional components
- Working with browser APIs and events in React
- Managing component lifecycle events with hooks
- Keeping component state in sync with external systems
- Learning the importance of dependency arrays in useEffect

## Improvement Notes

- The second useEffect should include `width` and `height` in its dependency array to update the title when dimensions change
- A cleanup function should be added to remove the event listener when the component unmounts to prevent memory leaks
