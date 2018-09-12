import React from "react";
import ReactDOM from "react-dom";

export const Friends = props => {
  return (
    <div>
      <div className="panel-body">
        <ul className="panel-body list-group">
          {props.friendList.map((friend, i) => {
            return (
              <li key={i} className="list-group-item">
                <span className="badge">{friend.user.averageDailySteps}</span>
                <img
                  src={friend.user.avatar}
                  style={{ height: 50, left: 10, borderRadius: "50%" }}
                />
                <h4>{friend.user.displayName}</h4>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
