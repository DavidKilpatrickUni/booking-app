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

const Questions = ({ children, questions }) => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const place = 'The Polwarth Apartment'





    return (
        <section className='text-center text-md-start'>


            <Container>
                <Row>
                    {children}
                    <Col className='col-md-9 d-flex col-12 align-items-center'>

                        <Accordion defaultActiveKey="0"
                            className='w-100'>

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
                                            Replied: {question.answerTime}
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
