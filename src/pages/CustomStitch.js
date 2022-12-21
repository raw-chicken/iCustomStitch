import React from 'react'
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";

function CustomStitch() {
  return (
    <Container className="col-md-9 mx-auto mb-4">
      <Stack gap={5} className="col-md-11">
        <Stack gap={3}>
          <div className="header mt-3">
            Simply Convert Your Photo to an All-In-One Custom Cross Stitch Kit
          </div>
          <div>
            <div className='step mb-2'>
              Step 1: Email your photos
            </div>
            <div>
              Email your digital photo you want to convert to Cross Stitch
              to <a href="mailto:info@iCustomStitch.com">info@iCustomStitch.com</a>.
              We will do a free preview for you and contact you promptly &#40;usually within 24 hours&#41;
              for the size recommendations.
            </div>
          </div>
          <div>
            <div className='step mb-2'>
              Step 2: Preview pattern and order
            </div>
            <div>
              The converted preview picture is provided for you to ensure that you are
              100% satisfied with the pattern of your custom cross stitch kit before
              the full-size pattern is color-printed, packaged with all the supplies you need,
              and shipped out, with <b>FREE</b> shipping world wide.
            </div>
          </div>
          <div>
            <div className='step mb-2'>
              Step 3: Receive your all-in-one kit
            </div>
            <div>
              Receive your iCustomStitch Cross Stitch Kit which includes:
            </div>
            <div className='mt-3'>
              <ul className="no-bullets">
                <li><b>Fabric:</b> prepared Aida with 100% precision washable color paint</li>
                <li><b>Floss:</b> pre-sorted cotton threads with thread organizer</li>
                <li><b>Chart:</b> cross stitch chart in full color and easy instructions</li>
                <li><b>Needle:</b> 2 gold plated needles</li>
              </ul>
            </div>
          </div>
          
          
        </Stack>
       </Stack>
    </Container>
  )
}


export default CustomStitch