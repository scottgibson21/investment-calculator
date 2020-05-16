import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalculationInput from "./CalculationInput";
import CalculationResult from "./CalculationResult";
import CalculationResultJumbotron from "./CalculationResultJumbotron";

export default function Dashboard() {
  return (
    <div style={{ height: 2000 }}>
      <Container>
        <Row style={{ height: 700, marginTop: 50 }}>
          <Col style={{ paddingLeft: "40px" }}>
            <CalculationInput />
          </Col>
          <Col>
            <CalculationResult />
          </Col>
        </Row>
        <Row>
          <Col style={{ paddingRight: "40px" }}>
            <CalculationResultJumbotron />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
