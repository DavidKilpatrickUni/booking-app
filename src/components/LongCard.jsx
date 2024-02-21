import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const LongCard = ({ features }) => {
    return (
        <>
            <Container>

                <Row className='d-flex flex-column flex-md-row'>

                    {features.map((feature) => (
                        <Col className='col-md-12 my-1'>
                            <Card>
                                <Card.Body>
                                    <Card.Text>
                                        <Row>
                                            <Col className='col-5 col-lg-3 rounded-4' style={{ background: `url(${feature.images[0].image}) center center no-repeat`, backgroundSize: 'cover' }}>

                                            </Col>
                                            <Col className='col-6 col-lg-8'>
                                                <small>{feature.type}</small>

                                                <p>
                                                    <Link to={`/${feature.location}/${feature.category}/${feature.name}`}>
                                                        {feature.name}
                                                    </Link>
                                                </p>



                                                <p>{feature.text}</p>
                                            </Col>
                                            <Col className='col-1'>
                                                <p className='badge bg-primary'>{feature.reviewScore}</p>
                                            </Col>
                                        </Row>
                                    </Card.Text>

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
