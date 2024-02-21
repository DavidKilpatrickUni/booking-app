import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel, faUtensils, faBars, faBinoculars } from '@fortawesome/free-solid-svg-icons'
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons'
import { faCircleUser, faCompass } from '@fortawesome/free-regular-svg-icons'





const SiteNavbar = () => {
    return (
        // <>
        //     hello
        // </>

        <section className='bg-primary'>

            <Navbar collapseOnSelect expand="lg" className="bg-primary text-white">
                <Container >
                    <Navbar.Brand >
                        <Link className='text-white fw-bold fs-2 text-decoration-none'
                            to='/'
                        >ExploreApp</Link></Navbar.Brand>
                    <Nav>
                        <Nav.Link>
                            <Link>
                                <Button>
                                    <FontAwesomeIcon icon={faCircleUser} className='fs-1' />
                                </Button>
                            </Link>
                        </Nav.Link>

                    </Nav>
                </Container>
            </Navbar>




            <Container className='pb-2'>
                {/* <Row className='py-2 d-flex flex-column flex-sm-row'>
                    <Col className='col-md-6 d-flex justify-content-center'>
                        <Link to='/' className='text-white text-decoration-none fw-bold fs-3'>
                            BookingApp
                        </Link>
                    </Col>
                    <Col className='col-md-6 d-flex justify-content-center'>
                        <Button>
                            <FontAwesomeIcon icon={faCircleUser} className='fs-3' />
                        </Button>
                    </Col>
                </Row> */}



                <Row className='py-2 d-flex flex-column flex-md-row'>
                    <Col className='col-lg-3 col-md-2 d-flex justify-content-center offset-md-1 offset-lg-0'>
                        <Button className='rounded-5'>

                            <Link
                                className='text-white text-decoration-none fs-3'
                                to='/locations'
                            >
                                <FontAwesomeIcon icon={faCompass} className='me-2' />
                                Locations
                            </Link>
                        </Button>
                    </Col>
                    <Col className='col-lg-3 col-md-2  d-flex justify-content-center offset-md-1 offset-lg-0'>
                        <Button className='rounded-5'>

                            <Link
                                className='text-white text-decoration-none fs-3'
                                to='/stays'
                            >
                                <FontAwesomeIcon icon={faHotel} className='me-2' />
                                Stays
                            </Link>
                        </Button>
                    </Col>
                    <Col className='col-lg-3 col-md-2 offset-md-1 d-flex justify-content-center offset-lg-0'>
                        <Button className='rounded-5'>

                            <Link
                                className='text-white text-decoration-none fs-3 '
                                to='/attractions'
                            >
                                <FontAwesomeIcon icon={faBinoculars} className='me-2' />
                                Attractions
                            </Link>
                        </Button>
                    </Col>
                    <Col className='col-lg-3 col-md-2 offset-md-1 d-flex justify-content-center offset-lg-0'>
                        <Button className='rounded-5 p-0 m-0'>

                            <Link
                                className='text-white text-decoration-none fs-3 '
                                to='/dining'
                            >
                                <FontAwesomeIcon icon={faUtensils} className='me-2' />
                                Dining
                            </Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>

    );
}

export default SiteNavbar
