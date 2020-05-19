import React from "react";
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
        <CalculationChart chartKey="interest" resultSet={resultSet} />
        <CalculationChart chartKey="totalContributions" resultSet={resultSet} />
      </Row>
      <Row style={styles.mainContainer}>
        <CalculationChart
          chartKey="totalAccruedExpenseRatioFees"
          resultSet={resultSet}
        />
        <CalculationChart
          chartKey="totalAccruedFinancialAdvisorFees"
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
  console.log("the results in cal result map state to props: ", results);
  return {
    resultSet: results.resultSet,
  };
}

export default connect(mapStateToProps)(CalculationResult);
