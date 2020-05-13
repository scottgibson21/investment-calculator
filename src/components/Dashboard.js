import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalculationInput from "./CalculationInput";

export default function Dashboard() {
  return (
    <Container>
      <Row style={{ height: 400, marginTop: 50 }}>
        <Col style={{ border: "1px solid black" }}>
          <CalculationInput />
        </Col>
        <Col style={{ border: "1px solid black" }}>Results</Col>
      </Row>
    </Container>
  );
}
