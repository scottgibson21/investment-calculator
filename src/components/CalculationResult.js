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

export default function CalculationResult() {
  const data = mockDataBuiilder(30);

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

const mockDataBuiilder = (dataPoints) => {
  const data = [];
  let capital = 10000;
  let interest = 0;

  for (let i = 0; i < dataPoints; i++) {
    const dataPointInterest = capital * 0.1;
    capital += dataPointInterest;
    interest += dataPointInterest;

    data.push({
      name: i,
      capital: capital,
      interest: interest,
      passiveIncome: capital * 0.07,
      total: capital,
    });
  }

  return data;
};
