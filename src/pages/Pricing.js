import React from 'react'
import { Stack, Container, Table, Row, Col, Image } from 'react-bootstrap'
import {
  CatSample,
  BabySample,
  TwoPeopleSample,
  FullBodySample,
} from '../assets';

function Pricing() {
  let table = [["12\"", "$99.98", "$89.98", "$74.99"],
  ["14\"", "$102.98", "$92.68", "$77.24"],
  ["16\"", "$108.98", "$98.08", "$81.74"],
  ["18\"", "$114.98", "$103.48", "$86.24"],
  ["20\"", "$123.98", "$111.58", "$92.99"],
  ["24\"", "$128.98", "$116.08", "$96.73"],
  ["26\"", "$139.98", "$125.98", "$104.98"],
  ["28\"", "$148.98", "$134.08", "$111.73"],
  ["32\"", "$163.98", "$147.58", "$122.98"],
  ["36\"", "$183.98", "$165.58", "$137.98"],
  ["40\"", "$209.98", "$188.98", "$157.48"],
  ["50\"", "$256.98", "$231.28", "$192.74"],
  ["60\"", "$269.98", "$242.98", "$202.49"]];
  
  return (
    <Container className="col-md-9 mx-auto">
      <Stack gap={2} className="col-md-9 mx-auto">
        <div className="fancy text-wrap mt-3">Affordable price for custom cross stitch kits</div>
        <div className="col-md-9 mb-3">
          iCustomStitch cross stitch kits will save you time and effort at an affordable price. In
          addition, we provide a price match guarantee for any custom cross stitch kits of the same
          quality.
        </div>
        <div className="col-md-9 mb-3">
          Prices for our custom cross stitch kits are listed by size in the table below. There is currently
          a site-wide 10% discount, and there is a 25% discount for an order of two kits or more. We have
          also included an example of a custom kit with instructions.
        </div>
        <div className='fancy'>Sample Sizing Choice</div>
        <Container>
          <Row className="mb-3">
            <Stack gap={3} direction='horizontal'>
              <Image 
                src={BabySample}
                width="30%"
              />
              <Image 
                src={CatSample}
                width="16%"
              />
              <div>
                size 12" - 18" converts close shoot pictures
              </div>
              <a href="https://www.freepik.com/free-photo/portrait-beautiful-expressive-laughing-baby-holds-head-up_1281884.htm#query=baby&position=8&from_view=keyword">
                TEMP Include somewhere else
              </a>
            </Stack>
          </Row>
          <Row mb-3>
            <Stack gap={3} direction='horizontal'>
              <Image 
                src={FullBodySample}
                width="12%"
              />
              <Image 
                src={TwoPeopleSample}
                width="27%"
              />
              <div>
                size 20" - 28" converts full body or close-up pics of two
              </div>
            </Stack>
          </Row>



        </Container>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Size &#40;inches&#41;</th>
              <th>Regular Price</th>
              <th>Promotion &#40;10% OFF&#41;</th>
              <th>2+ Kits &#40;25% OFF Each&#41;</th>
            </tr>
          </thead>
          <tbody>
            {table.map((chunk, idx) => (
              <tr>
                <td>{chunk[0]}</td>
                <td>{chunk[1]}</td>
                <td>{chunk[2]}</td>
                <td>{chunk[3]}</td>
              </tr>
            ))}
           
          </tbody>
        </Table>
        
      </Stack>
    </Container>
  )
}


export default Pricing