import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    console.log("OwO")
    const formData = new FormData(e.target);
    console.log("2");
    console.log(formData);
    const formDataObj = Object.fromEntries(formData.entries())        
    console.log(formDataObj)
    
    console.log(formDataObj)
    console.log("After");

    setValidated(true);

    setStatus("Sending...");
    // const { name, email, message } = e.target.elements;
    // let details = {
    //   name: name.value,
    //   email: email.value,
    //   message: message.value,
    // };

    // let response = await fetch("http://localhost:5000/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(details),
    // });
    setStatus("Submit");
    // let result = await response.json();
    // alert(result.status);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="col-md-8">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="e.g. John Doe"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          required
          type="email" 
          placeholder="e.g. info@iCustomStitch.com" />
        <Form.Text className="text-muted">
          Please provide an email for us to respond to.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Subject</Form.Label>
        <Form.Control 
          required
          type="text" 
          placeholder="e.g. info@iCustomStitch.com"
          defaultValue={"Personalized Cross Stitch Kit Inquiry"}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Message</Form.Label>
        <Form.Control 
          required
          as="textarea"
        />
        <Form.Text className="text-muted">
          Please provide an email for us to respond to.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Multiple files input example</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <label htmlFor="name">Name:</label>
    //     <input type="text" id="name" required />
    //   </div>
    //   <div>
    //     <label htmlFor="email">Email:</label>
    //     <input type="email" id="email" required />
    //   </div>
    //   <div>
    //     <label htmlFor="message">Message:</label>
    //     <textarea id="message" required />
    //   </div>
    //   <button type="submit">{status}</button>
    // </form>
  );
};

export default ContactForm;