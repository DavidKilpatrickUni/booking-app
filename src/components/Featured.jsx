import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const Featured = ({ children, featured, myFeatured }) => {

    const navigate = useNavigate()

    console.log(myFeatured)


    return (
        <section className='text-center text-md-start'>
            {children}
            {/* <Container>
                <Row >
                    <Col className='d-flex justify-content-center'>
                        <Carousel style={{ maxHeight: '1200px', maxWidth: '800px' }}>
                            {featured.images.map(({ image, imageInfo }) => (
                                <Carousel.Item style={{ maxHeight: '1200px', maxWidth: '800px' }}
                                    onClick={() => navigate(`/locations/${featured.location}`)}>
                                    <img src={image} alt='' text="Third slide" className='img-fluid' />
                                    <Carousel.Caption>
                                        <h1>{featured.location}</h1>
                                        <p>{imageInfo}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
            </Container> */}
            <Container>
                <Row >
                    <Col className='d-flex justify-content-center'>
                        <Carousel style={{ maxHeight: '1200px', maxWidth: '800px' }}>
                            {myFeatured.images.map(({ image, imageInfo }) => (
                                <Carousel.Item style={{ maxHeight: '1200px', maxWidth: '800px' }}
                                    onClick={() => navigate(`/${myFeatured.location}/${myFeatured.category}/${myFeatured.name}/${myFeatured.refID}`)}>
                                    <img src={image} alt='' text="Third slide" className='img-fluid' />
                                    <Carousel.Caption>
                                        <h1>{myFeatured.location}</h1>
                                        <p>{imageInfo}</p>
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
