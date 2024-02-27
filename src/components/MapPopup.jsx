import React from 'react'
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const MapPopup = ({ mark }) => {
    return (
        <>
            <Container>
                <Row className='my-0' style={{ width: '270px', height: 'auto' }}>
                    <Col className='col-5 my-0'>
                        <img src={mark.image} alt='' className='img-fluid rounded-3' />
                    </Col>
                    <Col className='col-7 my-0'>
                        <Link to={`/${mark.location}/${mark.category}/${mark.placeName}`}>
                            <h6 className='fw-bold'>{mark.placeName}</h6>
                        </Link>

                        <p className='my-1'>{mark.address}</p>
                    </Col>
                </Row >
                <Row className='my-0'>
                    <Col className='col-5 my-0 text-center'>
                        {mark.stars.map((star) => (
                            <FontAwesomeIcon icon={star} className='text-warning mt-1' />
                        ))}
                    </Col>
                    <Col className='col-7 my-0 text-center'>
                        <p className='fst-italic my-0'><span className='badge bg-primary me-2 fst-normal'>{mark.review.score}</span>{mark.review.count} Review(s)</p>

                    </Col>
                </Row>
                <Row className='my-0'>
                    <Col className='my-0'>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MapPopup
