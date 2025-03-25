# Stopwatch Component

## Concepts Learned

1. **useEffect Hook**:

   - Managing intervals for timing functionality
   - Cleanup of intervals on component unmount
   - Controlling when effects run with dependencies

2. **State Management**:

   - Managing multiple state variables (time, isRunning)
   - Coordinating state updates for timer functionality
   - Handling start, stop, and reset operations

3. **Event Handling**:

   - Implementing click handlers for controls
   - Managing component state based on user interactions
   - Toggling between different states (running/stopped)

4. **Time Formatting**:
   - Converting milliseconds to minutes, seconds, and milliseconds
   - Proper display formatting with leading zeros
   - Handling time calculations and updates

## Detailed Code Explanation

```jsx
import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  return (
    <div className="stopwatch">
      <div className="display">
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </div>
      <div className="controls">
        <button onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
```

## Control Flow Structure

```
┌─────────────────────────┐
│ Component Initialization│
│ - Import React hooks    │
│ - Define component      │
└───────────┬─────────────┘
            │
┌───────────▼─────────────┐
│ State Initialization    │
│ - time: 0              │
│ - isRunning: false     │
└───────────┬─────────────┘
            │
┌───────────▼─────────────┐
│ useEffect Hook          │
│ - Set up interval       │
│ - Return cleanup fn     │
└───────────┬─────────────┘
            │
┌───────────▼─────────────┐
│ Initial Render          │
│ - Format time values    │
│ - Display stopwatch     │
└───────────┬─────────────┘
            │
┌───────────▼─────────────┐
│ User Interaction        │
│ - Start/Stop button     │
│ - Reset button         │
└───────────┬─────────────┘
            │
┌───────────▼─────────────┐
│ State Updates           │
│ - Update time          │
│ - Toggle isRunning     │
└───────────┬─────────────┘
            │
┌───────────▼─────────────┐
│ Component Re-renders    │
│ - New time displayed    │
└───────────┬─────────────┘
            │
            ▼
        (Repeats)
            │
┌───────────▼─────────────┐
│ Component Unmount       │
│ - clearInterval runs    │
└─────────────────────────┘
```

## How This Component Works

1. **Component Initialization**:

   - The component imports React and necessary hooks
   - Two state variables are initialized:
     - `time`: tracks elapsed time in milliseconds
     - `isRunning`: controls the stopwatch state

2. **Effect Setup**:

   - useEffect manages the interval for time updates
   - When `isRunning` is true, updates time every 10ms
   - Cleans up interval when component unmounts or stops

3. **Control Functions**:

   - `startStop`: Toggles the stopwatch between running and stopped states
   - `reset`: Resets the time to 0 and stops the stopwatch

4. **Time Formatting**:

   - Converts milliseconds to minutes, seconds, and milliseconds
   - Uses padStart to ensure consistent display format
   - Updates display every 10ms when running

5. **Rendering**:
   - Displays formatted time in a readable format
   - Provides Start/Stop and Reset buttons
   - Updates UI based on current state

## Implementation Details

1. **Interval Management**:

   - Uses 10ms intervals for smooth updates
   - Properly cleans up intervals to prevent memory leaks
   - Only runs when stopwatch is active

2. **Time Calculations**:

   - Minutes: total time divided by 60000ms
   - Seconds: remainder of minutes divided by 1000ms
   - Milliseconds: remainder of seconds divided by 10ms

3. **State Management**:

   - Uses functional updates for time state
   - Coordinates multiple state variables
   - Handles state transitions smoothly

4. **User Interface**:
   - Clear display of time values
   - Intuitive control buttons
   - Responsive to user interactions

## Usage Example

```jsx
// In a parent component
<Stopwatch />
```

## Learning Outcomes

- Implementing precise timing functionality
- Managing complex state interactions
- Creating responsive user interfaces
- Handling component cleanup properly
- Working with time-based calculations
- Understanding React's effect system
