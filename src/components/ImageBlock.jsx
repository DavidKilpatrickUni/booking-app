import React from 'react'
import { useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ImageBlock = ({ children, popularArray }) => {

    //console.log(popularArray)

    const navigate = useNavigate()

    return (

        <section
            className='text-center text-md-start'
        >
            {children}

            <Container>

                <Row
                    className='d-flex flex-column flex-md-row '
                >

                    {popularArray.slice(0, 2).map((location) => (
                        <Col
                            className='mb-2 col-md-6'
                            onClick={() => navigate(`/${location.location}/${location.category}/${location.name}/${location.refID}`)}
                            style={{ cursor: 'pointer' }}
                            id={location.name}
                            key={location.name}
                        >
                            <figure
                                className='position-relative d-inline-block'>
                                <img
                                    src={location.image}
                                    alt={`Landscape of ${location.name}`}
                                    className='rounded-5 d-block img-fluid'
                                />
                                <figcaption
                                    className='position-absolute fw-bold text-white fs-2 top-0 mt-3 ms-3'
                                >
                                    {location.name}
                                </figcaption>
                            </figure>
                        </Col>
                    ))}
                </Row>
                <Row
                    className='mb-2 d-flex flex-column flex-md-row d-md-flex d-none'
                >

                    {popularArray.slice(2, 5).map((location) => (
                        <Col
                            className='mb-2 col-md-4'
                            onClick={() => navigate(`/${location.location}/${location.category}/${location.name}/${location.refID}`)}
                            style={{ cursor: 'pointer' }}
                            id={location.name}
                            key={location.name}
                        >
                            <figure
                                className='position-relative d-inline-block'>
                                <img
                                    src={location.image}
                                    alt={`Landscape of ${location.name}`}
                                    className='rounded-5 d-block img-fluid'
                                />
                                <figcaption className='position-absolute fw-bold text-white fs-4 top-0 mt-3 ms-3'>
                                    {location.name}
                                </figcaption>
                            </figure>
                        </Col>
                    ))}
                </Row>

            </Container>

        </section>
    )
}

export default ImageBlock
