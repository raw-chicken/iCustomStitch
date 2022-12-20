import React from 'react'
import { Carousel, Button, Row, Col, Container, Stack } from 'react-bootstrap';

import Image from "react-bootstrap/Image";

import {
  ConvertedCat,
  ConvertedDog,
  SampleKit,
  Testimonial1,
  Testimonial2,
  Testimonial3,
  Testimonial4,
  Testimonial5,
  Testimonial6,
} from '../assets';

function Home() {
  var testimonials = [Testimonial6, Testimonial1, Testimonial2, Testimonial3, Testimonial4, Testimonial5];

  return (
    <Container className="col-md-9 mx-auto mb-6">
      <Stack gap={5} className="mx-auto mt-4">
        <Container className='min-vh-100 '>
          <Row className='align-items-center my-5'>
            <Col>
              <div className='fancy'>iCustomStitch - Create Custom Cross Stitch Kits</div>
              <div className='h5 text-muted mt-3'>
                Preserve happy memories by ordering an all-inclusive custom
                cross stitch kit, suitable for cross-stitchers with any 
                level of experience.
              </div>
              <Button variant="outline-primary" className="mx-2 mt-3" href="#learn-more">Learn More</Button>
            </Col>
            <Col xs={1} />
            <Col>
              <Image
                src={ConvertedDog}
                fluid
              />
            </Col>
          </Row>
        </Container>
        <Container className='mb-6' id="learn-more">
        <div className='fancy'>What do we do?</div>
          <Row>
            <Col xs={9}>
              <div className='mt-2 mb-3'>
                iCustomStitch is a custom cross stitch kit maker to
                help you preserve happy memories of your loved ones at a creative way. Convert
                any photograph of landscapes, loved ones, or pets to a custom cross stitch kit
                for and easy and enjoyable cross stitching experience.
                iCustomStitch applies a sophisticated algorithm to convert your photo to Cross
                Stitch patterns, <i>even</i> when the picture resolutions are low.
              </div>
              <div className='mb-6'>
                Try our <b>FREE</b> photo conversion preview by simply emailing us your photo&#40;s&#41; and get started
                immediately with the following steps:
                <div className='mt-2'>
                  <ol className="no-margin">
                    <li>Check our price charts with size specifications <a href="/pricing">here</a>.</li>
                    <li>Email the photo&#40;s&#41; you want to convert to <b><a href="mailto:info@iCustomStitch.com">info@iCustomStitch.com</a></b> for a FREE preview</li>
                    <li>Preview your converted cross stitch pattern until you are satisfied and pick the size to order</li>
                    <li>Receive iCustomStitch cross stitch kit with <b> <i>free world-wide shipping</i></b> and begin stitching straight away</li>
                  </ol>
                </div>
              </div>
              <Image
                src={ConvertedCat}
                fluid
              />
            </Col>              
            <Col />
          </Row>
        </Container>
        <Container>
          <div className='fancy'>What is included?</div>
          <Row>
            <Col xs={6}>
              <div className='mt-2 mb-2'>iCustomStitch is a custom cross stitch kit maker to
                help you preserve happy memories of your loved ones at a creative way. Convert
                any photograph of landscapes, loved ones, or pets to a custom cross stitch kit
                for and easy and enjoyable cross stitching experience.
                iCustomStitch applies a sophisticated algorithm to convert your photo to Cross
                Stitch patterns, <i>even</i> when the picture resolutions are low.
              </div>
              <div>
                iCustomStitch cross stitch kits includes everything you need to make your personalized
                cross stitch design project into a timeless work of art:
              </div>
              <div className='mt-3'>
                <ul className="no-bullets">
                  <li><b>Fabric:</b> prepared Aida with 100% precision washable color paint</li>
                  <li><b>Floss:</b> pre-sorted cotton threads with thread organizer</li>
                  <li><b>Chart:</b> cross stitch chart in full color and easy instructions</li>
                  <li><b>Needle:</b> 2 gold plated needles</li>
                </ul>
              </div>
            </Col>
            <Col>
              <Image 
                src={SampleKit}
                fluid
              />
            </Col>

          </Row>
        </Container>
        <Container className="mt-6" >
          <div className='fancy'>Testimonials</div>
          <Carousel className='mb-6 carousel-height' variant="dark">
            {testimonials.map((chunk, idx) => (
              <Carousel.Item key={idx} interval={2500}>
                <Container>
                  <div className='d-flex align-items-center justify-content-center'>
                    <Image 
                      src={chunk}
                      width="50%"
                    />
                  </div>
                </Container>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </Stack>
    </Container>
  )
}

export default Home