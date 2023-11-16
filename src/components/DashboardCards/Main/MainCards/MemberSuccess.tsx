import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "2018",
    fulltime: 1000,
    intern: 1223,
  },
  {
    name: "2019",
    fulltime: 1400,
    intern: 1300,
  },
  {
    name: "2020",
    fulltime: 1500,
    intern: 1400,
  },
  {
    name: "2021",
    fulltime: 1700,
    intern: 1600,
  },
  {
    name: "2022",
    fulltime: 1600,
    intern: 2000,
  },
  {
    name: "2023",
    fulltime: 2380,
    intern: 2100,
  },
];

const fulltimeTotal = data.reduce((acc, item) => acc + item.fulltime, 0);
const internTotal = data.reduce((acc, item) => acc + item.intern, 0);

export default function MemberSuccess() {
  return (
    <div style={{ width: "100%", height: 581 }}>
      <h1 className="flex justify-center">Members Statistics</h1>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF8C00" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#CD7F32" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="seconduv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFD550" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFD550" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="name" stroke="white" />
          <YAxis stroke="white" />
          <Tooltip
            contentStyle={{ backgroundColor: "white", color: "black" }}
            labelFormatter={() => ""} // Add this line to hide the label
          />
          <Legend />
          <Bar dataKey="fulltime" fill="url(#colorUv)" minPointSize={5}></Bar>
          <Bar dataKey="intern" fill="url(#seconduv)" minPointSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
