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

const PlaceImageBlock3 = ({ children, data }) => {


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
                        <Col className='col-9'>
                            <Row className=''>
                                <Col className='my-1 me-1 rounded-top rounded-end-0'
                                    onClick={() => handleShow(0)}
                                    style={{ background: `url(${data.images[0].image}) center center no-repeat`, backgroundSize: 'cover', width: 'auto', height: '280px', cursor: 'pointer' }}>
                                </Col>
                            </Row >
                            <Row>
                                <Col className='me-1  
                                rounded-bottom
                                rounded-end-0'
                                    onClick={() => handleShow(1)}
                                    style={{ background: `url(${data.images[1].image}) center center no-repeat`, backgroundSize: 'cover', width: 'auto', height: '138px', cursor: 'pointer' }}>
                                </Col>
                                <Col className='me-1'
                                    onClick={() => handleShow(2)}
                                    style={{ background: `url(${data.images[2].image}) center center no-repeat`, backgroundSize: 'cover', width: 'auto', height: '138px', cursor: 'pointer' }}>

                                </Col>
                            </Row >
                        </Col>
                        <Col className='col-3 p-0'
                        >
                            <div className='me-1 mt-1 rounded-top rounded-start-0'
                                onClick={() => handleShow(3)}
                                style={{ background: `url(${data.images[3].image}) center center no-repeat`, backgroundSize: 'cover', width: 'auto', height: '138px', cursor: 'pointer' }}>
                            </div>

                            <div className='me-1 mt-1'
                                onClick={() => handleShow(4)}
                                style={{ background: `url(${data.images[4].image}) center center no-repeat`, backgroundSize: 'cover', width: 'auto', height: '138px', cursor: 'pointer' }}>
                            </div>
                            <div className='me-1 mt-1 rounded-bottom rounded-start-0 position-relative'
                                onClick={() => handleShow(5)}
                                style={{ background: `url(${data.images[5].image}) center center no-repeat`, backgroundSize: 'cover', width: 'auto', height: '138px', cursor: 'pointer', opacity: '0.7' }}>
                                <p className='position-absolute text-white top-50 start-50 translate-middle fw-bold'>
                                    <u>+{data.images.length} Photos</u>
                                </p>
                            </div>
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

export default PlaceImageBlock3