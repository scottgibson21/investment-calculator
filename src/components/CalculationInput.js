import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { InfoCircle } from "react-bootstrap-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ToolTip from "react-bootstrap/ToolTip";
import { calculateResultSet } from "../utils/helpers";
import InputGroup from "react-bootstrap/InputGroup";

export default function CalculationInput() {
  const [startingAmount, setStartingAmount] = useState("0");
  const [monthlyContribution, setMonthlyContribution] = useState("0");
  const [rateOfReturn, setRateOfReturn] = useState();
  const [inflationRate, setInflationRate] = useState(3.22);
  const [numberOfYears, setNumberOfYears] = useState();
  const [editInflationDisabled, setEditInflationDisabled] = useState(true);

  const handleStartingAmountChange = (event) => {
    let value = event.target.value.replace(/,/g, "");

    if (!/^(\s*|\d+)$/.test(value)) {
      return;
    }

    if (value === "") {
      setStartingAmount(value);
      return;
    }

    setStartingAmount(parseInt(value));
  };

  const handleMonthlyContributionChange = (event) => {
    let value = event.target.value.replace(/,/g, "");

    if (!/^(\s*|\d+)$/.test(value)) {
      return;
    }

    if (value === "") {
      setMonthlyContribution(value);
      return;
    }

    setMonthlyContribution(parseInt(value));
  };

  const handleRateOfReturnChange = (event) => {
    setRateOfReturn(event.target.value);
  };

  const handleInflationRateChange = (event) => {
    setInflationRate(event.target.value);
  };

  const handleNumberOfYearsChange = (event) => {
    setNumberOfYears(event.target.value);
  };

  const handleSubmit = () => {
    console.log("handle submit called!");
    console.log("type of starting amount", typeof startingAmount);

    const resultSet = calculateResultSet(
      startingAmount,
      monthlyContribution,
      rateOfReturn,
      inflationRate,
      numberOfYears
    );

    console.log("the result set: ", resultSet);

    //Dispatch add result set action
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Form style={{ marginTop: 40 }} onSubmit={handleSubmit}>
      <Form.Group controlId="formStrartingAmount">
        <Form.Label>Starting Amount</Form.Label>
        <OverlayTrigger
          key="startingAmount"
          placement="right"
          overlay={<ToolTip>Info about the starting amount</ToolTip>}
        >
          <InfoCircle style={{ marginLeft: 10, marginBottom: 3 }} />
        </OverlayTrigger>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            placeholder="0"
            onChange={handleStartingAmountChange}
            value={numberWithCommas(startingAmount)}
          />
        </InputGroup>
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
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            placeholder="0"
            onChange={handleMonthlyContributionChange}
            value={numberWithCommas(monthlyContribution)}
          />
        </InputGroup>
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
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroupPrepend">%</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            placeholder="0.00"
            onChange={handleRateOfReturnChange}
          />
        </InputGroup>
      </Form.Group>
      <Form.Group controlId="fromInflationRate">
        <Form.Label>Average Inflation % Rate</Form.Label>
        <OverlayTrigger
          key="inflationRate"
          placement="right"
          overlay={<ToolTip>Info about the inflation rate</ToolTip>}
        >
          <InfoCircle style={{ marginLeft: 10, marginBottom: 3 }} />
        </OverlayTrigger>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroupPrepend">%</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            value={inflationRate}
            disabled={editInflationDisabled}
            onChange={handleInflationRateChange}
          />
        </InputGroup>
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
        <Form.Control placeholder="0" onChange={handleNumberOfYearsChange} />
      </Form.Group>
      <Button type="submit" disabled={false}>
        Calculate
      </Button>
      <div>{`the current starting amount: ${startingAmount} type: ${typeof startingAmount}`}</div>
      <div>{`the current monthly contribution: ${monthlyContribution} type: ${typeof monthlyContribution}`}</div>
      <div>{`the current rate of return: ${rateOfReturn} type: ${typeof rateOfReturn}`}</div>
      <div>{`the current average inflation rate: ${inflationRate} type: ${typeof inflationRate}`}</div>
      <div>{`the current number of years: ${numberOfYears} type: ${typeof numberOfYears}`}</div>
    </Form>
  );
}
