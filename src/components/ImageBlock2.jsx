import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useNavigate } from 'react-router-dom'

const ImageBlock2 = ({ children, array2, array3, popularArray }) => {

    const navigate = useNavigate()

    return (
        <section className='text-center text-md-start'>
            {children}

            {/* <Container >

                <Row className='my-0 d-flex flex-column flex-md-row d-md-flex d-none'>

                    {array3.map((item) => (
                        <Col className='mb-2 col-md-4' onClick={() => navigate(`/locations/${item.location}`)} style={{ cursor: 'pointer' }}>
                            <figure className='position-relative d-inline-block'>
                                <img
                                    src={item.image}
                                    alt=''
                                    className='rounded-5 d-block img-fluid'
                                />
                                <figcaption className='position-absolute text-white top-0 end-0 mt-3 me-3'>
                                    <p className='fs-4 my-0 fw-bold text-end'>{item.location}</p>
                                    <p className='fs-6 text-end'>{item.name}</p>
                                </figcaption>
                            </figure>
                        </Col>
                    ))}
                </Row>

                <Row className='d-flex flex-column flex-md-row '>

                    {array2.map((item) => (
                        <Col className='mb-2 col-md-6' onClick={() => navigate(`/locations/${item.location}`)} style={{ cursor: 'pointer' }}>
                            <figure className='position-relative d-inline-block'>
                                <img
                                    src={item.image}
                                    alt=''
                                    className='rounded-5 d-block img-fluid'
                                />
                                <figcaption className='position-absolute text-white top-0 end-0 mt-3 me-3'>
                                    <p className='fs-2 my-0 fw-bold text-end'>{item.location}</p>
                                    <p className='fs-4 text-end'>{item.name}</p>
                                </figcaption>
                            </figure>
                        </Col>
                    ))}
                </Row>


            </Container> */}

            <Container >

                <Row className='my-0 d-flex flex-column flex-md-row d-md-flex d-none'>

                    {popularArray.slice(0, 3).map((item) => (
                        <Col className='mb-2 col-md-4' onClick={() => navigate(`/${item.location}/${item.category}/${item.name}/${item.refID}`)} style={{ cursor: 'pointer' }}>
                            <figure className='position-relative d-inline-block'>
                                <img
                                    src={item.image}
                                    alt=''
                                    className='rounded-5 d-block img-fluid'
                                />
                                <figcaption className='position-absolute text-white top-0 end-0 mt-3 me-3'>
                                    <p className='fs-4 my-0 fw-bold text-end'>{item.name}</p>
                                    <p className='fs-6 text-end'>{item.location}</p>
                                </figcaption>
                            </figure>
                        </Col>
                    ))}
                </Row>

                <Row className='d-flex flex-column flex-md-row '>

                    {popularArray.slice(3).map((item) => (
                        <Col className='mb-2 col-md-6' onClick={() => navigate(`/${item.location}/${item.category}/${item.name}/${item.refID}`)} style={{ cursor: 'pointer' }}>
                            <figure className='position-relative d-inline-block'>
                                <img
                                    src={item.image}
                                    alt=''
                                    className='rounded-5 d-block img-fluid'
                                />
                                <figcaption className='position-absolute text-white top-0 end-0 mt-3 me-3'
                                >
                                    <p className='fs-2 my-0 fw-bold text-end'>{item.name}</p>
                                    <p className='fs-4 text-end'>{item.location}</p>
                                </figcaption>
                            </figure>
                        </Col>
                    ))}
                </Row>


            </Container>

        </section>
    )
}

export default ImageBlock2
