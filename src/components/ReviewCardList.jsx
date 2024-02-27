import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown';

import ReviewCardFull from './ReviewCardFull'

const ReviewCardList = ({ children, reviews }) => {
    return (
        <section>
            <Container>
                <Row>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p>{children}</p>
                        <select class="form-select form-select-sm w-25">
                            <option value='newest'>Newest First</option>
                            <option value="oldest">Oldest First</option>
                            <option value="highest">Highest Score</option>
                            <option value="lowest">Lowest Score</option>
                        </select>

                    </div>

                    <Col>
                        {reviews.map((review) => (
                            <>
                                <ReviewCardFull review={review} />
                                <hr />
                            </>

                        ))}
                    </Col>
                </Row>
            </Container>


        </section>
    )
}

export default ReviewCardList
