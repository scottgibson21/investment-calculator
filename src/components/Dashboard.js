import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalculationInput from "./CalculationInput";
import CalculationChartResult from "./CalculationChartResult";
import CalculationResultJumbotron from "./CalculationResultJumbotron";
import CalculationTutorialCard from "./CalculationTutorialCard";

export default function Dashboard() {
  return (
    <Row>
      <Col sm={12} md={4} style={styles.column}>
        <CalculationInput />
      </Col>
      <Col sm={12} md={8} style={styles.column}>
        <Row>
          <CalculationResultJumbotron />
        </Row>
        <Row>
          <CalculationChartResult />
        </Row>
      </Col>
    </Row>
  );
}

const styles = {
  column: {
    margin: 0,
    padding: 15,
  },
};
