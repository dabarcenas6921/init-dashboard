import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";

// Define an interface for your data objects
interface IData {
  name: string;
  value: number;
  color: string;
}

//Ideally, you would want to fetch this data from the Notion/Airtable API. Don't have permissions to do so right now, so I'm hardcoding it in.
const data01: IData[] = [
  { name: "Venue", value: 1000, color: "#e11d48" },
  { name: "Food", value: 2000, color: "#3b82f6" },
  { name: "Snacks and drinks", value: 4000, color: "#16a34a" },
  { name: "Decorations", value: 5000, color: "#fcd34d" },
  { name: "Shirts", value: 3000, color: "#fb923c" },
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
        Shellhacks Budget
      </p>
      <div className="flex justify-center">
        <ResponsiveContainer
          width="100%"
          className="aspect-square sm:aspect-video"
        >
          <PieChart>
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={data01}
              cx="50%"
              cy="50%"
              outerRadius={140}
              fill="#8884d8"
              // Remove labelLine and label props if not needed
            >
              {data01.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend layout="vertical" align="right" verticalAlign="middle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="flex justify-center text-xl">
        Total Funding: ${totalFunding.toLocaleString()}
      </p>
    </div>
  );
}
