import React from 'react'
import { useState } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas)

const Questions = ({ children }) => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const place = 'The Polwarth Apartment'

    const questions = [
        {
            question: 'Does the hotel have restaurants?',
            answer: `The Tower Hotel, London has 3 restaurants:

Vicinity
The Lawn
Xi Bar and Lounge`,
            answerTime: '20 May 2019'
        },
        {
            question: 'Any breakfast?',
            answer: `Guests staying at The Tower Hotel, London can enjoy a highly-rated breakfast during their stay (guest review score: 7.4).

Breakfast option(s) include:

Full English/Irish
Vegetarian
Gluten-free
Buffet`,
            answerTime: '20 May 2019'
        },
        {
            question: 'Type of rooms available?',
            answer: `Room options at The Tower Hotel, London include:

Double
Twin
Suite
Family`,
            answerTime: '20 May 2019'
        },
        {
            question: 'What s the cost?',
            answer: `The prices at The Tower Hotel, London may vary depending on your stay (e.g. dates you select, hotel's policy etc.). See the prices by entering your dates.`,
            answerTime: '20 May 2019'
        },
        {
            question: 'Check-in and check-out times?',
            answer: `Check-in at The Tower Hotel, London is from 15:00, and check-out is until 11:00.`,
            answerTime: '20 May 2019'
        },
        {
            question: 'What is there to do?',
            answer: `The Tower Hotel, London offers the following activities / services (charges may apply):

Fitness centre`,
            answerTime: '20 May 2019'
        },
        {
            question: 'Type of rooms available?',
            answer: `Room options at The Tower Hotel, London include:

Double
Twin
Suite
Family`,
            answerTime: '20 May 2019'
        },
        {
            question: 'What s the cost?',
            answer: `The prices at The Tower Hotel, London may vary depending on your stay (e.g. dates you select, hotel's policy etc.). See the prices by entering your dates.`,
            answerTime: '20 May 2019'
        },
        {
            question: 'Check-in and check-out times?',
            answer: `Check-in at The Tower Hotel, London is from 15:00, and check-out is until 11:00`,
            answerTime: '20 May 2019'
        },
        {
            question: 'What is there to do?',
            answer: `The Tower Hotel, London offers the following activities / services (charges may apply):

Fitness centre`,
            answerTime: '20 May 2019'
        }


    ]



    return (
        <section className='text-center text-md-start'>
            <Container>
                <Row>
                    {children}
                    <Col className='col-md-9 col-12'>
                        <Accordion defaultActiveKey="0">

                            {questions.filter((question, index) => index < 5).map((question, index) => (
                                <Accordion.Item eventKey={index}>
                                    <Accordion.Header>
                                        <h6 className='fw-bold'>{question.question}</h6>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p className='text-start'>{question.answer}</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                    <Col className='col-md-3 col-12 h-100 align-self-center text-center mt-2 mt-md-0'>
                        <p className='d-none d-md-block fw-bold'>Still Looking?</p>
                        <Button variant='outline-primary'>Ask A Question</Button>
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col>
                        <Button variant='outline-primary' onClick={handleShow}> View All Questions ({questions.length})</Button>
                    </Col>
                </Row>
            </Container>


            <Offcanvas show={show} onHide={handleClose} placement='end' className='w-75'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        {place}
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>


                    {questions.map((question) => (
                        <>
                            <Container>
                                <Row>
                                    <Col>
                                        <p className='fw-bold'><FontAwesomeIcon icon='fa-comments' className='me-2 text-primary' />{question.question}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className=''>
                                        <p className='mb-1'><q>{question.answer}</q></p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='col-sm-5 col-12 mb-2'>
                                        <p className='text-secondary fst-italic m-0'>
                                            {question.answerTime}
                                        </p>
                                    </Col>
                                    <Col className='col-sm-7 col-12'>
                                        <Row className='d-flex flex-column flex-sm-row justify-content-center text-center'>
                                            <Col className='col-sm-6 col-12'>
                                                <p className='text-sm-end m-0' >
                                                    <span className='text-success'>
                                                        <FontAwesomeIcon icon='fa-thumbs-up' className='me-2 text-success' />
                                                        Helpful
                                                    </span>

                                                </p>
                                            </Col>
                                            <Col className='col-sm-6 col-12'>
                                                <p className='m-0' >
                                                    <span className='text-danger'>
                                                        <FontAwesomeIcon icon='fa-thumbs-down' className='me-2 text-danger' />
                                                        Not Helpful
                                                    </span>
                                                </p>
                                            </Col>
                                        </Row>

                                    </Col>
                                </Row>
                            </Container>




                            <hr />
                        </>
                    ))}



                </Offcanvas.Body>
                <div className='sticky-bottom border w-100 p-3 bg-white'>
                    <Button className='w-100' size='lg'>Ask Question</Button>
                </div>
            </Offcanvas>

        </section>
    )
}

export default Questions
