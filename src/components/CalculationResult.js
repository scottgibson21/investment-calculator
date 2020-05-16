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
import { connect } from "react-redux";

function CalculationResult(props) {
  const data = mockDataBuiilder(30);
  console.log("props result set", props.resultSet);
  const { resultSet } = props;
  console.log("The result set in calc result component", resultSet);

  return (
    <div style={{ marginTop: 10 }}>
      <h1 style={{ textAlign: "center" }}>Capital</h1>
      <LineChart
        width={500}
        height={300}
        data={resultSet.resultSet}
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
        <Line
          type="monotone"
          dataKey="totalAccruedInterest"
          name="Total Accrued Interest"
          stroke="#f54242"
        />
      </LineChart>
      <h1 style={{ textAlign: "center" }}>Passive Income</h1>
      <LineChart
        width={500}
        height={300}
        data={resultSet.resultSet}
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

function mapStateToProps({ resultSet }) {
  console.log("result set", resultSet);
  return {
    resultSet,
  };
}

export default connect(mapStateToProps)(CalculationResult);
