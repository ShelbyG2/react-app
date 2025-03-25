import React, { useState, useEffect } from "react";

const StopWatch = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setMilliSeconds((ms) => ms + 1);
      }, 1);
      setIntervalId(id);
    }
  };
  const pauseTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };
  const stopTimer = () => {
    pauseTimer();
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setMilliSeconds(0);
  };
  useEffect(() => {
    if (milliseconds >= 1000) {
      setMilliSeconds((ms) => ms - 1000);
      setSeconds((s) => s + 1);
    }
  }, [milliseconds]);

  useEffect(() => {
    if (seconds >= 60) {
      setSeconds((s) => s - 60);
      setMinutes((m) => m + 1);
    }
  }, [seconds]);

  useEffect(() => {
    if (minutes >= 60) {
      setMinutes((m) => m - 60);
      setHours((h) => h + 1);
    }
  }, [minutes]);

  return (
    <>
      <div className="h-dvh w-dvw bg-gray-800 flex flex-col justify-center items-center">
        <div className="bg-gray-900 rounded shadow-lg p-8">
          <h1 className="text-white w-full text-center text-5xl font-bold mb-4">
            Stopwatch
          </h1>
          <h2 className="bg-black h-20 w-auto text-white text-center text-7xl font-mono rounded mb-4 p-2">
            {hours}:{minutes}:{seconds}:{milliseconds}
          </h2>
          <div className="flex justify-center space-x-4">
            <button
              className="bg-blue-600 hover:bg-blue-700 w-24 rounded py-2 text-white"
              onClick={startTimer}
            >
              Start
            </button>
            <button
              className="bg-green-400 hover:bg-green-500 w-24 rounded py-2 text-white"
              onClick={pauseTimer}
            >
              Pause
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 w-24 rounded py-2 text-white"
              onClick={stopTimer}
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StopWatch;
