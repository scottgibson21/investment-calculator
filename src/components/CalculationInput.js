import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { InfoCircle } from "react-bootstrap-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ToolTip from "react-bootstrap/ToolTip";

export default function CalculationInput() {
  const [startingAmount, setStartingAmount] = useState();
  const [montlyContribution, setMontlyContribution] = useState();
  const [rateOfReturn, setRateOfReturn] = useState();
  const [numberOfYears, setNumberOfYears] = useState();
  const [editInflationDisabled, setEditInflationDisabled] = useState(true);

  return (
    <Form style={{ marginTop: 40 }}>
      <Form.Group controlId="formStrartingAmount">
        <Form.Label>Starting Amount</Form.Label>
        <OverlayTrigger
          key="startingAmount"
          placement="right"
          overlay={<ToolTip>Info about the starting amount</ToolTip>}
        >
          <InfoCircle style={{ marginLeft: 10, marginBottom: 3 }} />
        </OverlayTrigger>
        <Form.Control placeholder="$0.00" />
      </Form.Group>
      <Form.Group controlId="formMonthlyContribution">
        <Form.Label>Monthly Contribution</Form.Label>
        <OverlayTrigger
          key="monthlyContribution"
          placement="right"
          overlay={<ToolTip>Info about the monthly contribution</ToolTip>}
        >
          <InfoCircle style={{ marginLeft: 10, marginBottom: 3 }} />
        </OverlayTrigger>
        <Form.Control placeholder="$0.00" />
      </Form.Group>
      <Form.Group controlId="formRateOfReturn">
        <Form.Label>Rate of Return</Form.Label>
        <OverlayTrigger
          key="rateOfReturn"
          placement="right"
          overlay={<ToolTip>Info about the rate of return</ToolTip>}
        >
          <InfoCircle style={{ marginLeft: 10, marginBottom: 3 }} />
        </OverlayTrigger>
        <Form.Control placeholder="0.00%" />
      </Form.Group>
      <Form.Group controlId="fromInflationRate">
        <Form.Label>Inflation Rate</Form.Label>
        <OverlayTrigger
          key="inflationRate"
          placement="right"
          overlay={<ToolTip>Info about the inflation rate</ToolTip>}
        >
          <InfoCircle style={{ marginLeft: 10, marginBottom: 3 }} />
        </OverlayTrigger>
        <Form.Control placeholder="3.22%" disabled={editInflationDisabled} />
        <Form.Check
          type="checkbox"
          label="Edit Inflation Rate"
          style={{ marginTop: 10 }}
          onChange={() => setEditInflationDisabled(!editInflationDisabled)}
        />
      </Form.Group>
      <Form.Group controlId="forNumberOfYears">
        <Form.Label>Number of Years</Form.Label>
        <OverlayTrigger
          key="numberOfYears"
          placement="right"
          overlay={<ToolTip>Info about the number of years</ToolTip>}
        >
          <InfoCircle style={{ marginLeft: 10, marginBottom: 3 }} />
        </OverlayTrigger>
        <Form.Control placeholder="0" />
      </Form.Group>
      <Button type="submit" disabled={false}>
        Calculate
      </Button>
    </Form>
  );
}
