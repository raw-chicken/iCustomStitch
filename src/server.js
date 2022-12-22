const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
const formidable = require('express-formidable');

const keys = require("./keys.json");
 
const router = express.Router();
var app = express();
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(formidable());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: keys.email,
    pass: keys.password,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.fields.name;
  const email = req.fields.email;
  const subject = req.fields.subject;
  const message = req.fields.message;
  const files = JSON.parse(req.fields.files).map((file) => {
    return {"path": file}
  }) 

  const mail = {
    from: name,
    to: keys.email,
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Subject: ${subject}</p>
           <p>Message: ${message}</p>`,
    attachments: files
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});