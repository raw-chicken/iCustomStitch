import React from 'react'
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";
import DogConvert from '../assets/converted_dog.webp'

function CustomStitch() {
  return (
    <Container className="col-md-10 mx-auto">
      <div className="h2 text-wrap mt-3 col-md-9 mx-auto">Convert Your Photos to All-In-One Cross Stitch Kits</div>
      <Stack gap={3} className="col-md-9 mx-auto mt-3">
        <Stack direction="horizontal">
          <div>Create a Cross Stitch from a photo in 3 easy steps.</div>
          <Image
            className='ms-auto'
            src={DogConvert}
            fluid
            width={600}
          />
        </Stack>

      </Stack>
    </Container>
  )
}


export default CustomStitch