import React from 'react'
import { useNavigate } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PlaceCards = ({ children, data }) => {

    const navigate = useNavigate()

    return (
        <section className='text-center text-md-start'>
            {children}
            <Container>
                <Row
                    className='d-flex flex-column flex-md-row'
                >
                    {data.slice(0, 6).map((place, index) => (
                        <Col
                            className='py-1 col-md-4'
                            key={`${index}-${place.name}`}
                            title='Place Card'
                        >
                            <Card
                                className='text-start h-100'
                            >
                                <Carousel
                                    indicators={false}
                                    fade
                                    interval={null}
                                    prevIcon={<FontAwesomeIcon icon={'fa-circle-chevron-left'} className='carIcons text-white fs-2 ps-3' />}
                                    nextIcon={<FontAwesomeIcon icon={'fa-circle-chevron-right'} className='text-white fs-2 pe-3' />}

                                >
                                    {place.images.map((image, index) => (
                                        <Carousel.Item
                                            className='d-flex'
                                            key={`Image-${index}`}
                                        >
                                            <img
                                                src={image}
                                                alt='' className='img-fluid'
                                                onClick={() => navigate(`/${place.location}/${place.category}/${place.name}/${place.refID}`)}
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                                <Card.Body
                                    onClick={() => navigate(`/${place.location}/${place.category}/${place.name}/${place.refID}`)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <Card.Text>
                                        <div
                                            className='d-flex justify-content-between'
                                        >
                                            <p
                                                className='fst-italic'
                                            >
                                                {place.location}
                                            </p>
                                            <p
                                                className='badge bg-primary'
                                            >
                                                {place.reviewScore.toFixed(1)}
                                            </p>
                                        </div>
                                        <p
                                            className='mb-1 text-secondary'
                                        >
                                            {place.name}
                                        </p>
                                        <p>
                                            <span>
                                                {place.stars.map((star, index) => (

                                                    <FontAwesomeIcon
                                                        icon={star}
                                                        className='text-warning mb-1'
                                                        key={`Star-${index + 1}`}
                                                    />

                                                ))}
                                            </span>
                                        </p>

                                        <p
                                            className='mb-2 '
                                        >
                                            {place.text}
                                        </p>

                                        <p
                                            className='mb-0'
                                        >
                                            <span
                                                className='fw-bold'
                                            >
                                                From £{place.price} Per Night
                                            </span>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default PlaceCards
