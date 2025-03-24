# Digital Clock Component

## Concepts Learned

1. **useEffect Hook with Cleanup**:

   - Setting up intervals with useEffect
   - Properly cleaning up intervals to prevent memory leaks
   - Using the empty dependency array for run-once effects

2. **Date Object Manipulation**:

   - Working with JavaScript's Date object
   - Formatting time values (hours, minutes, seconds)
   - Converting between 12-hour and 24-hour formats

3. **Time Formatting Functions**:

   - Creating helper functions for time formatting
   - Adding leading zeros to time values
   - Building formatted time strings

4. **Real-time Updates with React**:

   - Creating components that update in real-time
   - Using setInterval for periodic state updates
   - Maintaining accurate time display

5. **Conditional Formatting**:
   - Determining AM/PM based on hour value
   - Using modulo operator for 12-hour time format
   - Conditionally adding leading zeros

## Code Structure

```jsx
import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup function to clear the interval
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array - run once on mount

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  }

  function padZero(time) {
    return (time < 10 ? "0" : "") + time;
  }

  return (
    <>
      <div className="clock-container">
        <div className="clock">
          <span>{formatTime()}</span>
        </div>
      </div>
    </>
  );
}

export default DigitalClock;
```

## Usage Example

```jsx
// In a parent component
<DigitalClock />
```

## Learning Outcomes

- Understanding how to use the useEffect hook with cleanup
- Learning to work with JavaScript's Date object
- Implementing real-time updates in React components
- Creating helper functions for formatting data
- Using conditional logic for display formatting
- Working with intervals in React components
- Implementing proper cleanup to prevent memory leaks
