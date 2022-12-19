import React from 'react'

import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <Container className='col-md-9 mx-auto mb-4'>
      <div className='h6'>&copy; {new Date().getFullYear()} by iCustomStitch NeedleCrafts.</div>
    </Container>
  )
}

export default Footer