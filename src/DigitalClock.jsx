import React, { useState, useEffect } from "react";
function DigitalClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Corrected the interval timeN
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;

    return `${padZero(hours)}:${minutes}:${seconds} ${meridiem}`;
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
