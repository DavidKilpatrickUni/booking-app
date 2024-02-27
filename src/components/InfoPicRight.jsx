import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const InfoPicRight = ({details}) => {
  return (
    <section>
        <Container >
            <Row className='align-items-center d-flex flex-column flex-md-row'>
                <Col className='col-md-6 text-center order-2 order-md-1'>
                    <p className='m-0'>{details.info}</p>
                </Col>
                <Col className='col-md-6 mb-3 mb-md-0 order-1 order-md-2'>
                    <img src={details.pic} alt='' className='img-fluid rounded-3'/>
                </Col>
       
            </Row>
        </Container>
    </section>
  )
}

export default InfoPicRight