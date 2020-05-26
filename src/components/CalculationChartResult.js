import React from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import NivoCalculationChart from "./NivoCalculationChart";

function CalculationChartResult(props) {
  //const { resultSet } = props;

  // if (resultSet === undefined) {
  //   return <div></div>;
  // }

  return (
    <Container style={styles.mainContainer} fluid>
      <h2 style={styles.detailsHeader}>Details</h2>
      <Row style={{ paddingTop: 50, ...styles.row }}>
        <Col style={styles.column}>
          <h2 style={styles.chartHeader}>Capital</h2>
          <NivoCalculationChart chartKey={"capital"} />
        </Col>
        <Col style={styles.column}>
          <h2 style={styles.chartHeader}>Total Contributions</h2>
          <NivoCalculationChart chartKey={"totalContributions"} />
        </Col>
      </Row>
      <Row style={styles.row}>
        <Col style={styles.column}>
          <h2 style={styles.chartHeader}>Interest</h2>
          <NivoCalculationChart chartKey={"interest"} />
        </Col>
        <Col style={styles.column}>
          <h2 style={styles.chartHeader}>Total interest</h2>
          <NivoCalculationChart chartKey={"totalInterest"} />
        </Col>
      </Row>
      <Row style={styles.row}>
        <Col style={styles.column}>
          <h2 style={styles.chartHeader}>Expense Ratio Fees</h2>
          <NivoCalculationChart chartKey={"expenseRatioFees"} />
        </Col>
        <Col style={styles.column}>
          <h2 style={styles.chartHeader}>total Expense Ratio Fees</h2>
          <NivoCalculationChart chartKey={"totalExpenseRatioFees"} />
        </Col>
      </Row>
      <Row style={styles.row}>
        <Col style={styles.column}>
          <h2 style={styles.chartHeader}>Advisor Fees</h2>
          <NivoCalculationChart chartKey={"adivsorFees"} />
        </Col>
        <Col style={styles.column}>
          <h2 style={styles.chartHeader}>Passive Income</h2>
          <NivoCalculationChart chartKey={"passiveIncome"} />
        </Col>
      </Row>
    </Container>
  );
}

const styles = {
  mainContainer: {
    backgroundColor: "#BDC3C7",
    borderRadius: "15px",
    margin: 0,
    width: "100%",
    color: "#000000",
    display: "flex",
    flexDirection: "column",
  },
  detailsHeader: {
    fontFamily: "Permanent Marker",
    fontSize: 35,
    color: "black",
    alignSelf: "center",
    marginTop: 20,
  },
  chartHeader: {
    fontSize: "1rem",
    fontWeight: "bold",
    paddingLeft: 50,
  },
  column: {
    height: 500,
  },
  row: {
    paddingLeft: 30,
  },
};

function mapStateToProps({ results }) {
  console.log("the results in cal result map state to props: ", results);
  return {
    resultSet: results.resultSet,
  };
}

export default connect(mapStateToProps)(CalculationChartResult);
