import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalculationInput from "./CalculationInput";
import CalculationResult from "./CalculationResult";

export default function Dashboard() {
  return (
    <Container>
      <Row style={{ height: 400, marginTop: 50 }}>
        <Col>
          <CalculationInput />
        </Col>
        <Col>
          <CalculationResult />
        </Col>
      </Row>
    </Container>
  );
}
