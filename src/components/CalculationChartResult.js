import React from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import NivoCalculationChart from "./NivoCalculationChart";

function CalculationChartResult(props) {
  const { resultSet } = props;

  if (resultSet === undefined) {
    return (
      <Col style={{ height: 320, ...styles.mainContainer }}>
        <h2 style={styles.detailsHeader}>Charts</h2>
        <h2 style={styles.detailsSubHeader}>
          To get started, enter your info in the calculator.
        </h2>
      </Col>
    );
  }

  return (
    <Col style={styles.mainContainer}>
      <h2 style={styles.detailsHeader}>Charts</h2>
      <h2 style={styles.chartHeader}>Total Capital</h2>
      <div style={{ height: 500, width: "100%" }}>
        <NivoCalculationChart style={styles.chart} chartKey={"capital"} />
      </div>
      <h2 style={styles.chartHeader}>Expense Ratio Fees</h2>
      <div style={{ height: 500, width: "100%" }}>
        <NivoCalculationChart
          style={styles.chart}
          chartKey={"totalExpenseRatioFees"}
        />
      </div>
      <h2 style={styles.chartHeader}>Advisor Fees</h2>
      <div style={{ height: 500, width: "100%" }}>
        <NivoCalculationChart
          style={styles.chart}
          chartKey={"totalAdvisorFees"}
        />
      </div>
    </Col>
  );
}

const styles = {
  mainContainer: {
    display: "flex",
    backgroundColor: "#BDC3C7",
    borderRadius: "15px",
    margin: 15,
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
  },
  detailsHeader: {
    fontFamily: "Permanent Marker",
    fontSize: 35,
    color: "black",
    alignSelf: "center",
    marginTop: 20,
  },
  detailsSubHeader: {
    fontSize: 20,
    color: "black",
    alignSelf: "center",
    marginTop: 75,
  },
  chartHeader: {
    fontSize: "1rem",
    fontWeight: "bold",
    paddingLeft: 50,
    alignSelf: "flex-start",
  },
  column: {
    height: 500,
    width: 500,
  },
  row: {
    paddingLeft: 30,
  },
  chart: {
    width: 500,
    height: 500,
    backgroundColor: "#4287f5",
  },
};

function mapStateToProps({ results }) {
  console.log("the results in cal result map state to props: ", results);
  return {
    resultSet: results.resultSet,
  };
}

export default connect(mapStateToProps)(CalculationChartResult);
