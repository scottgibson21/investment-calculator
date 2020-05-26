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
import Row from "react-bootstrap/Row";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ToolTip from "react-bootstrap/ToolTip";

function CalculationResultJumbotron(props) {
  return (
    <Jumbotron
      fluid
      style={{
        borderRadius: "15px",
        backgroundColor: "#BDC3C7",
        width: "100%",
        height: 400,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0 0 0 0",
        marginTop: 60,
      }}
    >
      <h2 style={styles.overviewHeader}>Overview</h2>
      {/* ROW 1*/}
      <div
        style={{
          height: "100px",
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <div style={{ ...divStyle, color: "#055e11" }}>
          <div style={inlineDivStyle}>
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
          </div>
          <div style={resultTextStyle}>
            {props.capital === undefined
              ? "---"
              : `$${formatNumberWithCommas(props.capital)}`}
          </div>
        </div>
        <div style={{ ...divStyle, color: "#232f8c" }}>
          <div style={inlineDivStyle}>
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
          </div>
          <div style={resultTextStyle}>
            {props.totalInterest === undefined
              ? "---"
              : `$${formatNumberWithCommas(props.totalInterest)}`}
          </div>
        </div>
        <div style={{ ...divStyle, color: "#ac04b8" }}>
          <div style={inlineDivStyle}>
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
          </div>
          <div style={resultTextStyle}>
            {props.totalContributions === undefined
              ? "---"
              : `$${formatNumberWithCommas(props.totalContributions)}`}
          </div>
        </div>
      </div>
      {/* ROW 2*/}
      <div
        style={{
          height: "100px",
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <div style={{ ...divStyle, color: "#bd1209" }}>
          <div style={inlineDivStyle}>
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
          </div>
          <div style={resultTextStyle}>
            {props.totalExpenseRatioFees === undefined
              ? "---"
              : `$${formatNumberWithCommas(props.totalExpenseRatioFees)}`}
          </div>
        </div>
        <div style={{ ...divStyle, color: "#d46e08" }}>
          <div style={inlineDivStyle}>
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
          </div>
          <div style={resultTextStyle}>
            {props.totalAdvisorFees === undefined
              ? "---"
              : `$${formatNumberWithCommas(props.totalAdvisorFees)}`}
          </div>
        </div>
        <div style={{ ...divStyle, color: "#51168c" }}>
          <div style={inlineDivStyle}>
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
          </div>
          <div style={resultTextStyle}>
            {props.passiveIncome === undefined
              ? "---"
              : `$${formatNumberWithCommas(props.passiveIncome)}/year`}
          </div>
        </div>
      </div>
      {/*Row 3*/}
      <div
        style={{
          height: "100px",
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <div style={{ ...divStyle, color: "#bd1209" }}>
          <div style={inlineDivStyle}>
            <AccountBalance style={{ marginRight: "5px" }} />
            <div>Expense Ratio Opportunity Cost</div>
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
          </div>
          <div style={resultTextStyle}>
            {props.totalExpenseRatioOpportunityCost === undefined
              ? "---"
              : `$${formatNumberWithCommas(
                  props.totalExpenseRatioOpportunityCost
                )}`}
          </div>
        </div>
        <div style={{ ...divStyle, color: "#d46e08" }}>
          <div style={inlineDivStyle}>
            <Person style={{ marginRight: "5px" }} />
            <div>Financial Adivsor Opportunity Cost</div>
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
          </div>
          <div style={resultTextStyle}>
            {props.totalAdvisorOpportunityCost === undefined
              ? "---"
              : `$${formatNumberWithCommas(props.totalAdvisorOpportunityCost)}`}
          </div>
        </div>
        <div style={{ ...divStyle, color: "#ac04b8" }}></div>
      </div>
    </Jumbotron>
  );
}

const styles = {
  overviewHeader: {
    fontFamily: "Permanent Marker",
    fontSize: 35,
    color: "black",
    alignSelf: "center",
    marginTop: 20,
  },
};

const divStyle = {
  width: "100%",
  justifyContent: "center",
  height: "100px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontWeight: "bold",
};

const inlineDivStyle = {
  display: "flex",
};

const resultTextStyle = {
  fontSize: "x-large",
};

function mapStateToProps({ results }) {
  let { resultSet } = results;

  if (resultSet === undefined) {
    return {};
  }

  return {
    capital: resultSet.capital[0].data[resultSet.capital[0].data.length - 1].y,
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
