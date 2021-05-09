import React from "react";
import { Form } from "react-bootstrap";
import './ContactPage.css'

const ContactPage = () => {
  return (
    <section className="container mt-5">
      <div className="col-md-6 mx-auto contact__form p-3 rounded px-4">
          <h2 className="light__white__color text-center mb-4">Get In Touch</h2>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Your Email" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder="Your Message" />
          </Form.Group>
          <input type="submit" className="btn btn-success" value="Send" />
        </Form>
      </div>
    </section>
  );
};

export default ContactPage;
