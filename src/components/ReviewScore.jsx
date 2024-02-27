import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ReviewScore = ({ children, data }) => {
    return (
        <Container className='text-center text-md-start'>
            <Row>
                <Col>
                    {children}
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

        </Container >
    )
}

export default ReviewScore
