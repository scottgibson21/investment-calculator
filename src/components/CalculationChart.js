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
import { chartData } from "../utils/helpers";

function CalculationChart(props) {
  console.log("the props", props);
  let { resultSet, chartKey } = props;
  console.log("the chartKey is: ", chartKey);
  return (
    <LineChart
      width={500}
      height={300}
      data={resultSet}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={chartData[chartKey].xAxis} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey={chartKey}
        name={chartData[chartKey].displayName}
        stroke={chartData[chartKey].color}
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}

export default CalculationChart;
