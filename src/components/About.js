import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function About() {
  return (
    <Container style={styles.container} fluid="md">
      <Row>
        <Col style={styles.aboutHeader}>
          <span>About Nvestio</span>
        </Col>
      </Row>
      <Row>
        <Col style={styles.aboutPic}>
          <Image src={require("../assets/cat-pic.jpg")} roundedCircle />
        </Col>
      </Row>
      <Row>
        <Col style={styles.aboutBody}>
          <div style={styles.aboutBodyDiv}>
            <p>
              {" "}
              Hi I'm Scott, Im a software engineer with a passion for personal
              finance and investing. I am a firm believer that investing
              knowledge should be freely available for all.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

const styles = {
  container: {
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    width: 700,
    color: "#FFFFFF",
  },
  aboutHeader: {
    marginTop: 75,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    fontFamily: "Permanent Marker",
    fontSize: 75,
  },
  aboutPic: {
    height: 250,
    textAlign: "center",
  },
  aboutBody: {
    display: "flex",
    justifyContent: "center",
    height: 400,
  },
  aboutBodyDiv: {
    width: 500,
    fontFamily: "Roboto",
    textAlign: "center",
  },
};

export default About;
