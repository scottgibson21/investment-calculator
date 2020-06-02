import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalculationInput from "./CalculationInput";
import CalculationChartResult from "./CalculationChartResult";
import CalculationResultJumbotron from "./CalculationResultJumbotron";

export default function Dashboard() {
  return (
    <Row>
      <Col sm={12} md={4}>
        <CalculationInput />
      </Col>
      <Col sm={12} md={8}>
        <Row>
          <Col>
            <CalculationResultJumbotron />
          </Col>
        </Row>
        <Row>
          <Col>
            <CalculationChartResult />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

const styles = {
  container: {
    paddingLeft: 50,
    paddingRight: 50,
    color: "#FFFFFF",
  },
  resultsColumn: {
    flex: 3,
  },
};
