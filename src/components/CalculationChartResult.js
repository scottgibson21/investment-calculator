import React from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalculationChart from "./CalculationChart";
import NivoCalculationChart from "./NivoCalculationChart";

function CalculationChartResult(props) {
  const { resultSet } = props;

  if (resultSet === undefined) {
    return <div>There are no results</div>;
  }

  return (
    <React.Fragment>
      <Row>
        <Col style={styles.column}>
          <h2 style={styles.chartHeader}>Capital</h2>
          <NivoCalculationChart chartKey={"capital"} />
        </Col>
        <Col style={styles.column}>
          <h2 style={styles.chartHeader}>Total Contributions</h2>
          <NivoCalculationChart chartKey={"totalContributions"} />
        </Col>
      </Row>
      <Row>
        <Col style={styles.column}>
          <h2 style={styles.chartHeader}>Interest</h2>
          <NivoCalculationChart chartKey={"interest"} />
        </Col>
        <Col style={styles.column}>
          <h2 style={styles.chartHeader}>Total interest</h2>
          <NivoCalculationChart chartKey={"totalInterest"} />
        </Col>
      </Row>
      <Row>
        <Col style={styles.column}>
          <h2 style={styles.chartHeader}>Expense Ratio Fees</h2>
          <NivoCalculationChart chartKey={"expenseRatioFees"} />
        </Col>
        <Col style={styles.column}>
          <h2 style={styles.chartHeader}>total Expense Ratio Fees</h2>
          <NivoCalculationChart chartKey={"totalExpenseRatioFees"} />
        </Col>
      </Row>
      <Row>
        <Col style={styles.column}>
          <h2 style={styles.chartHeader}>Advisor Fees</h2>
          <NivoCalculationChart chartKey={"adivsorFees"} />
        </Col>
        <Col style={styles.column}>
          <h2 style={styles.chartHeader}>Passive Income</h2>
          <NivoCalculationChart chartKey={"passiveIncome"} />
        </Col>
      </Row>
    </React.Fragment>
  );
}

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: 400,
  },
  chartHeader: {
    fontSize: "1rem",
    fontWeight: "bold",
    paddingLeft: 50,
  },
  column: {
    height: 500,
  },
};

function mapStateToProps({ results }) {
  console.log("the results in cal result map state to props: ", results);
  return {
    resultSet: results.resultSet,
  };
}

export default connect(mapStateToProps)(CalculationChartResult);
