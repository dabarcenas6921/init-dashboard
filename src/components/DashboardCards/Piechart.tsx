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
  { name: "Venue", value: 70792, color: "#5a2c4c" },
  { name: "Food", value: 34200, color: "#fa14d2" },
  { name: "Snacks and drinks", value: 8000, color: "#619203" },
  { name: "Decorations", value: 3000, color: "#23e0fa" },
  { name: "Shirts", value: 10256, color: "#4c6e6b" },
  { name: "Lanyard/Badge", value: 2754.15, color: "#2061e7" },
  { name: "Tote Bags", value: 2500, color: "#035353" },
  { name: "Busses", value: 14392.94, color: "#32b53a" },
  { name: "Incidentals (Fridge, Ice)", value: 1750, color: "#c24b73" },
  { name: "Custodial Staff", value: 3700, color: "#41d16a" },
  { name: "Extra dumpster and tonnage of trash", value: 500, color: "#53879a" },
  { name: "AskIT - Public IP Address setup", value: 578.99, color: "#22147b" },
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
