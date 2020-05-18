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
          </div>
          <div style={resultTextStyle}>
            {result === null
              ? "---"
              : `$${formatNumberWithCommas(result.totalAccruedInterest)}`}
          </div>
        </div>
        <div style={{ ...divStyle, color: "#51168c" }}>
          <div style={inlineDivStyle}>
            <BusinessCenter style={{ marginRight: "5px" }} />
            <div>Passive Income</div>
          </div>
          <div style={resultTextStyle}>
            {result === null
              ? "---"
              : `$${formatNumberWithCommas(result.passiveIncome)}/year`}
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
          </div>
          <div style={resultTextStyle}>
            {result === null ? "---" : `Placeholder`}
          </div>
        </div>
        <div style={{ ...divStyle, color: "#fc8f00" }}>
          <div style={inlineDivStyle}>
            <Person style={{ marginRight: "5px" }} />
            <div>Financial Advisor Fees</div>
          </div>
          <div style={resultTextStyle}>
            {result === null ? "---" : `Placeholder`}
          </div>
        </div>
        <div style={{ ...divStyle, color: "#03505c" }}></div>
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
  console.log("result set in jumbotron map state to props", resultSet);
  return {
    result:
      resultSet === undefined || resultSet.length === 0
        ? null
        : resultSet[resultSet.length - 1],
  };
}

export default connect(mapStateToProps)(CalculationResultJumbotron);
