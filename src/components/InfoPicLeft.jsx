import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const InfoPicLeft = ({details}) => {
  return (
    <section>
        <Container >
            <Row className='align-items-center d-flex flex-column flex-md-row'>
                <Col className='col-md-6 mb-3 mb-md-0 '>
                    <img src={details.pic} alt='' className='img-fluid rounded-3'/>
                </Col>
                <Col className='col-md-6 text-center'>
                    <p className='m-0'>{details.info}</p>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default InfoPicLeft
