import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "./ContactForm.module.css";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState<null | "idle" | "sending" | "sent">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // simulate send
    await new Promise((r) => setTimeout(r, 700));
    setStatus("sent");
    setName("");
    setEmail("");
    setDetails("");
    setTimeout(() => setStatus("idle"), 1800);
  };

  return (
    <Container fluid className="container-lg">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <div className="text-center">
            <h2 className="">Lets get in touch </h2>

            <Form onSubmit={handleSubmit} className="mt-4">
              <Form.Group className="mb-3" controlId="">
                <Form.Label className="visually-hidden">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={styles.inputField}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactEmail">
                <Form.Label className="visually-hidden">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={styles.inputField}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactDetails">
                <Form.Label className="visually-hidden">
                  Project details
                </Form.Label>
                <Form.Control
                  placeholder="Project details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className={styles.inputField}
                />
              </Form.Group>

              <Button
                type="submit"
                className={`w-100 ${styles.submitButton}`}
                variant="none"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send"}
              </Button>

              {status === "sent" && (
                <div className="contact-sent" role="status" aria-live="polite">
                  Message sent — thank you!
                </div>
              )}
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
