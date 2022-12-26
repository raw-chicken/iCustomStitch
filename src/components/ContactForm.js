import React, { useState, useEffect, useRef } from "react";
import { Form, Button, InputGroup, ListGroup } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";
import { readFiles, convert, captcha } from "./utils/form_utils";
import { Formik } from "formik";
import FileDisplay from "./FileDisplay"
import * as yup from 'yup';

const MAX_SIZE = 4 * 1024 * 1024;

const SITE_KEY = "6LfBvp0jAAAAANpn2tum7pckshjYkzm53mf5f0om";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required("An email is required"),
  subject: yup.string().required(),
  message: yup.string().required(),
  files: yup.mixed(),
  size: yup.number().test("fileSize", "The files have exceeded the size limit", (f) => {
    return f < MAX_SIZE;
  }),
  maxSize: yup.number(),
});

const ContactForm = () => {

  const [size, setSize] = useState(0);

  const [status, setStatus] = useState("Submit");

  const [recaptcha, setRecaptcha] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Custom Cross Stitch Inquiry");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState([]);

  const sendEmail = async (e) => {
    // console.log("Send email", e);
    try {
      if (e.files !== null)
        var data = await readFiles(Array.from(e.files));
      else 
        data = []
      
      let formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("subject", subject + " - " + name);
      formData.append("message", message);
      formData.append("files", JSON.stringify(data));
      // console.log("Formdata", formData);

      let response = await fetch("https://icustomstitch-form2-v5e54zv6aa-uc.a.run.app/contact", {
        method: "POST",
        body: formData,
      });
      setStatus("Submit");
      return await response.json();
    } catch (e) {
      // console.log(e); 
      setStatus("Submit");
      alert("Something went wrong and the form was not sent, please email info@iCustomStitch.com directly\nError: " + {e});
    }
  }

  const handleSubmit = async (e) => {
    setStatus("Sending...");
    
    captcha(recaptcha, SITE_KEY).then((res) => {
      if (res === -1) return -1;
      return sendEmail(e);
    }).then((res) => {
      alert(res.status);
    });
  };

  function listFiles() {
    // console.log("Files inside listFiles", files);
    function deleteFile(file) {
      console.log("Trying to delete file", file)
      let temp_files = Array.from(files);
      let list = new DataTransfer();

      var ind = temp_files.findIndex(f => file.props.file.name === f.name);
      temp_files.splice(ind, 1)

      temp_files.forEach((f2) => {
        list.items.add(f2)
      })
      
      // URL.revokeObjectURL(file.objectURL);
      // console.log("Trying to revoke", file.objectUrl);
      setFiles(list.files);
    }

    var uploaded = Array.from(files).map((file, ind) => {
      return <FileDisplay file={file} key={ind} delete={deleteFile} />
    })
    // setFieldValue("subject", "THIS IS A TEST")
    return (
      <ListGroup variant="flush">
        <ListGroup.Item>{uploaded}</ListGroup.Item>
      </ListGroup>
    );
  }

  return (
    <Formik
      validationSchema={schema}
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={{
        name: name,
        email: email,
        subject: subject,
        message: message,
        files: files,
        size: size,
        recaptcha: '',
      }}
      onSubmit={(values, { resetForm }) => {
        console.log("Values", values);
        handleSubmit(values);
        resetForm();
      }}
      enableReinitialize
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        setFieldValue,
        setFieldTouched,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit} className="col-md-8">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="e.g. John Doe"
              value={name}
              onChange={e => setName(e.target.value)}
              isInvalid={!!errors.name}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="e.g. info@iCustomStitch.com"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              isInvalid={!!errors.email}
            />
            <Form.Text className="text-muted">
              Please provide an email for us to get back to you.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Subject</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="e.g. info@iCustomStitch.com"
              name="subject"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              isInvalid={!!errors.subject}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Message</Form.Label>
            <Form.Control 
              required
              as="textarea"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              isInvalid={!!errors.message}
            />
          </Form.Group>

          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Attachments</Form.Label>
            <InputGroup>
              <Form.Control
                type="file"
                multiple
                files={files}
                onChange={e => {
                  setFiles(e.target.files);
                  let size = 0;
                  Array.from(e.target.files).forEach(f => size += f.size);
                  setSize(size);
                }}
                isInvalid={!!errors.files || !!errors.size}
              />
              <InputGroup.Text>{convert(size)} / {convert(MAX_SIZE)} </InputGroup.Text>
              <Form.Control.Feedback tooltip type="invalid">
                Files cannot use more than {convert(MAX_SIZE)} of space
              </Form.Control.Feedback>
            </InputGroup>
            <Form.Text className="text-muted">
              Please email <a href="mailto:info@iCustomStitch.com">info@iCustomStitch.com</a> directly
              if your files use more than 4MB.<br />
              Current files attached: {listFiles()}
            </Form.Text>
            
          </Form.Group>
          <ReCAPTCHA
            ref={e => (setRecaptcha(e))}
            sitekey={SITE_KEY}
            size="invisible"
          />
          
          <Button variant="primary" type="submit">
            {status}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;