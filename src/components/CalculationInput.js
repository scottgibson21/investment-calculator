import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { InfoCircle } from "react-bootstrap-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ToolTip from "react-bootstrap/Tooltip";
import { calculateResultSet } from "../utils/helpers";
import InputGroup from "react-bootstrap/InputGroup";
import { connect } from "react-redux";
import { addResultSet } from "../actions/resultSet";
import { Formik } from "formik";
import * as yup from "yup";
import ReactGA from "react-ga";

const schema = yup.object().shape({
  startingAmount: yup
    .number("Starting amount must be a number")
    .required("Required")
    .positive("Starting Amount must be positive")
    .integer("Must be a whole number")
    .max(1000000000, "Starting Amount must be less than 1,000,000,000"),
  monthlyContribution: yup
    .number("Monlthly Contribution must be a number")
    .required("Required")
    .positive("Monthly Contribution must be positive")
    .integer("Must be a whole number")
    .max(1000000, "Monthly Contribution must be less than 1,000,000"),
  numberOfYears: yup
    .number()
    .required("Required")
    .positive("Number of Years must be positive")
    .integer("Must be a whole number")
    .max(100, "Number of Years must be less than 100"),
  rateOfReturn: yup
    .number("Must be a number")
    .required("Required")
    .min(0, "Must be greater than 0")
    .max(100, "must be less than 100"),
  expenseRatio: yup
    .number("Must be a number")
    .required("Required")
    .min(0, "Must be greater than 0")
    .max(100, "must be less than 100"),
  finacialAdvisorFees: yup
    .number("Must be a number")
    .required("Required")
    .min(0, "Must be greater than 0")
    .max(100, "must be less than 100"),
  inflationRate: yup.number("Must be a number").required().min(0).max(100),
});

function CalculationInput(props) {
  const handleFormSubmit = (values) => {
    //push an event to Google Analytics
    ReactGA.event({
      category: "Calculation",
      action: "Calculation Submitted",
    });

    console.log("handle submit called! values: ", values);
    console.log(
      "rate of return rouned to 2 decimal places",
      values.rateOfReturn.toFixed(2)
    );

    const resultSet = calculateResultSet(
      values.startingAmount,
      values.monthlyContribution,
      values.rateOfReturn.toFixed(2),
      values.expenseRatio.toFixed(2),
      values.finacialAdvisorFees.toFixed(2),
      values.inflationRate.toFixed(2),
      values.numberOfYears
    );

    console.log("prepped result set in handleFormSubmit", resultSet);

    //Dispatch add result set action
    props.dispatch(addResultSet(resultSet));
  };

  return (
    <Formik
      initialValues={{
        startingAmount: 100000,
        monthlyContribution: 1000,
        numberOfYears: 10,
        rateOfReturn: 7.5,
        expenseRatio: 1.0,
        finacialAdvisorFees: 1.0,
        inflationRate: 3.22,
      }}
      validateOnChange
      validationSchema={schema}
      onSubmit={handleFormSubmit}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={styles.formHeader}>Calculator</h2>
          <Form.Group controlId="formStrartingAmount">
            <Form.Label>Starting Amount</Form.Label>
            <OverlayTrigger
              key="startingAmount"
              placement="top"
              overlay={<ToolTip>The initial investment amount</ToolTip>}
            >
              <InfoCircle style={{ marginLeft: 10, marginBottom: 3 }} />
            </OverlayTrigger>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="number"
                name="startingAmount"
                placeholder="0"
                onChange={handleChange}
                value={values.startingAmount}
                isInvalid={touched.startingAmount && !!errors.startingAmount}
              />
              <Form.Control.Feedback type="invalid">
                {errors.startingAmount}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formMonthlyContribution">
            <Form.Label>Monthly Contribution</Form.Label>
            <OverlayTrigger
              key="monthlyContribution"
              placement="top"
              overlay={
                <ToolTip>
                  The dollar amount you plan to contribute monthly to the
                  investment
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
                type="number"
                name="monthlyContribution"
                placeholder="0"
                onChange={handleChange}
                value={values.monthlyContribution}
                isInvalid={
                  touched.monthlyContribution && !!errors.monthlyContribution
                }
              />
              <Form.Control.Feedback type="invalid">
                {errors.monthlyContribution}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formNumberOfYears">
            <Form.Label>Number of Years</Form.Label>
            <OverlayTrigger
              key="numberOfYears"
              placement="top"
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
              type="number"
              name="numberOfYears"
              placeholder="0"
              onChange={handleChange}
              value={values.numberOfYears}
              isInvalid={touched.numberOfYears && !!errors.numberOfYears}
            />
            <Form.Control.Feedback type="invalid">
              {errors.numberOfYears}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formRateOfReturn">
            <Form.Label>Rate of Return</Form.Label>
            <OverlayTrigger
              key="rateOfReturn"
              placement="top"
              overlay={
                <ToolTip>
                  The average rate of return for the investment. The average
                  rate of return for the stock market as a whole over the last
                  100 years is about 10%
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
                type="number"
                name="rateOfReturn"
                placeholder="0.00"
                onChange={handleChange}
                value={values.rateOfReturn}
                isInvalid={touched.rateOfReturn && !!errors.rateOfReturn}
              />
              <Form.Control.Feedback type="invalid">
                {errors.numberOfYears}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formExpenseRatio">
            <Form.Label>Expense Ratio</Form.Label>
            <OverlayTrigger
              key="expenseRatio"
              placement="top"
              overlay={
                <ToolTip>
                  The expense ratio of an index fund or mutual fund measures how
                  much of a funds assets are used for administrative and
                  operating costs. These can be found on the index funds
                  prospectus page and generally fall in the range between .10%
                  and 2.5%
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
                type="number"
                name="expenseRatio"
                placeholder="0.00"
                onChange={handleChange}
                value={values.expenseRatio}
                isInvalid={touched.expenseRatio && !!errors.expenseRatio}
              />
              <Form.Control.Feedback type="invalid">
                {errors.numberOfYears}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formFinacialAdivsorFees">
            <Form.Label>Financial Advisor Fees</Form.Label>
            <OverlayTrigger
              key="monthlyContribution"
              placement="top"
              overlay={
                <ToolTip>
                  Optional, if you have a financial advisor managaging your
                  investment portfolio, you will generally pay them a percentage
                  of the assets in your portfolio. this is generally around 1%.
                  If you are a personal investor and do not pay somebody to
                  manage your portfolio you can leave this as 0.{" "}
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
                type="number"
                name="finacialAdvisorFees"
                placeholder="0.00"
                onChange={handleChange}
                value={values.finacialAdvisorFees}
                isInvalid={
                  touched.finacialAdvisorFees && !!errors.finacialAdvisorFees
                }
              />
              <Form.Control.Feedback type="invalid">
                {errors.finacialAdvisorFees}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="fromInflationRate">
            <Form.Label>Average Inflation Rate</Form.Label>
            <OverlayTrigger
              key="inflationRate"
              placement="top"
              overlay={
                <ToolTip>
                  The average inflation rate in the US over the last 100 years
                  is about 3.22%. This number if used to calculate the potential
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
                type="number"
                name="averageInflationRate"
                placeholder="0.00"
                onChange={handleChange}
                disabled
                value={values.inflationRate}
                isInvalid={touched.inflationRate && !!errors.inflationRate}
              />
              <Form.Control.Feedback type="invalid">
                {errors.inflationRate}
              </Form.Control.Feedback>
            </InputGroup>
            <Form.Text>* Average Inflation Rate cannot be edited</Form.Text>
          </Form.Group>
          <Button type="submit" disabled={false} style={styles.calculateButton}>
            Calculate
          </Button>
        </Form>
      )}
    </Formik>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#BDC3C7",
    borderRadius: "15px",
    marginTop: 15,
    padding: 30,
    color: "black",
  },
  formHeader: {
    fontFamily: "Permanent Marker",
    fontSize: 35,
    alignSelf: "center",
  },
  calculateButton: {
    alignSelf: "center",
    width: 200,
  },
  calculateColumn: {
    display: "flex",
    flexDirection: "column",
  },
};

export default connect()(CalculationInput);
