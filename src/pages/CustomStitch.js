import React from 'react'
import { Stack, Container, Image, Row, Col } from 'react-bootstrap';

import {
  DogSample,
  DogSampleConverted,
  NeedleKit,
  SampleKit,
  WorldWideShipping,
} from '../assets';

function CustomStitch() {
  return (
    <Container className="col-md-9 mx-auto mb-4">
      <Stack gap={3} className="col-md-11">
        <div className="header mt-3">
          Simply Convert Your Photo to an All-In-One Custom Cross Stitch Kit
        </div>
        <div className='h5 text-muted'>
          Cross Stitch From a Photo as Easy as 1-2-3
        </div>
        <Container>
          <Row className="mb-3">
            <Col xs={4} className="d-flex align-items-center justify-content-center">
              <Image
                src={DogSample}
                width="75%"
              />
            </Col>
            <Col>
              <Stack gap={2}>
                <div className='step'>Step 1: Email your photos</div>
                <div>
                  Email your digital photo you want to convert to Cross Stitch
                  to <a href="mailto:info@iCustomStitch.com">info@iCustomStitch.com</a>.
                  We will do a free preview for you and contact you promptly &#40;usually within 24 hours&#41;
                  for the size recommendations.
                </div>
              </Stack>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={4} className="d-flex align-items-center justify-content-center">
              <Image
                src={DogSampleConverted}
                width="75%"
              />
            </Col>
            <Col>
              <Stack gap={2}>
                <div className='step'>Step 2: Preview pattern and order</div>
                <div>
                  The converted preview picture is provided for you to ensure that you are
                  100% satisfied with the pattern of your custom cross stitch kit before
                  the full-size pattern is color-printed, packaged with all the supplies you need,
                  and shipped out, with <b>FREE</b> shipping world wide.
                </div>
              </Stack>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={4} className="d-flex align-items-center justify-content-center">
              <Image
                src={NeedleKit}
                width="75%"
              />
            </Col>
            <Col>
              <Stack gap={2}>
                <div className='step'>Step 3: Receive your all-in-one kit</div>
                <div>
                  Receive your iCustomStitch Cross Stitch Kit which includes:
                  <div className='mt-2'>
                    <ul className="no-bullets">
                      <li><b>Fabric:</b> prepared Aida with 100% precision washable color paint</li>
                      <li><b>Floss:</b> pre-sorted cotton threads with thread organizer</li>
                      <li><b>Chart:</b> cross stitch chart in full color and easy instructions</li>
                      <li><b>Needle:</b> 2 gold plated needles</li>
                    </ul>
                  </div>
                </div>
              </Stack>
            </Col>
          </Row>
          <Row>
            <Container className='d-flex align-items-center justify-content-center'>
            <Image 
              className='my-4'
              src={SampleKit}
              width="75%"
            />
            </Container>
            
          </Row>
          <Row className="my-3">
            <Col xs={4} className="d-flex align-items-center justify-content-center">
              <Image
                src={WorldWideShipping}
                width="60%"
              />
            </Col>
            <Col>
              <Stack gap={2}>
                <div className='step'>FREE Shipping World Wide</div>
                <div>
                  No shipping cost for most of the places around the world. Please allow
                  3-5 weeks to deliver your personalized All-In-One ready-to-stitch kit.
                  <ul>
                    <li>Free previews</li>
                    <li>Fast personalized services</li>
                  </ul>
                </div>
              </Stack>
            </Col>
          </Row>
        </Container>
      </Stack>
      
    </Container>
  )
}


export default CustomStitch