import React from 'react'

import { useNavigate } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel';

const Featured = ({ children, featured, myFeatured }) => {

    const navigate = useNavigate()

    return (
        <section className='text-center text-md-start'>
            {children}
            <Container>
                <Row >
                    <Col className='d-flex justify-content-center'>
                        <Carousel style={{ maxHeight: '1200px', maxWidth: '800px' }}>
                            {myFeatured.images.map((item) => (
                                <Carousel.Item
                                    style={{ maxHeight: '1200px', maxWidth: '800px' }}
                                    onClick={() => navigate(`/${myFeatured.location}/${myFeatured.category}/${myFeatured.name}/${myFeatured.refID}`)}>
                                    <img src={item.image} alt='' text="Third slide" className='img-fluid rounded-4' />
                                    <Carousel.Caption>
                                        <h1>{featured.location}</h1>
                                        <p>{item.info}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Featured
