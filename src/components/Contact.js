import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact() {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Submit on Contact Form clicked");
  };

  return (
    <Container style={styles.container} fluid="md">
      <Row>
        <Col style={styles.contactHeader}>
          <span>Contact Us</span>
        </Col>
      </Row>
      <Row style={styles.formRow}>
        <Form style={styles.form} onSubmit={onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="5" />
          </Form.Group>
          <Button type="submit" disabled={false} style={styles.submitButton}>
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

const styles = {
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  contactHeader: {
    marginTop: 75,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    fontFamily: "Permanent Marker",
    fontSize: 75,
  },
  formRow: {
    display: "flex",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    width: 800,
    fontWeight: "bold",
    flexDirection: "column",
  },
  submitButton: {
    width: 200,
    alignSelf: "center",
  },
};

export default Contact;
