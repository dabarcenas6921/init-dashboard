import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";

const data01 = [
  { name: "Google", value: 400 },
  { name: "Microsoft", value: 300 },
  { name: "FIU", value: 300 },
  { name: "Salesforce", value: 200 },
  { name: "Bungie", value: 278 },
  { name: "Knight Foundation", value: 189 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#a4de6c",
];

export default function Piechart() {
  return (
    <div>
      <p className="flex justify-center font-medium text-white">
        Company Funding
      </p>
      <div className="max-w-xs" style={{ width: 900, height: 224 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={data01}
              cx="50%"
              cy="50%"
              outerRadius={70}
              fill="#8884d8"
              label
            >
              {data01.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
