import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_26asi5a', 'template_zqde667', form.current,'MrDxcX4iF4mTcAZq2')
      .then((result) => {
        if (result.status === 200) {
            toast.success("Message sent successfully!");
        }
      }, (error) => {
          console.log(error.text);
          toast.error("Failed to send the message, please try again.");
      });

    e.target.reset();
  };

  return (
    <Container fluid className="contact-section" id="contact">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", color:"white" }}>
          <Col md={6} style={{ justifyContent: "center", paddingTop: "0px", paddingBottom: "50px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "0px" }}>
              Contact <strong className='purple'>Me</strong>
            </h1>
            <p style={{marginBottom:"25px"}}>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group controlId="formBasicName" style={{marginBottom:"10px"}}>
                <Form.Control type="text" placeholder="Enter your name" name="user_name" required />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" style={{marginBottom:"10px"}}>
                <Form.Control type="email" placeholder="Enter your email" name="user_email" required />
              </Form.Group>

              <Form.Group controlId="formBasicMessage" style={{marginBottom:"20px"}}>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" name="message" required />
              </Form.Group>

              <Button variant="primary" type="submit" style={{marginBottom:"10px", width:"100%"}}>
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </Container>
  );
}

export default ContactForm;