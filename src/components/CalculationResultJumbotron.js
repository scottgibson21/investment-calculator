import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import {
  AttachMoney,
  TrendingUp,
  BusinessCenter,
  AccountBalance,
  Person,
} from "@material-ui/icons";
import { connect } from "react-redux";
import { formatNumberWithCommas } from "../utils/helpers";
import { InfoCircle } from "react-bootstrap-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ToolTip from "react-bootstrap/Tooltip";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CalculationResultJumbotron(props) {
  return (
    <Jumbotron fluid style={styles.jumbotron}>
      {/* Column 1*/}
      <Row style={styles.jumbotronRow}>
        <Col style={styles.jumbotronColumn} sm={12} lg={6}>
          <h2 style={styles.overviewHeader}>Overview</h2>
          <Row style={styles.dataHeader}>
            <AttachMoney style={{ marginRight: "5px" }} />
            <div>Starting Capital</div>
            <OverlayTrigger
              key="startingCapital"
              placement="right"
              overlay={<ToolTip>The starting amount of capital</ToolTip>}
            >
              <InfoCircle style={{ marginLeft: 10, marginTop: "5px" }} />
            </OverlayTrigger>
          </Row>
          <div style={styles.dataValue}>
            {props.startingCapital === undefined
              ? "---"
              : `$${formatNumberWithCommas(props.startingCapital)}`}
          </div>
          <Row style={styles.dataHeader}>
            <BusinessCenter style={{ marginRight: "5px" }} />
            <div>Total Contributions</div>
            <OverlayTrigger
              key="totalContributions"
              placement="right"
              overlay={
                <ToolTip>
                  The total dollar amount of contributions made during the time
                  period
                </ToolTip>
              }
            >
              <InfoCircle style={{ marginLeft: 10, marginTop: "5px" }} />
            </OverlayTrigger>
          </Row>
          <div style={styles.dataValue}>
            {props.totalContributions === undefined
              ? "---"
              : `$${formatNumberWithCommas(props.totalContributions)}`}
          </div>
          <Row style={styles.dataHeader}>
            <TrendingUp style={{ marginRight: "5px" }} />
            <div>Interest Accrued</div>
            <OverlayTrigger
              key="startingAmount"
              placement="right"
              overlay={
                <ToolTip>
                  The total dollar amount of interest accrued during the time
                  period
                </ToolTip>
              }
            >
              <InfoCircle style={{ marginLeft: 10, marginTop: "5px" }} />
            </OverlayTrigger>
          </Row>
          <div style={styles.dataValue}>
            {props.totalInterest === undefined
              ? "---"
              : `$${formatNumberWithCommas(props.totalInterest)}`}
          </div>
          <Row style={styles.dataHeader}>
            <AttachMoney />
            <div>Ending Capital</div>
            <OverlayTrigger
              key="startingAmount"
              placement="right"
              overlay={
                <ToolTip>
                  The projected total monetary value of the account at the end
                  of the time period
                </ToolTip>
              }
            >
              <InfoCircle style={{ marginLeft: 10, marginTop: "5px" }} />
            </OverlayTrigger>
          </Row>
          <div style={styles.dataValue}>
            {props.capital === undefined
              ? "---"
              : `$${formatNumberWithCommas(props.capital)}`}
          </div>
          <Row style={styles.dataHeader}>
            <BusinessCenter style={{ marginRight: "5px" }} />
            <div>Passive Income</div>
            <OverlayTrigger
              key="startingAmount"
              placement="right"
              overlay={
                <ToolTip>
                  The projected passive income from the ending capital. Passive
                  income is the amount that can be withdrawn from the account on
                  a yearly basis indefinitely, while maintaining the value of
                  the ending capital. The basic formula is: base capital * (rate
                  of return - inflation rate).
                </ToolTip>
              }
            >
              <InfoCircle style={{ marginLeft: 10, marginTop: "5px" }} />
            </OverlayTrigger>
          </Row>
          <div style={styles.dataValue}>
            {props.passiveIncome === undefined
              ? "---"
              : `$${formatNumberWithCommas(props.passiveIncome)}/year`}
          </div>
        </Col>
        <Col
          style={{ color: "#d60412", ...styles.jumbotronColumn }}
          sm={12}
          lg={6}
        >
          <h2 style={styles.overviewHeader}>Fees</h2>
          <Row style={styles.dataHeader}>
            <AccountBalance style={{ marginRight: "5px" }} />
            <div>Expense Ratio Fees</div>
            <OverlayTrigger
              key="startingAmount"
              placement="right"
              overlay={
                <ToolTip>
                  The total dollar amount lost to expense ratio fees during the
                  time period
                </ToolTip>
              }
            >
              <InfoCircle style={{ marginLeft: 10, marginTop: "5px" }} />
            </OverlayTrigger>
          </Row>
          <div style={styles.dataValue}>
            {props.totalExpenseRatioFees === undefined
              ? "---"
              : `-$${formatNumberWithCommas(props.totalExpenseRatioFees)}`}
          </div>
          <Row style={styles.dataHeader}>
            <AccountBalance style={{ marginRight: "5px" }} />
            <div>Expense Ratio True Cost</div>
            <OverlayTrigger
              key="startingAmount"
              placement="right"
              overlay={
                <ToolTip>
                  The true opportunity cost of the expense ratio fees. This is
                  the dollar amount of the fees and the interest those fees
                  would have earned had they remained as invested capital.
                </ToolTip>
              }
            >
              <InfoCircle style={{ marginLeft: 10, marginTop: "5px" }} />
            </OverlayTrigger>
          </Row>
          <div style={styles.dataValue}>
            {props.totalExpenseRatioOpportunityCost === undefined
              ? "---"
              : `-$${formatNumberWithCommas(
                  props.totalExpenseRatioOpportunityCost
                )}`}
          </div>
          <Row style={styles.dataHeader}>
            <Person style={{ marginRight: "5px" }} />
            <div>Financial Advisor Fees</div>
            <OverlayTrigger
              key="startingAmount"
              placement="right"
              overlay={
                <ToolTip>
                  The total dollar amount lost to financial advisor fees during
                  the time period
                </ToolTip>
              }
            >
              <InfoCircle style={{ marginLeft: 10, marginTop: "5px" }} />
            </OverlayTrigger>
          </Row>
          <div style={styles.dataValue}>
            {props.totalAdvisorFees === undefined
              ? "---"
              : `-$${formatNumberWithCommas(props.totalAdvisorFees)}`}
          </div>
          <Row style={styles.dataHeader}>
            <Person style={{ marginRight: "5px" }} />
            <div>Adivsor True Cost</div>
            <OverlayTrigger
              key="startingAmount"
              placement="right"
              overlay={
                <ToolTip>
                  The true opportunity cost of the financial advisor fees. This
                  is the dollar amount of the fees and the interest those fees
                  would have earned had they remained as invested capital.
                </ToolTip>
              }
            >
              <InfoCircle style={{ marginLeft: 10, marginTop: "5px" }} />
            </OverlayTrigger>
          </Row>
          <div style={styles.dataValue}>
            {props.totalAdvisorOpportunityCost === undefined
              ? "---"
              : `-$${formatNumberWithCommas(
                  props.totalAdvisorOpportunityCost
                )}`}
          </div>
        </Col>
      </Row>
    </Jumbotron>
  );
}

const styles = {
  jumbotron: {
    borderRadius: "15px",
    backgroundColor: "#BDC3C7",
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0 0 0 0",
    margin: 15,
  },
  jumbotronHeaderRow: {
    height: "100px",
    width: "100%",
    justifyContent: "center",
    margin: 0,
  },
  jumbotronRow: {
    height: "auto",
    width: "100%",
    justifyContent: "space-between",
    margin: 0,
  },
  jumbotronColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 0,
  },
  overviewHeader: {
    fontFamily: "Permanent Marker",
    fontSize: 35,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  dataHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  dataValue: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
};

function mapStateToProps({ results }) {
  let { resultSet } = results;

  if (resultSet === undefined) {
    return {};
  }

  return {
    capital: resultSet.capital[0].data[resultSet.capital[0].data.length - 1].y,
    startingCapital: resultSet.capital[0].data[0].y,
    totalInterest:
      resultSet.totalInterest[0].data[
        resultSet.totalInterest[0].data.length - 1
      ].y,
    totalContributions:
      resultSet.totalContributions[0].data[
        resultSet.totalContributions[0].data.length - 1
      ].y,
    totalExpenseRatioFees:
      resultSet.totalExpenseRatioFees[0].data[
        resultSet.totalExpenseRatioFees[0].data.length - 1
      ].y,
    totalExpenseRatioOpportunityCost:
      resultSet.totalExpenseRatioOpportunityCost[0].data[
        resultSet.totalExpenseRatioOpportunityCost[0].data.length - 1
      ].y,
    totalAdvisorFees:
      resultSet.totalAdvisorFees[0].data[
        resultSet.totalAdvisorFees[0].data.length - 1
      ].y,
    totalAdvisorOpportunityCost:
      resultSet.totalAdvisorOpportunityCost[0].data[
        resultSet.totalAdvisorOpportunityCost[0].data.length - 1
      ].y,
    passiveIncome:
      resultSet.passiveIncome[0].data[
        resultSet.passiveIncome[0].data.length - 1
      ].y,
  };
}

export default connect(mapStateToProps)(CalculationResultJumbotron);
