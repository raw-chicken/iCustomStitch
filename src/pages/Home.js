import React from 'react'
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import Image from "react-bootstrap/Image";
import DogConvert from '../assets/converted_dog.webp'
import CatConvert from '../assets/converted_cat.webp'
import Sample from '../assets/sample_kit.webp'

function Home() {
  return (
    <Container className="col-md-9 mx-auto">
      <Stack gap={5} className="mx-auto mt-4">
        <Container className='min-vh-100 '>
          <Row className='align-items-center my-5'>
            <Col>
              <fancy>iCustomStitch - Create Custom Cross Stitch Kits</fancy>
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
                src={DogConvert}
                fluid
              />
            </Col>
          </Row>
        </Container>
        <Container className='mb-6' id="learn-more">
          <fancy>What do we do?</fancy>
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
                src={CatConvert}
                fluid
              />
            </Col>
            <Col>
              
            </Col>
          </Row>
        </Container>
        <Container>
          <fancy>What is included?</fancy>
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
                <ul class="no-bullets">
                  <li><b>Fabric:</b> prepared Aida with 100% precision washable color paint</li>
                  <li><b>Floss:</b> pre-sorted cotton threads with thread organizer</li>
                  <li><b>Chart:</b> cross stitch chart in full color and easy instructions</li>
                  <li><b>Needle:</b> 2 gold plated needles</li>
                </ul>
              </div>
            </Col>
            <Col>
              <Image 
                src={Sample}
                fluid
              />
            </Col>

          </Row>
        </Container>
      </Stack>
    </Container>
  )
}

export default Home