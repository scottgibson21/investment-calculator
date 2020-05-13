import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CalculationInput() {
  const [startingAmount, setStartingAmount] = useState();
  const [montlyContribution, setMontlyContribution] = useState();
  const [rateOfReturn, setRateOfReturn] = useState();
  const [numberOfYears, setNumberOfYears] = useState();

  return (
    <Form>
      <Form.Group controlId="formStrartingAmount">
        <Form.Label>Starting Amount</Form.Label>
        <Form.Control placeholder="$0.00" />
      </Form.Group>
      <Form.Group controlId="formMonthlyContribution">
        <Form.Label>Monthly Contribution</Form.Label>
        <Form.Control placeholder="$0.00" />
      </Form.Group>
      <Form.Group controlId="formRateOfReturn">
        <Form.Label>Rate of Return</Form.Label>
        <Form.Control placeholder="0.00%" />
      </Form.Group>
      <Form.Group controlId="forNumberOfYears">
        <Form.Label>Number of Years</Form.Label>
        <Form.Control placeholder="0" />
      </Form.Group>
      <Button type="submit">Calculate</Button>
    </Form>
  );
}
