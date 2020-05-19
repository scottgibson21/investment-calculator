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
import ToolTip from "react-bootstrap/ToolTip";

function CalculationResultJumbotron(props) {
  let { result } = props;
  return (
    <Jumbotron
      fluid
      style={{
        borderRadius: "15px",
        backgroundColor: "#BDC3C7",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0 0 0 0",
      }}
    >
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
              overlay={<ToolTip>Info about the Ending Capital</ToolTip>}
            >
              <InfoCircle style={{ marginLeft: 10, marginTop: "5px" }} />
            </OverlayTrigger>
          </div>
          <div style={resultTextStyle}>
            {result === null
              ? "---"
              : `$${formatNumberWithCommas(result.capital)}`}
          </div>
        </div>
        <div style={{ ...divStyle, color: "#232f8c" }}>
          <div style={inlineDivStyle}>
            <TrendingUp style={{ marginRight: "5px" }} />
            <div>Interest Accrued</div>
            <OverlayTrigger
              key="startingAmount"
              placement="right"
              overlay={<ToolTip>Info about the Interest Accrued</ToolTip>}
            >
              <InfoCircle style={{ marginLeft: 10, marginTop: "5px" }} />
            </OverlayTrigger>
          </div>
          <div style={resultTextStyle}>
            {result === null
              ? "---"
              : `$${formatNumberWithCommas(result.totalAccruedInterest)}`}
          </div>
        </div>
        <div style={{ ...divStyle, color: "#ac04b8" }}>
          <div style={inlineDivStyle}>
            <BusinessCenter style={{ marginRight: "5px" }} />
            <div>Total Contributions</div>
            <OverlayTrigger
              key="totalContributions"
              placement="right"
              overlay={<ToolTip>Info about the Total Contributions</ToolTip>}
            >
              <InfoCircle style={{ marginLeft: 10, marginTop: "5px" }} />
            </OverlayTrigger>
          </div>
          <div style={resultTextStyle}>
            {result === null
              ? "---"
              : `$${formatNumberWithCommas(result.totalContributions)}`}
          </div>
        </div>
      </div>
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
              overlay={<ToolTip>Info about the Expense Ratio Fees</ToolTip>}
            >
              <InfoCircle style={{ marginLeft: 10, marginTop: "5px" }} />
            </OverlayTrigger>
          </div>
          <div style={resultTextStyle}>
            {result === null
              ? "---"
              : `$${formatNumberWithCommas(
                  result.totalAccruedExpenseRatioFees
                )}`}
          </div>
        </div>
        <div style={{ ...divStyle, color: "#fc8f00" }}>
          <div style={inlineDivStyle}>
            <Person style={{ marginRight: "5px" }} />
            <div>Financial Advisor Fees</div>
            <OverlayTrigger
              key="startingAmount"
              placement="right"
              overlay={<ToolTip>Info about the Financial Advisor Fees</ToolTip>}
            >
              <InfoCircle style={{ marginLeft: 10, marginTop: "5px" }} />
            </OverlayTrigger>
          </div>
          <div style={resultTextStyle}>
            {result === null
              ? "---"
              : `$${formatNumberWithCommas(
                  result.totalAccruedFinancialAdvisorFees
                )}`}
          </div>
        </div>
        <div style={{ ...divStyle, color: "#51168c" }}>
          <div style={inlineDivStyle}>
            <BusinessCenter style={{ marginRight: "5px" }} />
            <div>Passive Income</div>
            <OverlayTrigger
              key="startingAmount"
              placement="right"
              overlay={<ToolTip>Info about the Passive Income</ToolTip>}
            >
              <InfoCircle style={{ marginLeft: 10, marginTop: "5px" }} />
            </OverlayTrigger>
          </div>
          <div style={resultTextStyle}>
            {result === null
              ? "---"
              : `$${formatNumberWithCommas(result.passiveIncome)}/year`}
          </div>
        </div>
      </div>
    </Jumbotron>
  );
}

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
  return {
    result:
      resultSet === undefined || resultSet.length === 0
        ? null
        : resultSet[resultSet.length - 1],
  };
}

export default connect(mapStateToProps)(CalculationResultJumbotron);
