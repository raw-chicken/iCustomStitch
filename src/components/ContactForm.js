import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';


function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  })
}

function readFiles(files) {
  return new Promise(function (resolve, reject) {
    let data = [];
    const promises = Array.from(files).map(file => { // get back an array of promises
      return readFileAsync(file)
        .then((routes) => {
          data.push(routes)
        })
        .catch((error) => {
          console.log(error)
        })
    });
    Promise.all(promises)
      .then(() => { // all done!
        // console.log(routesArray)
        resolve(data)
      })
  })
}



const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const [validated, setValidated] = useState(false);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Personalized Cross Stitch Kit Inquiry");
  const [message, setMessage] = useState(""); 
  const [files, setFiles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    setStatus("Sending...");

    var data = await readFiles(files);

    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);
    formData.append("files", JSON.stringify(data));

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      body: formData,
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  const test = (e) => {
    console.log(files);
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="col-md-8">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="e.g. John Doe"
          value={name}
          onChange={ e => setName(e.target.value) }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          required
          type="email" 
          placeholder="e.g. info@iCustomStitch.com"
          value={email}
          onChange={ e => setEmail(e.target.value) }
        />
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
          value={subject}
          onChange={ e => setSubject(e.target.value) }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Message</Form.Label>
        <Form.Control 
          required
          as="textarea"
          value={message}
          onChange={ e => setMessage(e.target.value) }
        />
        <Form.Text className="text-muted">
          Please provide an email for us to respond to.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Multiple files input example</Form.Label>
        <Form.Control 
          type="file"
          multiple
          files={files}
          // value={paths}
          onChange={(e) => setFiles(e.target.files)}
          // onClick={(e) => console.log(e.target)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {status}
      </Button>
    </Form>
  );
};

export default ContactForm;