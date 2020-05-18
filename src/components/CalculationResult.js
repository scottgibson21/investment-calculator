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
import Row from "react-bootstrap/Row";
import CalculationChart from "./CalculationChart";

function CalculationResult(props) {
  const { resultSet } = props;

  return (
    <React.Fragment>
      <Row style={styles.mainContainer}>
        <CalculationChart chartKey="capital" resultSet={resultSet} />
        <CalculationChart
          chartKey="totalAccruedInterest"
          resultSet={resultSet}
        />
      </Row>
      <Row style={styles.mainContainer}>
        <CalculationChart chartKey="passiveIncome" resultSet={resultSet} />
      </Row>
    </React.Fragment>
  );
}

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
};

function mapStateToProps({ results }) {
  console.log("the results: ", results);
  return {
    resultSet: results.resultSet,
  };
}

export default connect(mapStateToProps)(CalculationResult);
