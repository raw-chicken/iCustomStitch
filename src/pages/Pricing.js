import React from 'react'
import { Stack, Container, Table, Image } from 'react-bootstrap'
import {
  CatSample,
  BabySample,
  TwoPeopleSample,
  FullBodySample,
  WeddingSample1,
  WeddingSample2,
  SampleKit
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
    <Container className="col-md-9 mx-auto mb-4">
      <Stack gap={5} className="col-md-11">
        <div>
          <Stack gap={3}>
            <div className="header text-wrap mt-3">Affordable Prices for All Inclusive Custom Cross Stitch Kits</div>
            <div>
              iCustomStitch cross stitch kits will save you time and effort at an affordable price. In
              addition, we provide a price match guarantee for any custom cross stitch kits of the same
              quality.
            </div>
            <div>
              Prices for our custom cross stitch kits are listed by size in the table below. There is currently
              a site-wide 10% discount, and there is a 25% discount for an order of two kits or more. See below
              an example of an all inclusive custom kit with instructions.
            </div>
            <Image 
              src={SampleKit}
              fluid
            />
          </Stack>
        </div>
        <div>
          <div className='header'>Price Chart</div>
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
        </div>
        <div>
        <div className='header'>Choosing The Right Size</div>
          <div className='mb-3'>
            The examples presented below gives an outline of what can be converted, however, to ensure
            that you are satisfied, reach out to us so that we can convert your photo and provide you a
            sample chart to see if it is to your satisfaction. With our printed and gridded fabric, you
            will no longer need to look at a chart when stitching, however, we will still provide a chart
            if requested.
          </div>
          <Stack gap={3}>
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
              {/* <a href="https://www.freepik.com/free-photo/portrait-beautiful-expressive-laughing-baby-holds-head-up_1281884.htm#query=baby&position=8&from_view=keyword">
                TEMP Include somewhere else
              </a> */}
            </Stack>
            <Stack gap={3} direction='horizontal'>
              <Image 
                src={FullBodySample}
                width="14%"
              />
              <Image 
                src={TwoPeopleSample}
                width="32%"
              />
              <div>
                size 20" - 28" converts full body or close-up pics of two
              </div>
            </Stack>
            <Stack gap={3} direction='horizontal'>
              <Image 
                src={WeddingSample2}
                width="32%"
              />
              <Image 
                src={WeddingSample1}
                width="14%"
              />
              <div>
                size 32"+ can handle most pictures
              </div>
            </Stack>
          </Stack>
        </div>
      </Stack>
    </Container>
  )
}


export default Pricing