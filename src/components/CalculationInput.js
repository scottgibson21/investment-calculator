import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { InfoCircle } from "react-bootstrap-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ToolTip from "react-bootstrap/ToolTip";
import { calculateResultSet } from "../utils/helpers";
import InputGroup from "react-bootstrap/InputGroup";

import { connect } from "react-redux";
import { addResultSet } from "../actions/resultSet";

function CalculationInput(props) {
  const [startingAmount, setStartingAmount] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const [rateOfReturn, setRateOfReturn] = useState(7.5);
  const [expenseRatio, setExpenseRatio] = useState(0.5);
  const [advisorFees, setAdivsorFees] = useState(1);
  const [inflationRate, setInflationRate] = useState(3.22);
  const [numberOfYears, setNumberOfYears] = useState(5);
  //const [editInflationDisabled, setEditInflationDisabled] = useState(true);

  const handleStartingAmountChange = (event) => {
    let value = event.target.value.replace(/,/g, "");

    if (value === "" || value === undefined) {
      setStartingAmount(value);
      return;
    }

    if (!/^(\s*|\d+)$/.test(value)) {
      return;
    }

    setStartingAmount(parseInt(value));
  };

  const handleMonthlyContributionChange = (event) => {
    let value = event.target.value.replace(/,/g, "");

    if (value === "" || value === undefined) {
      setStartingAmount(value);
      return;
    }

    if (!/^(\s*|\d+)$/.test(value)) {
      return;
    }

    setMonthlyContribution(parseInt(value));
  };

  const handleRateOfReturnChange = (event) => {
    let value = event.target.value;

    if (
      value === "" ||
      value === undefined ||
      value[value.length - 1] === "."
    ) {
      setRateOfReturn(value);
      return;
    }

    if (!/^[0-9]+(\.[0-9]{1,2})?$/.test(value)) {
      return;
    }

    setRateOfReturn(parseFloat(value));
  };

  const handleExpenseRatioChange = (event) => {
    let value = event.target.value;

    if (
      value === "" ||
      value === undefined ||
      value[value.length - 1] === "."
    ) {
      setExpenseRatio(value);
      return;
    }

    if (!/^[0-9]+(\.[0-9]{1,2})?$/.test(value)) {
      return;
    }

    setExpenseRatio(parseFloat(value));
  };

  const handleAdvisorFeesChange = (event) => {
    let value = event.target.value;

    if (
      value === "" ||
      value === undefined ||
      value[value.length - 1] === "."
    ) {
      setAdivsorFees(value);
      return;
    }

    if (!/^[0-9]+(\.[0-9]{1,2})?$/.test(value)) {
      return;
    }

    setAdivsorFees(parseFloat(value));
  };

  const handleInflationRateChange = (event) => {
    let value = event.target.value;

    if (
      value === "" ||
      value === undefined ||
      value[value.length - 1] === "."
    ) {
      setInflationRate(value);
      return;
    }

    if (!/^(\d+(\.\d{0,2})?|\.?\d{1,2})$/.test(event.target.value)) {
      return;
    }

    setInflationRate(parseFloat(event.target.value));
  };

  const handleNumberOfYearsChange = (event) => {
    const value = event.target.value;

    if (value === "" || value === undefined) {
      console.log("the value is: ", value);
      setNumberOfYears(value);
      return;
    }

    if (!/^(\s*|\d+)$/.test(value)) {
      console.log("year regex");
      return;
    }

    console.log("about to set the numbers");
    setNumberOfYears(parseInt(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handle submit called!");

    const resultSet = calculateResultSet(
      startingAmount,
      monthlyContribution,
      rateOfReturn,
      expenseRatio,
      advisorFees,
      inflationRate,
      numberOfYears
    );

    console.log("the result set in input handle submit function: ", resultSet);

    //Dispatch add result set action
    props.dispatch(addResultSet(resultSet));
  };

  const numberWithCommas = (x) => {
    if (x === undefined) {
      return;
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Form style={{ marginTop: 60 }} onSubmit={handleSubmit}>
      <Form.Group controlId="formStrartingAmount">
        <Form.Label>Starting Amount</Form.Label>
        <OverlayTrigger
          key="startingAmount"
          placement="right"
          overlay={<ToolTip>The initial investment amount</ToolTip>}
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
          overlay={
            <ToolTip>
              The dollar amount you plan to contribute monthly to the investment
            </ToolTip>
          }
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
      <Form.Group controlId="forNumberOfYears">
        <Form.Label>Number of Years</Form.Label>
        <OverlayTrigger
          key="numberOfYears"
          placement="right"
          overlay={
            <ToolTip>
              They total number of years that the investment will accrue
              interest
            </ToolTip>
          }
        >
          <InfoCircle style={{ marginLeft: 10, marginBottom: 3 }} />
        </OverlayTrigger>
        <Form.Control
          placeholder="0"
          value={numberOfYears}
          onChange={handleNumberOfYearsChange}
        />
      </Form.Group>
      <Form.Group controlId="formRateOfReturn">
        <Form.Label>Rate of Return</Form.Label>
        <OverlayTrigger
          key="rateOfReturn"
          placement="right"
          overlay={
            <ToolTip>
              The average rate of return for the investment. The average rate of
              return for the stock market as a whole over the last 100 years is
              about 10%
            </ToolTip>
          }
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
            value={rateOfReturn}
          />
        </InputGroup>
      </Form.Group>
      <Form.Group controlId="formStrartingAmount">
        <Form.Label>Expense Ratio</Form.Label>
        <OverlayTrigger
          key="expenseRation"
          placement="right"
          overlay={
            <ToolTip>
              The expense ratio of an index fund or mutual fund measures how
              much of a funds assets are used for administrative and operating
              costs. These can be found on the index funds prospectus page and
              generally fall in the range between .10% and 2.5%
            </ToolTip>
          }
        >
          <InfoCircle style={{ marginLeft: 10, marginBottom: 3 }} />
        </OverlayTrigger>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroupPrepend">%</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            placeholder="0.00"
            onChange={handleExpenseRatioChange}
            value={expenseRatio}
          />
        </InputGroup>
      </Form.Group>
      <Form.Group controlId="formMonthlyContribution">
        <Form.Label>Financial Advisor Fees</Form.Label>
        <OverlayTrigger
          key="monthlyContribution"
          placement="right"
          overlay={
            <ToolTip>
              Optional, if you have a professional managaging your investment
              portfolio, you will generally pay them a percentage of the assets
              in your portfolio. this is generally around 1%. If you are a
              personal investor and do you pay somebody to manage your portfolio
              you can leave this as 0.{" "}
            </ToolTip>
          }
        >
          <InfoCircle style={{ marginLeft: 10, marginBottom: 3 }} />
        </OverlayTrigger>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroupPrepend">%</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            placeholder="0.00"
            onChange={handleAdvisorFeesChange}
            value={advisorFees}
          />
        </InputGroup>
      </Form.Group>
      <Form.Group controlId="fromInflationRate">
        <Form.Label>Average Inflation Rate</Form.Label>
        <OverlayTrigger
          key="inflationRate"
          placement="right"
          overlay={
            <ToolTip>
              The average inflation rate in the US over the last 100 years is
              about 3.22%. This number if used to calculate the potential
              passive income from your investments.
            </ToolTip>
          }
        >
          <InfoCircle style={{ marginLeft: 10, marginBottom: 3 }} />
        </OverlayTrigger>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroupPrepend">%</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            value={inflationRate}
            disabled={true}
            onChange={handleInflationRateChange}
          />
        </InputGroup>
        {/* <Form.Check
              type="checkbox"
              label="Edit Inflation Rate"
              style={{ marginTop: 10 }}
              onChange={() => setEditInflationDisabled(!editInflationDisabled)}
            /> */}
      </Form.Group>
      <Button type="submit" disabled={false} style={styles.calculateButton}>
        Calculate
      </Button>
    </Form>
  );
}

const styles = {
  calculateButton: {
    alignSelf: "right",
    marginLeft: 150,
    width: 200,
  },
  calculateColumn: {
    display: "flex",
    flexDirection: "column",
  },
};

export default connect()(CalculationInput);
