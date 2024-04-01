import React from 'react'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const LongCard = ({ data }) => {
    return (
        <>
            <Container>
                <Row
                    className='d-flex flex-column flex-md-row'
                >
                    {data.map((list, index) => (
                        <Col
                            className='col-md-12 my-1 w-100'
                            key={`${index} - ${list.name}`}
                            title='Search Info Card'
                        >
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col
                                            className='col-5 col-md-5 rounded-4 myImg position-relative'
                                            style={{
                                                backgroundSize: 'cover',
                                                backgroundImage: `url(${list.image})`,
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no'
                                            }}
                                        >
                                            {list.ourPick &&
                                                <p
                                                    className='position-absolute top-0 end-0 fw-bold'
                                                >
                                                    <FontAwesomeIcon
                                                        icon='fa-certificate' className='text-warning mt-2 me-2'
                                                    />
                                                </p>
                                            }
                                            {<p
                                                className='position-absolute bottom-0 end-0 fw-bold badge bg-primary me-2 d-block d-md-none '
                                            >
                                                {list.reviewScore.toFixed(1)}
                                            </p>}
                                        </Col>
                                        <Col
                                            className='col-7 col-md-7'
                                        >
                                            <Row>
                                                <Col
                                                    className='col-12 col-md-9'
                                                >
                                                    <p
                                                        className='mb-0'
                                                    >
                                                        <Link
                                                            to={`/${list.location}/${list.category}/${list.name}/${list.refID}`}
                                                        >
                                                            {list.name}
                                                        </Link>
                                                    </p>
                                                    <small
                                                        className='d-block mb-3 mb-lg-0'
                                                    >
                                                        {list.location}
                                                    </small>
                                                    <small
                                                        className='d-none d-lg-block mb-3'
                                                    >
                                                        {list.address}
                                                    </small>
                                                </Col>
                                                <Col
                                                    className='d-none d-md-block col-3 ps-0 text-end'
                                                >
                                                    <p
                                                        className='badge bg-primary fs-6 mb-0'
                                                    >
                                                        {list.reviewScore.toFixed(1)}
                                                    </p>
                                                    <small
                                                        className='mt-0  d-none fw-bold d-md-block'
                                                    >
                                                        {list.reviewText}
                                                    </small>
                                                </Col>
                                            </Row>
                                            <Row >
                                                <Col
                                                    className='col-8'>
                                                    {list.stars.map((star, index) => (
                                                        <FontAwesomeIcon
                                                            icon={star}
                                                            className='text-warning mt-1'
                                                            key={`Star ${index}`}
                                                        />
                                                    ))}
                                                    <p>
                                                        {list.type}
                                                    </p>
                                                </Col>
                                                <Col
                                                    className='col-4 text-end'
                                                >
                                                    <small
                                                        className='py-0 my-0 fst-italic text-secondary'
                                                    >
                                                        From
                                                    </small>
                                                    <p
                                                        className='fw-bold py-0 my-0'
                                                    >
                                                        £{list.price}
                                                    </p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col
                                                    className='col-12'
                                                >
                                                    <p
                                                        className='text-overflow-clamp'
                                                    >
                                                        {list.text}
                                                    </p>
                                                </Col>
                                            </Row>
                                            <Row
                                                className='d-none d-lg-block'
                                            >
                                                <Col>
                                                    <p>
                                                        <FontAwesomeIcon
                                                            icon='fa-eye' className='text-secondary me-1'
                                                        />
                                                        Visited: {list.visited}
                                                        <FontAwesomeIcon
                                                            icon='fa-pen' className='text-secondary ms-4 me-1'
                                                        />
                                                        Reviews: {list.reviewCount}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row >
            </Container >
        </>
    )
}

export default LongCard
