import React from "react";
import ReactDOM from "react-dom";

export const Badges = props => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4>Badges: </h4>
      </div>
      <div className="panel-body">
        {props.myBadges.map((badge, i) => {
          return (
            <div key={i}>
              <h5>{badge.shortName}</h5>
              <p>
                <img src={badge.image100px} />
              </p>
              <p>{badge.description}</p>
              <p>Earned {badge.timeAchieved} times</p>
              <p>Last on {badge.dateTime}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
