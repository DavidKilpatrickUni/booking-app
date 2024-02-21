import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar';

const ReviewBars = ({ data }) => {
    return (
        <>
            <Container className='text-center text-md-start'>
                <Row >
                    <Col>
                        <h1>Guest Reviews</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='fs-3'>
                            <span className='badge bg-primary me-2'>{data.review.average}</span>
                            <span className='d-block d-md-inline'>
                                <span className='fw-bold'>{data.review.text} </span>
                                <span>-</span>
                                <span className='text-secondary'> {data.review.amount} Review(s)</span>
                            </span>
                        </p>
                    </Col>
                </Row>
                <Row className='d-flex flex-column flex-md-row'>
                    {data.review.categories.map((item) => (
                        <Col className='col-md-6 col-lg-4 my-2'>
                            <p className='m-0 d-flex justify-content-between'><span>{item.category}</span><span>{(item.score).toFixed(1)}</span></p>
                            <ProgressBar animated now={item.score * 10}
                            />
                        </Col>
                    ))}

                </Row>
            </Container>
        </>
    )
}

export default ReviewBars

