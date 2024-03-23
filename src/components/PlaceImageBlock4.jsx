import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import PlaceSwiperWithThumbs from './PlaceSwiperWithThumbs';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Pagination, FreeMode, Navigation, Thumbs } from 'swiper/modules';

const PlaceImageBlock4 = ({ children, data }) => {


    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [show, setShow] = useState(false);
    const [slide, setSlide] = useState(null);

    const handleClose = () => {
        setSlide(null)
        setShow(false)
    };

    const handleShow = (num) => {
        setSlide(num)
        setShow(true)
    };

    const thumbnails = []
    for (let x = 3; x < (data.images.length - 1); x++) {
        thumbnails.push(data.images[x])
    }

    return (

        <>
            <section className='text-center text-md-start'>
                {children}

                <Container className='mb-3'>

                    <Row className=''>
                        <Col >
                            <Row className=''>
                                <Col className='my-1 me-1 rounded-top rounded-end-0'
                                    onClick={() => handleShow(0)}
                                    style={{
                                        width: 'auto', height: '250px', cursor: 'pointer',

                                        backgroundSize: 'cover',
                                        backgroundImage: `url(${data.images[0].image})`,
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no'
                                    }}>
                                </Col>

                                <Col className='my-1 me-1 rounded-top rounded-start-0'
                                    onClick={() => handleShow(1)}
                                    style={{
                                        width: 'auto', height: '250px', cursor: 'pointer',

                                        backgroundSize: 'cover',
                                        backgroundImage: `url(${data.images[1].image})`,
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no'
                                    }}>
                                </Col>
                            </Row >
                            <Row>
                                <Col className='me-1  
                                rounded-start
                                rounded-top-0'
                                    onClick={() => handleShow(2)}
                                    style={{
                                        width: 'auto', height: '150px', cursor: 'pointer',

                                        backgroundSize: 'cover',
                                        backgroundImage: `url(${data.images[2].image})`,
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no'
                                    }}>
                                </Col>
                                <Col className='me-1'
                                    onClick={() => handleShow(3)}
                                    style={{
                                        width: 'auto', height: '150px', cursor: 'pointer',

                                        backgroundSize: 'cover',
                                        backgroundImage: `url(${data.images[3].image})`,
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no'
                                    }}>

                                </Col>
                                <Col className='me-1 align-content-center position-relative rounded-bottom rounded-start-0'
                                    onClick={() => handleShow(4)}
                                    style={{
                                        width: 'auto', height: '150px', cursor: 'pointer',

                                        backgroundSize: 'cover',
                                        backgroundImage: `url(${data.images[4].image})`,
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no',
                                        opacity: '0.7'
                                    }}>
                                    <p className='position-absolute text-white top-50 start-50 translate-middle fw-bold'>
                                        <u>+{data.images.length} Photos</u>
                                    </p>
                                </Col>
                            </Row >
                        </Col>

                    </Row>

                </Container >

            </section >

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton >
                    <Modal.Title >
                        {data.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <PlaceSwiperWithThumbs slide={slide} data={data} />

                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn-primary' onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default PlaceImageBlock4