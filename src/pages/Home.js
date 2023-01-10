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
                title="Dog Converted to Cross Stitch Pattern"
                alt="converted dog cross stitch pattern"
                fluid
              />
            </Col>
          </Row>
        </Container>
        <Container id="learn-more">
          <div className='subheader'>What do we do?</div>
          <Row>
            <Col xs={9}>
              <div className='mb-3'>
                iCustomStitch makes it easy to create cross stitch custom patterns from any image that you want to cross stitch. We use
                a proprietary algorithm to convert your image to a high quality pattern, produce a stamped kit, and provide you with all
                of the needed tools to jump right into cross stitching, making it perfect for anyone from beginners to hobbyists. With the
                simplicity of iCustomStitch, you can easily create a beautiful pattern to help preserve happy memories of your loved ones 
                or anything you so desire.
                {/* iCustomStitch is a custom cross stitch kit maker to
                help you preserve happy memories of your loved ones at a creative way. Convert
                any photograph of landscapes, loved ones, or pets to a custom cross stitch kit
                for and easy and enjoyable cross stitching experience.
                iCustomStitch applies a sophisticated algorithm to convert your photo to Cross
                Stitch patterns, <i>even</i> when the picture resolutions are low. */}
              </div>
              <div className='mb-6'>
                With our algorithm, we can convert any images, even images with low resolution!Try our <b>FREE</b> photo
                conversion preview by simply emailing us your photo&#40;s&#41; and get started
                immediately with the following steps:
                <div className='mt-2'>
                  <ol className="no-margin">
                    <li>Check our price charts with size specifications <a href="https://icustomstitch.com/pricing">here</a>.</li>
                    <li>Email the photo&#40;s&#41; you want to convert to <b><a href="mailto:info@iCustomStitch.com">info@iCustomStitch.com</a></b> for a FREE preview</li>
                    <li>Preview your converted cross stitch pattern until you are satisfied and pick the size to order</li>
                    <li>Receive iCustomStitch cross stitch kit with <b><i>free world-wide shipping</i></b> and begin stitching straight away</li>
                  </ol>
                </div>
              </div>
              <Image
                src={ConvertedCat}
                title="Cat Converted to Cross Stitch Pattern"
                alt="converted cat cross stitch pattern"
                fluid
              />
            </Col>              
            <Col />
          </Row>
        </Container>
        <Container>
          <div className='subheader'>What is included?</div>
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
                title="Sample Stamped Cross Stitch Kit"
                alt="custom printed cross stitch kit"
                fluid
              />
            </Col>

          </Row>
        </Container>
        <Container className="mt-6" >
          <div className='subheader'>Testimonials</div>
          <Carousel className='mb-6 carousel-height' variant="dark">
            {testimonials.map((chunk, idx) => (
              <Carousel.Item key={idx} interval={2500}>
                <Container>
                  <div className='d-flex align-items-center justify-content-center'>
                    <Image 
                      src={chunk}
                      title={"Customer Testimonial " + idx}
                      alt={"iCustomStitch customer testimonial " + idx}
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