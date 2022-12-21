import React from 'react'
import { Stack, Container, Image, Row, Col } from 'react-bootstrap';

import {
  DogSample,
  DogSampleConverted,
  NeedleKit,
  SampleKit,
  WorldWideShipping,
  T,
  Threads,
  ChartSample,
  FlowerGirl
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
          <Row className="mb-3 mt-5">
            <Col>
              <Stack gap={2}>
                <div className='subheader'>iCustomStitch Kit Instructions</div>
                <div>
                  Stitching is easy with our precision cross stitch no-count stamped kits
                  <ol>
                    <li>Identify the DMC code and its corresponding thread number.</li>
                    <li>Organize the DMC threads by using provided thread organizers.</li>
                    <li>Cut the lengths of thread to 18" long and separate them into six single strands before you use them.</li>
                    <li>Use <b>3 strands</b> to stitch on iCustomStitch's 11-ct Precision Cross Stitch Aida.</li>
                    <li>Start from any color block and enjoy the finishing pattern block by block.</li>
                  </ol>
                </div>
              </Stack>
            </Col>
            <Col xs={4} className="d-flex align-items-center justify-content-center">
              <Stack gap={3}>
                <Image
                  src={Threads}
                  width="80%"
                />
                <Image
                  src={ChartSample}
                  width="80%"
                />
              </Stack>
            </Col>
          </Row>
          <Row className="mb-3 mt-5">
            <Col>
              <Stack gap={2}>
                <div className='subheader'>How to Wash After Finishing</div>
                <div>
                  Having spent some time completing your cross stitch project, it is
                  now the time to begin the process of preserving this piece of needlecraft.
                  Before you can frame your personalized cross stitched picture, it must,
                  of course, be spotlessly clean.
                  <ul>
                    <li>Soak your finished cross stitched work in lukewarm water for 30 minutes.</li>
                    <li>Change clean water several times until the final rinse water is clear.</li>
                    <li>Smooth out any creases by ironing your cross stitching product face down at a medium heat until completely dry and smooth.</li>
                  </ul>
                  NOW you have a beautiful piece of custom cross stitch artwork ready to frame and decorate your wall of any room. Congratulations!!!
                </div>
              </Stack>
            </Col>
            <Col xs={4} className="d-flex align-items-center justify-content-center">
              <Stack gap={3}>
                <Image
                  src={FlowerGirl}
                  width="80%"
                />
              </Stack>
            </Col>
          </Row>
        </Container>
      </Stack>
      
    </Container>
  )
}


export default CustomStitch