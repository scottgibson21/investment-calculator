import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalculationInput from "./CalculationInput";
import CalculationChartResult from "./CalculationChartResult";
import CalculationResultJumbotron from "./CalculationResultJumbotron";

export default function Dashboard() {
  return (
    <div style={{ height: 2000, margin: 0 }}>
      <Container fluid style={styles.container}>
        <Row style={{ width: "auto" }}>
          <Col>
            <CalculationInput />
          </Col>
          <Col style={styles.resultsColumn}>
            <Row>
              <Col>
                <CalculationResultJumbotron />
              </Col>
            </Row>
            <CalculationChartResult />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const styles = {
  container: {
    paddingLeft: 50,
    paddingRight: 300,
  },
  resultsColumn: {
    flex: 3,
  },
};
