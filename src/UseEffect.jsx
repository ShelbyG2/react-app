import React, { useState, useEffect } from "react";

function UseEffect() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event listener Added");
  }, []);
  useEffect(() => {
    document.title = `Size :${width} X ${height}`;
  }, []);
  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  return (
    <>
      <h2>Window width :{width}px </h2>
      <h2>Window height :{height}px </h2>
    </>
  );
}

export default UseEffect;
