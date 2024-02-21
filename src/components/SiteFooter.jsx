import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import { Link } from 'react-router-dom';

const SiteFooter = () => {
    return (
        <section >
            <Container className='pt-1'>
                <Row>
                    <Col className='col-sm-6 pt-2'>
                        <ListGroup className='text-center'>
                            <ListGroup.Item>
                                <Link className='text-decoration-none'>
                                    Home
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link className='text-decoration-none'>
                                    Stays
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link className='text-decoration-none'>
                                    Attractions
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link className='text-decoration-none'>
                                    Food & Drink
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col className='col-sm-6 pt-2'>
                        <ListGroup className='text-center'>
                            <ListGroup.Item >
                                <Link className='text-decoration-none'>
                                    About
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link className='text-decoration-none'>
                                    Terms & Conditions
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link className='text-decoration-none'>
                                    Customer Service
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SiteFooter
