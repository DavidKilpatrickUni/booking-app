import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom'

import ReviewCardFull from './ReviewCardFull'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, fas } from '@fortawesome/free-solid-svg-icons'
import { faFaceSmile, faFaceFrown } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import ReactCountryFlag from "react-country-flag";

const ReviewCard = ({ review }) => {

    console.log(review)

    const [show, setShow] = useState(false);
    const [slide, setSlide] = useState(null);

    const handleClose = () => {
        setSlide(null)
        setShow(false)
    };

    const handleShow = (num) => {
        setSlide(num)
        setShow(true)
    };

    return (
        <>

            <Card >
                <Card.Body>
                    <Row className='h-100'>
                        <Col className='col-3 align-self-center mx-0 px-2'>
                            <img src={review.profilePic} alt='' className='img-fluid rounded-circle ' />

                        </Col>
                        <Col className='col-6'>
                            <h6 className='fw-bold m-0 ms-1'>{review.reviewer}</h6>

                            <p className='m-0'>
                                <ReactCountryFlag
                                    className=''
                                    title={review.country}
                                    countryCode={review.countryCode}
                                    svg
                                    style={{
                                        width: "2em",
                                        height: "1em",
                                    }}
                                />
                                {review.country}
                            </p>
                        </Col>
                        <Col className='col-3 text-end align-self-center'>
                            <span className='fs-6 badge bg-primary'>{review.score}</span>

                        </Col>
                    </Row>

                    <Row>
                        <Col className='col-12 mt-2 '>
                            <p><q className='fst-italic'>{review.text}</q></p>
                            <Link onClick={handleShow}>Read More</Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>


            <Modal show={show} onHide={handleClose} size=''>

                <ReviewCardFull review={review} />

                {/* 
                <Container>
                    <Row className='py-2 border-bottom '>
                        <Col className='col-md-3 '>
                            <img src={review.profilePic} alt='' className='img-fluid rounded-circle' />
                        </Col>
                        <Col className='col-md-5 align-self-center ps-0 '>
                            <h5 className='ms-1'>{review.reviewer}</h5>
                            <p className='mb-0'>

                                <ReactCountryFlag
                                    title={review.country}
                                    countryCode={review.countryCode}
                                    svg
                                    style={{
                                        width: "2em",
                                        height: "1em",
                                    }}
                                />


                                {review.country}
                            </p>

                        </Col>
                        <Col className='col-md-4 align-self-center text-end fs-3'>

                            <span className='badge bg-primary'>{review.score}</span>
                        </Col>

                    </Row>


                    <Row className='mt-3'>
                        <Col className='col-3 text-secondary fst-italic'>
                            <p><FontAwesomeIcon icon='fa-clock' className='me-2' />{review.duration}</p>

                            <p>               <FontAwesomeIcon icon={faCalendarDays} className='me-2' />{review.date}</p>
                            <p><FontAwesomeIcon icon='fa-person' className='me-2' />{review.group}</p>
                        </Col>
                        <Col className='col-9'>

                            <p><q className='fst-italic'>
                                {review.text}
                            </q></p>
                            <p>
                                <FontAwesomeIcon icon={faFaceSmile} className='me-2 text-success' />
                                {review.good}
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faFaceFrown} className='me-2 text-danger' />
                                {review.bad}
                            </p>
                        </Col>
                    </Row>
                </Container> */}
                <Modal.Footer>
                    <small className='me-auto fst-italic'>Posted: {review.posted}</small>
                    <Button className='btn-primary' onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>

        </>
    )
}

export default ReviewCard
