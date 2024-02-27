import React from 'react'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import ReactCountryFlag from "react-country-flag";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, fas } from '@fortawesome/free-solid-svg-icons'
import { faFaceSmile, faFaceFrown } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const ReviewCardFull = ({ review }) => {
    return (
        <div>

            <Container>
                <Row className='py-2 '>
                    <Col className='col-sm-3 col-md-2 d-none d-sm-block'>
                        <img src={review.profilePic} alt='' className='img-fluid rounded-circle' />
                    </Col>
                    <Col className='col-sm-5 col-md-6 align-self-center ps-1 '>
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


                            <span className='d-none d-sm-inline'>{review.country}</span>
                        </p>

                    </Col>
                    <Col className='col-sm-4 align-self-center text-end fs-3'>

                        <span className='badge bg-primary'>{review.score}</span>
                    </Col>

                </Row>


                <Row className='mt-3 d-flex flex-column flex-sm-row'>
                    <Col className='col-sm-3 text-secondary fst-italic text-center text-sm-start border-sm d-flex d-sm-block d-inline justify-content-around sm-border'>
                        <p><FontAwesomeIcon icon='fa-clock' className='me-2 d-none d-sm-inline' />{review.duration}</p>

                        <p className='d-inline d-sm-none'>|</p>

                        <p ><FontAwesomeIcon icon={faCalendarDays} className='me-2 d-none d-sm-inline ' />{review.date}</p>

                        <p className='d-inline d-sm-none'>|</p>

                        <p><FontAwesomeIcon icon='fa-person' className='me-2 d-none d-sm-inline' />{review.group}</p>

                    </Col>
                    <Col className='col-sm-9 text-center text-sm-start'>

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
            </Container>
        </div>
    )
}

export default ReviewCardFull
