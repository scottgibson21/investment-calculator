import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

function CalculationResultJumbotron(props) {
  return (
    <Jumbotron
      fluid
      style={{
        borderRadius: "6px",
        backgroundColor: "#CEEDD3",
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
          alignItems: "flex-start",
          padding: "0 0 0 0",
          width: "100%",
        }}
      >
        <div style={divStyle}>Div 1</div>
        <div style={divStyle}>Div 2</div>
        <div style={divStyle}>Div 3</div>
      </div>
      <div
        style={{
          height: "100px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          padding: "0 0 0 0",
          width: "100%",
        }}
      >
        <div style={divStyle}>Div 1</div>
        <div style={divStyle}>Div 2</div>
        <div style={divStyle}>Div 3</div>
      </div>
    </Jumbotron>
  );
}

const divStyle = {
  borderStyle: "solid",
  width: "100%",
  textAlign: "center",
  height: "100px",
};

export default CalculationResultJumbotron;
