import React from 'react'
import { Accordion, Container, Stack } from 'react-bootstrap';

function FAQ() {
  return (
    <Container className="col-md-9 mx-auto mb-4 min-vh-100">
      <Stack gap={3} className="col-md-11 mt-4">
        <div className='header'>Frequently Asked Questions</div>
        <div>
          If you have questions that are not answered here, please use our contact form or email us at <a href="mailto:info@icustomstitch.com">info@iCustomStitch.com</a>.
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header><b>How do I order?</b></Accordion.Header>
            <Accordion.Body>
              Please email your photo to <a href="mailto:info@icustomstitch.com">info@iCustomStitch.com</a> or contact us
              through our <a href="https://icustomstitch.com/contact">contact form</a> and we will evaluate and suggest a minimum size
              for you with a free preview of your custom cross stitch. Once you are satisfied and ready to order,
              we will send you an online PayPal invoice by email and you can pay using PayPal or Credit Card.
              Once we have received your payment, we will start producing your custom stamped cross stitch kit. We usually
              will have the preview for you to review within 24 - 48 hours after received your photo.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><b>How much is shipping?</b></Accordion.Header>
            <Accordion.Body>
              iCustomStitch provides FREE shipping worldwide. It usually takes 3-5 days to produce the custom stamped cross stitch kit will
              and then 15 - 20 days for shipping. Based on your location, the total time could be around 3 - 5 weeks. Once the item is shipped
              we will provide you with a tracking number on PayPal as soon as it is available. 
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header><b>What is your return policy?</b></Accordion.Header>
            <Accordion.Body>
              Unfortunately, because our products our custom made, we do not accept returns. However, we do guarantee that the outcome will
              be close to the preview provided. In the rare case that you are short of thread, we provide the matching DMC numbers for the threads
              such that you can easily find them in your local store.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header><b>What is the pricing?</b></Accordion.Header>
            <Accordion.Body>
              Please see our <a href="https://icustomstitch.com/pricing">pricing</a> page for details on pricing. iCustomStitch is happy to 
              offer price matches for similar services that produce custom stamped cross stitch kits at the same quality that we do. 
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Stack>
    </Container>
  )
}

export default FAQ