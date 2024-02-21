import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'



import { useNavigate } from 'react-router-dom'

const ImageGrid = ({ children, array3 }) => {

    const navigate = useNavigate()

    return (
        <section className='text-center text-md-start'>
            {children}
            <Container>
                <Row className='d-flex flex-column flex-md-row'>
                    {array3.map((location) => (
                        <Col className='col-md-4 my-1 '>
                            <div className='rounded-3 position-relative' style={{ background: `url(${location.image})center center no-repeat`, backgroundSize: 'Cover', height: '200px' }}>
                                <p class="position-absolute start-0 top-0 text-white fw-bolder ms-2 mt-2">{location.name}</p>
                                <span class="badge bg-primary position-absolute end-0 bottom-0 text-white fw-bolder me-2 mb-2">From £{location.price}</span>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default ImageGrid
