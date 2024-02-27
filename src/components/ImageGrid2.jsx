import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'



import { useNavigate } from 'react-router-dom'

const ImageGrid2 = ({ children, array3 }) => {

    const navigate = useNavigate()

    return (
        <section className='text-center text-md-start'>
            {children}
            <Container>
                <Row className='d-flex flex-column flex-md-row'>
                    {array3.map((location) => (
                        <Col className='col-md-6 my-1 '>
                            <div className='rounded-3 position-relative' style={{ background: `url(${location.image})center center no-repeat`, backgroundSize: 'Cover', height: '200px' }}>
                                <p class="position-absolute top-50 text-white fw-bolder ms-2 mt-5">{location.name}</p>
                                <small class=" position-absolute bottom-0 start-0 text-white ms-2 mb-2">{location.attraction}</small>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default ImageGrid2