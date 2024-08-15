import React, { useEffect, useState } from "react";

const TrafficLight = ({ trafficStates }) => {
  const [currentColor, setCurrentColor] = useState("green");

  useEffect(() => {
    const { duration, next } = trafficStates[currentColor];

    const timerId = setTimeout(() => {
      setCurrentColor(next);
    }, duration);
    return () => {
      clearTimeout(timerId);
    };
  }, [currentColor]);

  return (
    <div className="traffic-light-container">
      {Object.keys(trafficStates).map((color) => (
        <div
          key={color}
          className="traffic-light"
          style={{
            backgroundColor:
              color === currentColor && trafficStates[color].backgroundColor,
          }}
        ></div>
      ))}
    </div>
  );
};

export default TrafficLight;
