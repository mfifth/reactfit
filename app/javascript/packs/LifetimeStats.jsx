import React from "react";
import ReactDOM from "react-dom";

export const LifetimeStats = props => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4>Overall Status:</h4>
      </div>
      <div className="panel-body">
        <h4>Lifetime - </h4>
        <p>Distance: {props.myStats.total.distance}</p>
        <p>Steps: {props.myStats.total.steps}</p>
        <h4>Tracker - </h4>
        <p />
        <p />
      </div>
      <div className="panel panel-default">
        <div className="panel-heading">Badges</div>
      </div>
    </div>
  );
};

LifetimeStats.defaultProps = {
  lifetime: {
    total: {
      distance: 21,
      steps: 21
    }
  }
};
