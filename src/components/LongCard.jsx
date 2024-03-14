import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const LongCard = ({ listing }) => {
    return (
        <>
            <Container>

                <Row className='d-flex flex-column flex-md-row'>

                    {listing.map((list) => (
                        <Col className='col-md-12 my-1'>
                            <Card>
                                <Card.Body>

                                    <Row>
                                        <Col className='col-5 col-lg-3 rounded-4' style={{ background: `url(${list.data.image}) center center no-repeat`, backgroundSize: 'cover' }}>

                                        </Col>
                                        <Col className='col-6 col-lg-8'>
                                            <small>{list.data.type}</small>

                                            <p>
                                                <Link to={`/${list.data.location}/${list.data.category}/${list.data.name}/${list.id}`}>
                                                    {list.data.name}
                                                </Link>
                                            </p>



                                            <p>{list.data.text}</p>
                                        </Col>
                                        <Col className='col-1'>
                                            <p className='badge bg-primary'>{list.data.reviewScore}</p>
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
