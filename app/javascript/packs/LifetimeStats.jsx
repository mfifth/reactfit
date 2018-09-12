import React from "react";
import ReactDOM from "react-dom";

export const LifetimeStats = props => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3>Lifetime Stats:</h3>
      </div>
      <div className="panel-body">
        <h4>Overall - </h4>
        <p>Distance: {props.myStats.distance}</p>
        <p>Steps: {props.myStats.steps}</p>
        <br />
        <h4>Today - </h4>
        <p>Steps: {props.todaysStats.steps} </p>
        <p>Calories: {props.todaysStats.caloriesOut} </p>
      </div>
    </div>
  );
};

LifetimeStats.defaultProps = {
  myStats: {
    total: {
      distance: 21,
      steps: 21
    },
    today: {
      caloriesOut: 4,
      steps: 9
    }
  }
};
