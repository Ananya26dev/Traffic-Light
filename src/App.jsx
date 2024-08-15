import React from "react";
import TrafficLight from "./components/TrafficLight";
import "./App.css";
const trafficStates = {
  red: {
    duration: 4000,
    backgroundColor: "red",
    next: "green",
  },
  yellow: {
    duration: 5000,
    backgroundColor: "yellow",
    next: "red",
  },
  green: {
    duration: 3000,
    backgroundColor: "green",
    next: "yellow",
  },
};
const App = () => {
  return (
    <div className="wrapper">
      <TrafficLight trafficStates={trafficStates} />
    </div>
  );
};

export default App;
