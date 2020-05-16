import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

function CalculationResultJumbotron(props) {
  return (
    <Jumbotron
      fluid
      style={{
        borderRadius: "15px",
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
          width: "100%",
        }}
      >
        <div style={divStyle}>Div 4</div>
        <div style={divStyle}>Div 5</div>
        <div style={divStyle}>Div 6</div>
      </div>
    </Jumbotron>
  );
}

const divStyle = {
  width: "100%",
  justifyContent: "center",
  height: "100px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

export default CalculationResultJumbotron;
