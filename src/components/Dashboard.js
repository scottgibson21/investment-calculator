import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalculationInput from "./CalculationInput";
import CalculationChartResult from "./CalculationChartResult";
import CalculationResultJumbotron from "./CalculationResultJumbotron";
import NivoCalculationChart from "./NivoCalculationChart";

export default function Dashboard() {
  return (
    <div style={{ height: 2000 }}>
      <Container>
        <Row style={{ height: 310, marginTop: 10 }}>
          <Col>
            <CalculationInput />
          </Col>
        </Row>
        <Row>
          <Col>
            <CalculationResultJumbotron />
          </Col>
        </Row>
        <CalculationChartResult />
      </Container>
    </div>
  );
}
