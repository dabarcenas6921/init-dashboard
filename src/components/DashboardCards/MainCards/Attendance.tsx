/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Text,
} from "recharts";
import type { XAxisProps } from "recharts";

export default function Attendance() {
  const attendanceData = [
    { eventName: "Workshop: Python Basics", signUp: 40, checkIn: 20 },
    { eventName: "Workshop: Intro to Web Dev", signUp: 50, checkIn: 30 },
    { eventName: "Guest Lecture: AI Trends", signUp: 45, checkIn: 22 },
    // ... more events can be fetched from the API. these should be the last 3 events.
  ];

  // Define the props for the custom label component
  interface CustomAxisTickProps extends XAxisProps {
    x: number;
    y: number;
    payload: any;
  }

  // Custom label component
  function CustomAxisTick({ x, y, payload }: CustomAxisTickProps) {
    const words = payload.value.split(": ");
    const lineHeight = 16; // Adjust the line height as needed
    return (
      <g transform={`translate(${x},${y + lineHeight})`}>
        {words.map((word: string, index: number) => (
          <Text
            x={0}
            y={index * lineHeight}
            dy={0}
            textAnchor="middle"
            fill="#666"
            key={index}
          >
            {word}
          </Text>
        ))}
      </g>
    );
  }

  return (
    <div className="mx-auto mt-5 max-w-4xl rounded-lg  p-4 shadow-md">
      <h2 className="mb-4 text-center text-xl font-bold text-white">
        Event Sign-Ups vs Check-Ins
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={attendanceData}
          margin={{
            right: 30,
            left: 20,
            bottom: 40, // Increased bottom margin
          }}
          barCategoryGap="10%"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="eventName"
            height={60}
            tick={<CustomAxisTick x={0} y={0} payload={undefined} />}
            interval={0}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="signUp" fill="#8884d8" name="Signed Up" />
          <Bar dataKey="checkIn" fill="#82ca9d" name="Checked In" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
