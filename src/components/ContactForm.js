import React, { useState } from "react";
import { Form, Button, InputGroup } from 'react-bootstrap';
import { Formik } from "formik";
import * as yup from 'yup';


const maxSize = 4 * 1024 * 1024;

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
    const promises = files.map(async file => {
      try {
        const routes = await readFileAsync(file);
        data.push(routes);
      } catch (error) {
        console.log(error);
      }
    });
    Promise.all(promises)
      .then(() => {
        resolve(data)
      })
  })
}

const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
function convert(bytes) {
  let unit = 0;
  while (bytes > 512) {
    bytes /= 1024
    unit++;
  }
  return bytes.toFixed(1) + " " + sizes[unit];
}

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");

  const [fileNames, setFileNames] = useState([]);

  const handleSubmit = async (e) => {
    setStatus("Sending...");

    var data = await readFiles(e.files);

    let formData = new FormData();
    formData.append("name", e.name);
    formData.append("email", e.email);
    formData.append("subject", e.subject);
    formData.append("message", e.message);
    formData.append("files", JSON.stringify(data));

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      body: formData,
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{
        name: '',
        email: '',
        subject: 'Personalized Cross Stitch Kit Inquiry',
        message: '',
        files: null,
        maxSize: 4 * 1024 * 1024,
        size: 0,
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
              Please email <a href="mailto:info@iCustomStitch.com">info@iCustomStitch.com</a> 
              directly if your files use more than 4MB.
              Current files attached: {}
            </Form.Text>
            
          </Form.Group>

          <Button variant="primary" type="submit">
            {status}
          </Button>
        </Form>
        
      )}
    </Formik>
  );
};

export default ContactForm;