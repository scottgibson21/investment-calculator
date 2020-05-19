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
  let { resultSet, chartKey } = props;
  return (
    <div>
      <h2 style={styles.titleHeader}>{chartData[chartKey].displayName}</h2>
      <LineChart
        width={500}
        height={300}
        data={resultSet}
        syncId="anyId"
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
    </div>
  );
}

const styles = {
  titleHeader: {
    marginLeft: "75px",
    fontSize: "1rem",
    fontWeight: "bold",
  },
};

export default CalculationChart;
