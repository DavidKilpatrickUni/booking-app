import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LongCard = ({ listing }) => {
    return (
        <>
            <Container>

                <Row className='d-flex flex-column flex-md-row'>

                    {listing.map((list) => (
                        <Col className='col-md-12 my-1 w-100'>
                            <Card>
                                <Card.Body>

                                    <Row>
                                        <Col className='col-5 col-lg-3 rounded-4 myImg position-relative'
                                            style={{
                                                // background: `url(${list.image}) center center no-repeat`,

                                                backgroundSize: 'cover',
                                                backgroundImage: `url(${list.image})`,
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no'
                                            }}>
                                            {list.ourPick && <p className='position-absolute top-0 end-0 fw-bold'>
                                                <FontAwesomeIcon icon='fa-certificate' className='text-warning mt-2 me-2' />
                                            </p>}
                                        </Col>
                                        <Col className='col-6 col-lg-8'>
                                            <small>{list.type}</small>

                                            <p>
                                                <Link to={`/${list.location}/${list.category}/${list.name}/${list.refID}`}>
                                                    {list.name}
                                                </Link>
                                            </p>
                                            {list.stars.map((star) => (
                                                <FontAwesomeIcon icon={star} className='text-warning mt-1' />
                                            ))}
                                            <p>{list.location}</p>
                                            <p>{list.text}</p>
                                        </Col>
                                        <Col className='col-1'>
                                            <p className='badge bg-primary'>{list.reviewScore}</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>


                        </Col>
                    ))}


                </Row >

            </Container >
        </>
    )
}

export default LongCard
