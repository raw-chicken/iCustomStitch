import React, { useState } from "react";
import { Form, Button, InputGroup } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";
import { readFiles, convert } from "./utils/form_utils";
import { Formik } from "formik";
import * as yup from 'yup';

const maxSize = 4 * 1024 * 1024;

const RATE = 0.75;

const SITE_KEY = "6LfBvp0jAAAAANpn2tum7pckshjYkzm53mf5f0om";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required("An email is required"),
  subject: yup.string().required(),
  message: yup.string().required(),
  files: yup.mixed(),
  size: yup.number().test("fileSize", "The files have exceeded the size limit", (f) => {
    return f < maxSize;
  }),
  maxSize: yup.number(),
});

const ContactForm = () => {

  const [status, setStatus] = useState("Submit");

  const [recaptcha, setRecaptcha] = useState(null);

  // const [fileNames, setFileNames] = useState([]);

  const captcha = async () => {
    try {
      await recaptcha.execute(SITE_KEY, {action: 'submit'}).then(token => {
        let formData = new FormData();
        formData.append("g-recaptcha-response", token);
        fetch('http://localhost:5000/verify', {
          method: 'POST',
          body: formData
        }).then(res => res.json()).then(res => {
          if (res.score < RATE)
            throw Error('Captcha failed. Try again later, or email us directly.')
          return 1;
        });
      });
    } catch (e) {
      console.log(e)
      setStatus("Submit");
      alert("Something went wrong with captcha");
      return -1;
    }
    
  }

  const sendEmail = async (e) => {
    try {
      if (e.files !== null)
        var data = await readFiles(e.files);
      else 
        data = []
      
      let formData = new FormData();
      formData.append("name", e.name);
      formData.append("email", e.email);
      formData.append("subject", e.subject + " - " + e.name);
      formData.append("message", e.message);
      formData.append("files", JSON.stringify(data));

      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        body: formData,
      });
      setStatus("Submit");
      return await response.json();
    } catch (e) {
      console.log(e);
      setStatus("Submit");
      alert("Something went wrong and the form was not sent, please email info@iCustomStitch.com directly");
    }
  }

  const handleSubmit = async (e) => {
    setStatus("Sending...");
    
    captcha().then((res) => {
      if (res === -1) return -1;
      var a = sendEmail(e);
      return a;
    }).then((res) => {
      console.log(res);
      alert(res.status);
    });
  };

  return (
    <Formik
      validationSchema={schema}
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={{
        name: '',
        email: '',
        subject: 'Personalized Cross Stitch Kit Inquiry',
        message: '',
        files: [],
        maxSize: 4 * 1024 * 1024,
        size: 0,
        recaptcha: '',
      }}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
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
              value={values.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="e.g. info@iCustomStitch.com"
              name="email"
              value={values.email}
              onChange={handleChange}
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
              value={values.subject}
              onChange={handleChange}
              isInvalid={!!errors.subject}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Message</Form.Label>
            <Form.Control 
              required
              as="textarea"
              name="message"
              value={values.message}
              onChange={handleChange}
              isInvalid={!!errors.message}
            />
          </Form.Group>

          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Attachments</Form.Label>
            <InputGroup>
              <Form.Control
                type="file"
                multiple
                files={values.files}
                onChange={e => {
                  const files = Array.from(e.target.files);
                  let fileNames = []
                  let size = 0;
                  Array.from(files).forEach((f) => {
                    size += f.size;
                    fileNames.push(f.name);
                  });
                  setFieldValue("files", files);
                  setFieldTouched("files", false, false);
                  setFieldValue("size", size);
                  setFieldTouched("size", true, false);
                }}
                isInvalid={!!errors.files || !!errors.size}
              />
              <InputGroup.Text>{convert(values.size)} / {convert(values.maxSize)} </InputGroup.Text>
              <Form.Control.Feedback tooltip type="invalid">
                Files cannot use more than {convert(maxSize)} of space
              </Form.Control.Feedback>
            </InputGroup>
            <Form.Text className="text-muted">
              Please email <a href="mailto:info@iCustomStitch.com">info@iCustomStitch.com</a> directly
              if your files use more than 4MB.
              Current files attached: {}
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