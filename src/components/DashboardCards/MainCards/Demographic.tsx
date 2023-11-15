import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Hispanic", value: 700 },
  { name: "White", value: 300 },
  { name: "Black", value: 300 },
  { name: "Asian", value: 200 },
  { name: "European", value: 278 },
  { name: "Other", value: 189 },
];

const data02 = [
  { name: "Male", value: 4567 },
  { name: "Female", value: 2400 },
  { name: "Other", value: 1398 },
];

export default function Demographic() {
  return (
    <div style={{ width: "100%", height: 450 }}>
      <ResponsiveContainer>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="30%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label={({ name }) => `${name}`}
          />
          <Pie
            dataKey="value"
            data={data02}
            cx={537}
            cy={180}
            innerRadius={40}
            outerRadius={120}
            fill="#82ca9d"
            label={({ name }) => `${name}`}
          />

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
