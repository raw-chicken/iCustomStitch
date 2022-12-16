import React from 'react'
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";
import DogConvert from '../assets/converted_dog.webp'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

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
              <Button variant="outline-primary" className="mx-2 mt-3">Learn More</Button>
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
        <Container>
          <fancy>What do we do?</fancy>
          <Row>
            <Col xs={8}>
              <div className='mt-2 mb-6'>iCustomStitch is a custom cross stitch kit maker to
                help you preserve happy memories of your loved ones at a creative way. Convert
                any photograph of landscapes, loved ones, or pets to a custom cross stitch kit
                for and easy and enjoyable cross stitching experience.
                iCustomStitch applies a sophisticated algorithm to convert your photo to Cross
                Stitch patterns, <i>even</i> when the picture resolutions are low.
              </div>
            </Col>
            <Col />
          </Row>
        </Container>
        <Container>
          <fancy>What is included?</fancy>
          <Row>
            <Col xs={8}>
              <div className='mt-2 mb-6'>iCustomStitch is a custom cross stitch kit maker to
                help you preserve happy memories of your loved ones at a creative way. Convert
                any photograph of landscapes, loved ones, or pets to a custom cross stitch kit
                for and easy and enjoyable cross stitching experience.
                iCustomStitch applies a sophisticated algorithm to convert your photo to Cross
                Stitch patterns, <i>even</i> when the picture resolutions are low.
              </div>
            </Col>
            <Col />
          </Row>
        </Container>
      </Stack>
    </Container>
  )
}

export default Home