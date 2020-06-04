import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function Contact() {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Submit on Contact Form clicked");
  };

  return (
    <Row style={styles.mainRow} fluid="md">
      <Col style={styles.column} sm={12} md={8} lg={6}>
        <Alert style={styles.alert} variant="danger">
          <h2>COMING SOON</h2>
          <p style={styles.alertSubtext}>
            Thanks for your patience, this page is a work in progress. We should
            have it up and running soon.
          </p>
        </Alert>
        <span style={styles.contactHeader}>Contact Us</span>
        <Form style={styles.form} onSubmit={onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              disabled
              type="email"
              placeholder="Enter email - DISABLED"
            />
            <Form.Text>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Message</Form.Label>
            <Form.Control
              disabled
              as="textarea"
              rows="5"
              placeholder="Message - DISABLED"
            />
          </Form.Group>
          <Button type="submit" disabled style={styles.submitButton}>
            Submit
          </Button>
        </Form>
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
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#BDC3C7",
    borderRadius: "15px",
    color: "black",
    margin: 15,
  },
  alert: {
    margin: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: 150,
    width: "100%",
    fontSize: 75,
    borderRadius: "15px",
  },
  alertSubtext: {
    fontSize: "1rem",
    textAlign: "center",
  },
  contactHeader: {
    fontFamily: "Permanent Marker",
    fontSize: 75,
    textAlign: "center",
  },
  formRow: {
    display: "flex",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    fontWeight: "bold",
    flexDirection: "column",
    width: "100%",
    marginBottom: 15,
  },
  submitButton: {
    width: 200,
    alignSelf: "center",
  },
};

export default Contact;
