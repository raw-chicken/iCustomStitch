import React from 'react'
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";
import DogConvert from '../assets/converted_dog.webp'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home() {
  return (
    <Container className="col-md-9 mx-auto">
      <Stack gap={3} className="mx-auto mt-4">
        <Container>
          <Row className='align-items-center'>
            <Col>
              <test>iCustomStitch - Create Custom Cross Stitch Kits</test>
              <div className='h5 text-muted mt-3'>
                Preserve happy memories by ordering an all-inclusive custom
                cross stitch kit, suitable for cross-stitchers with any 
                level of experience.
              </div>
            </Col>
            <Col xs={1}>
            </Col>
            <Col>
              <Image
                src={DogConvert}
                fluid
              />
            </Col>

          </Row>
            

        </Container>


        <Stack direction="horizontal">
          
          <div className='ms-auto mx-10'></div>
          
        </Stack>
        
        <div>aaa</div>
        <div>aaa</div>
        <div>aaa</div>
        <div>aaa</div>

      </Stack>
    </Container>
  )
}

export default Home