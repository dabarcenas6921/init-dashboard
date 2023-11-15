import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Your budget data
const data = [
  { month: "January", actual: 3800 },
  { month: "February", actual: 4200 },
  { month: "March", actual: 3500 },
  // ... more data
];

// Static budget value for the example
const budgetValue = 4000;

const gradientOffset = () => {
  const dataMax = Math.max(...data.map((i) => i.actual));
  const dataMin = Math.min(...data.map((i) => i.actual));
  const budgetMax = Math.max(budgetValue, dataMax);
  const budgetMin = Math.min(budgetValue, dataMin);

  if (budgetMax <= 0) {
    return 0;
  }
  if (budgetMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

const Budgeting: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
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
        <YAxis />
        <Tooltip />
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset={off} stopColor="green" stopOpacity={1} />
            <stop offset={off} stopColor="red" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="actual"
          stroke="#000"
          fill="url(#splitColor)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Budgeting;
