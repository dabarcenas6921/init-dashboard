import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data = [
  { month: "January", actual: 3800 },
  { month: "February", actual: 4200 },
  { month: "March", actual: 3500 },
  { month: "April", actual: 4000 },
  { month: "May", actual: 4500 },
  { month: "June", actual: 3700 },
  { month: "July", actual: 4800 },
  { month: "August", actual: 3900 },
  { month: "September", actual: 4100 },
  { month: "October", actual: 3600 },
  { month: "November", actual: 4200 },
  { month: "December", actual: 3800 },
];

const budgetValue = 4000; // Static budget value

const Budgeting: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis domain={["auto", "auto"]} />
        <Tooltip />
        <Line type="monotone" dataKey="spending" />
        <ReferenceLine
          y={budgetValue}
          label="Budget"
          stroke="red"
          strokeDasharray="3 3"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Budgeting;
