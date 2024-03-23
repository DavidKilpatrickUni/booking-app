import React from 'react'
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const MapPopup = ({ mark }) => {

    console.log(mark)
    return (
        <>
            <Container>
                <Row className='my-0' style={{ width: '270px', height: 'auto' }}>
                    <Col className='col-7 my-0 '>
                        <img src={mark.image} alt='' className='img-fluid rounded-3' />
                        <p className='my-0 text-center'>
                            {mark.stars.map((star) => (
                                <FontAwesomeIcon icon={star} className='text-warning mt-1' />
                            ))}
                        </p>
                    </Col>
                    <Col className='col-5 my-0 text-center d-flex align-items-center'>
                        <Link to={`/${mark.location}/${mark.category}/${mark.name}/${mark.refID}`}>
                            <h6 className='fw-bold'>{mark.name}</h6>
                        </Link>
                    </Col>
                </Row >
                <Row className='text-center'>
                    <p className='my-1'>{mark.address}</p>
                </Row>
                <Row className='my-0'>

                    <Col className='col-12 my-0 text-center'>
                        <p className='fst-italic my-0'><span className='badge bg-primary me-2 fst-normal text-center'>{mark.review.score.toFixed(1)}</span>{mark.review.count} Review(s)</p>

                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default MapPopup
