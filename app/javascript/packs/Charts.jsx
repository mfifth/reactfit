import React from "react";
import ReactDOM from "react-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export const Charts = props => {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <BarChart
          width={500}
          height={300}
          data={props.stepData["activities-steps"]}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="dateTime" />
          <YAxis domain={[0, 8000]} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};
