import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: 2020,
    capital: 4000,
    interest: 100,
    passiveIncome: 100,
    total: 4100,
  },
  {
    name: 2021,
    capital: 5000,
    interest: 200,
    passiveIncome: 110,
    total: 5200,
  },
  {
    name: 2022,
    capital: 6000,
    interest: 300,
    passiveIncome: 150,
    total: 6300,
  },
];

export default function CalculationResult() {
  return (
    <div style={{ marginTop: 10 }}>
      <h1 style={{ textAlign: "center" }}>Capital</h1>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="capital"
          name="Capital"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="interest"
          name="Interest"
          stroke="#82ca9d"
        />
        <Line type="monotone" dataKey="total" name="Total" stroke="#de023a" />
      </LineChart>
      <h1 style={{ textAlign: "center" }}>Passive Income</h1>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="passiveIncome"
          name="Passive Income"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
}
