# useEffect Component

## Concepts Learned

1. **useEffect Hook**:

   - Basic usage of useEffect
   - Managing side effects in functional components
   - Understanding the dependency array

2. **Component Lifecycle with Hooks**:

   - Running code on component mount
   - Running code on state changes
   - Cleanup on component unmount

3. **Conditional Effect Execution**:

   - Using dependency arrays to control when effects run
   - Empty dependency array for mount-only effects
   - Adding dependencies for reactive effects

4. **Effect Cleanup**:
   - Returning a cleanup function from useEffect
   - Preventing memory leaks
   - Cleanup timing in the component lifecycle

## Detailed Code Explanation

```jsx
import React, { useState, useEffect } from "react";

function UseEffectExample() {
  // State for count value - will trigger useEffect when changed
  const [count, setCount] = useState(0);

  // State for tracking window width - updated by the resize event listener
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effect that runs on every render
  // This effect has no dependency array, so it runs after every render
  useEffect(() => {
    // Log a message to show this effect runs on every render
    console.log("Effect ran - component rendered");
  }); // No dependency array

  // Effect that runs only once, on component mount
  // Empty dependency array means it only runs on mount
  useEffect(() => {
    // Log a message to show this effect runs only on mount
    console.log("Effect ran - component mounted");

    // This is only logged once when the component mounts
  }, []); // Empty dependency array

  // Effect that runs when count changes
  // Dependency array with count means it runs when count changes
  useEffect(() => {
    // Log the current count value to show this effect runs when count changes
    console.log("Count changed:", count);

    // Update document title with current count
    document.title = `Count: ${count}`;

    // Optional cleanup function
    return () => {
      // This runs before the next effect execution or on unmount
      console.log("Cleaning up previous count effect");
    };
  }, [count]); // Dependency array with count

  // Effect with window resize listener and cleanup
  useEffect(() => {
    // Define the event handler function
    const handleResize = () => {
      // Update windowWidth state with current window width
      setWindowWidth(window.innerWidth);
    };

    // Log a message to show this effect is setting up the listener
    console.log("Setting up window resize listener");

    // Add the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function that removes the event listener
    return () => {
      // Log a message to show cleanup is happening
      console.log("Cleaning up window resize listener");

      // Remove the event listener to prevent memory leaks
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array - only set up once on mount

  // Event handler to increment count
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="useEffect-example">
      <h2>useEffect Example</h2>

      {/* Display current count */}
      <p>Count: {count}</p>

      {/* Button to increment count */}
      <button onClick={incrementCount}>Increment Count</button>

      {/* Display current window width */}
      <p>Window width: {windowWidth}px</p>

      {/* Information about open console */}
      <p>
        <small>Open the console to see the useEffect logs</small>
      </p>
    </div>
  );
}

export default UseEffectExample;
```

## Control Flow Structure

```
┌─────────────────────────┐
│ Component Initialization│
│ - Import hooks          │
│ - Define component      │
└───────────┬─────────────┘
            │
┌───────────▼─────────────┐
│ State Initialization    │
│ - count: 0              │
│ - windowWidth: current  │
└───────────┬─────────────┘
            │
┌───────────▼─────────────┐
│ Initial Render          │
│ - Render UI elements    │
└───────────┬─────────────┘
            │
┌───────────▼─────────────┐
│ Effect 1 Execution      │
│ (After every render)    │
│ - Log render message    │
└───────────┬─────────────┘
            │
┌───────────▼─────────────┐
│ Effect 2 Execution      │
│ (Mount only)            │
│ - Log mount message     │
└───────────┬─────────────┘
            │
┌───────────▼─────────────┐
│ Effect 3 Execution      │
│ (When count changes)    │
│ - Log count message     │
│ - Update document title │
└───────────┬─────────────┘
            │
┌───────────▼─────────────┐
│ Effect 4 Execution      │
│ (Mount only)            │
│ - Set up resize listener│
└───────────┬─────────────┘
            │
       ┌────▼───┐
       │        │
┌──────▼──┐ ┌───▼───┐
│User     │ │Window │
│Clicks   │ │Resize │
│Button   │ │Event  │
└────┬────┘ └───┬───┘
     │          │
┌────▼────┐ ┌───▼──────────┐
│Update   │ │Update        │
│count    │ │windowWidth   │
│State    │ │State         │
└────┬────┘ └───┬──────────┘
     │          │
     └────┬─────┘
          │
┌─────────▼─────────────┐
│ Component Re-renders  │
└─────────┬─────────────┘
          │
┌─────────▼─────────────┐
│ Effect Cleanup & Re-  │
│ execution (as needed) │
└─────────┬─────────────┘
          │
          ▼
      (Repeat cycle)
          │
┌─────────▼─────────────┐
│ Component Unmount     │
│ - Run cleanup for     │
│   all effects         │
└───────────────────────┘
```

## How This Component Works

1. **Component Initialization**:

   - The component imports React and the required hooks (useState and useEffect)
   - It defines two state variables:
     - `count`: An integer initialized to 0
     - `windowWidth`: Initialized with the current window width

2. **Effect Types and Behavior**:

   - The component demonstrates four different useEffect patterns:
     - Effect 1: Runs after every render (no dependency array)
     - Effect 2: Runs only once on mount (empty dependency array)
     - Effect 3: Runs when count changes (count in dependency array)
     - Effect 4: Runs once on mount with cleanup (empty dependency array + return function)

3. **User Interaction**:

   - When the user clicks the "Increment Count" button, the count state increases
   - This triggers a re-render and executes Effects 1 and 3
   - Effect 3 updates the document title with the new count value

4. **Window Resize Handling**:

   - The component sets up a window resize event listener on mount (Effect 4)
   - When the window resizes, the listener updates the windowWidth state
   - This triggers a re-render and executes Effect 1
   - Effect 4 is not re-executed because it has an empty dependency array

5. **Cleanup Process**:
   - Effects 3 and 4 include cleanup functions that run:
     - Before the effect runs again (for Effect 3 when count changes)
     - When the component unmounts (for both Effect 3 and 4)
   - The cleanup for Effect 4 removes the event listener to prevent memory leaks

## Implementation Details

1. **useEffect Without Dependencies**:

   - The first effect runs after every render since it has no dependency array
   - This pattern is useful for logic that should run on every update

2. **useEffect with Empty Dependency Array**:

   - Effects 2 and 4 run only once when the component mounts
   - This is equivalent to componentDidMount in class components
   - Perfect for one-time setup operations like API calls or event listeners

3. **useEffect with Dependencies**:

   - Effect 3 includes count in its dependency array
   - It only runs when count changes, not on other state changes
   - This pattern is useful for reactions to specific state changes

4. **Cleanup Functions**:

   - Effects 3 and 4 return cleanup functions
   - Cleanup functions run before the next effect execution or on unmount
   - They're used to prevent memory leaks and clean up resources

5. **Event Handling Pattern**:
   - The component defines the event handler function inside useEffect
   - This keeps the handler reference stable between renders
   - The handler updates state, which triggers a re-render

## Usage Example

```jsx
// In a parent component
<UseEffectExample />
```

## Learning Outcomes

- Understanding the useEffect hook and its dependency array
- Managing component lifecycle events with hooks
- Implementing cleanup to prevent memory leaks
- Setting up and removing event listeners properly
- Controlling when side effects run in a component
- Using useEffect for different scenarios (mount, update, cleanup)
- Implementing document title updates as a side effect
