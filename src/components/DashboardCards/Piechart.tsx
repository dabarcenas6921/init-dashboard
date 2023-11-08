import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

// Define an interface for your data objects
interface IData {
  name: string;
  value: number;
  color: string;
}

const data01: IData[] = [
  { name: "Google", value: 400, color: "#0088FE" },
  { name: "Microsoft", value: 300, color: "#00C49F" },
  { name: "FIU", value: 300, color: "#FFBB28" },
  { name: "Salesforce", value: 200, color: "#FF8042" },
  { name: "Bungie", value: 278, color: "#8884d8" },
  { name: "Knight Foundation", value: 189, color: "#A4DE6C" },
];

// Calculate the total funding
const totalFunding = data01.reduce((acc, cur) => acc + cur.value, 0);

// Define an interface for the label's props
interface LabelProps {
  name: string;
}

export default function Piechart() {
  return (
    <div>
      <p className="flex justify-center font-medium text-white">
        Company Funding
      </p>
      <div className="flex justify-center">
        {/* Set a specific aspect ratio for the ResponsiveContainer */}
        <ResponsiveContainer width="100%" aspect={1.6}>
          <PieChart>
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={data01}
              cx="50%"
              cy="50%"
              outerRadius={140}
              fill="#8884d8"
              labelLine={false}
              label={({ name }: LabelProps) => name}
            >
              {data01.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* Display the total funding */}
      <p className="flex justify-center text-xl">
        Total Funding: ${totalFunding.toLocaleString()}
      </p>
    </div>
  );
}
