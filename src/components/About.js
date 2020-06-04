import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function About() {
  return (
    <Row style={styles.mainRow}>
      <Col style={styles.column} xs={12} sm={8} lg={4}>
        <div style={styles.aboutHeader}>
          <span>About Nvestio</span>
        </div>
        <div style={styles.aboutPic}>
          <Image src={require("../assets/cat-pic.jpg")} roundedCircle />
        </div>
        <div style={styles.aboutBodyDiv}>
          <p>
            Hi I'm Scott. I’m a software engineer with a passion for personal
            finance and investing. I created Nvestio as a tool for illustrating
            the power of compounding interest and spreading awareness and
            knowledge about personal investing.
          </p>
          <p style={styles.signature}>
            <br />
            Scott
          </p>
        </div>
      </Col>
    </Row>
  );
}

const styles = {
  mainRow: {
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFFFF",
    margin: 0,
  },
  aboutHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Permanent Marker",
    fontSize: 75,
    textAlign: "center",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#BDC3C7",
    borderRadius: "15px",
    color: "black",
    margin: 15,
  },
  aboutPic: {
    textAlign: "center",
  },
  aboutBody: {
    display: "flex",
    justifyContent: "center",
  },
  aboutBodyDiv: {
    fontFamily: "Roboto",
    textAlign: "center",
    fontSize: 18,
    marginTop: 30,
    paddingRight: 50,
    paddingLeft: 50,
  },
  signature: {
    textAlign: "left",
  },
};

export default About;
