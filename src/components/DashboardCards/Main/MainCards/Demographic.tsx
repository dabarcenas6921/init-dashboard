import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Hispanic", value: 700, fill: "#FFD700" }, // Gold
  { name: "White", value: 300, fill: "#FF8C00" }, // Dark Orange
  { name: "Black", value: 300, fill: "#C35EE1" }, // Dark Violet
  { name: "Asian", value: 200, fill: "#54C875" }, // Office Green
  { name: "European", value: 278, fill: "#248CB3" }, // Blue
  { name: "Other", value: 189, fill: "#FF6347" }, // Tomato
];

const data02 = [
  { name: "Male", value: 4567, fill: "#6BCCF0" },
  { name: "Female", value: 2400, fill: "#F06BEA" },
  { name: "Other", value: 1398, fill: "#FF6347" },
];

export default function Demographic() {
  return (
    <div className="h-ful w-full">
      <h2 className="mb-4 text-center text-xl font-bold text-white">
        Demographics
      </h2>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="29%"
            cy="37%"
            outerRadius={150}
            label={({ name }) => `${name}`}
          />

          <Pie
            dataKey="value"
            data={data02}
            cx={538}
            cy={290}
            innerRadius={40}
            outerRadius={120}
            label={({ name }) => `${name}`}
          />

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
