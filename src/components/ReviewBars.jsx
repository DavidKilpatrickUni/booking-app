import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar';



const ReviewBars = ({ children, data }) => {
    return (
        <>
            <Container className='text-center text-md-start'>
                {children}
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

