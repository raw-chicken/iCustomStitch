import React from 'react';
import  ContactForm from '../components/ContactForm';
import { Container } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="col-md-9 mx-auto my-5">
      <ContactForm />
    </Container>
  )
}

export default Contact