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

const PlaceImageBlock2 = ({ children, data }) => {


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
    for (let x = 3; x < 6; x++) {
        thumbnails.push(data.images[x])
    }

    return (

        <>
            <section className='text-center text-md-start'>
                {children}

                <Container >

                    <Row className=''>
                        <Col className='col-7 p-0 '      >
                            <div className='my-1 me-1 rounded-start' 
                            onClick={() => handleShow(0)}
                            style={{ background: `url(${data.images[0]}) center center no-repeat`, backgroundSize: 'cover', width: 'auto', height: '411px', cursor: 'pointer' }}>
                            </div>
                        </Col>
                        <Col className='col-3 p-0 '
                    >
                            <div className='me-1 mt-1'
                            onClick={() => handleShow(1)}
                            style={{ background: `url(${data.images[1]}) center center no-repeat`, backgroundSize: 'cover', width: 'auto', height: '204px', cursor: 'pointer' }}>
                            </div>

                            <div className='me-1 mt-1'
                            onClick={() => handleShow(2)}
                            style={{ background: `url(${data.images[2]}) center center no-repeat`, backgroundSize: 'cover', width: 'auto', height: '204px', cursor: 'pointer' }}>
                            </div>
                        </Col>

                        <Col className='col-2 p-0'>
                            <div className='my-1 rounded-end' 
                            onClick={() => handleShow(3)}
                            style={{ background: `url(${data.images[3]}) center center no-repeat`, backgroundSize: 'cover', width: 'auto', height: '100px', cursor: 'pointer' }}>
                            </div>

                            <div className='my-1 rounded-end' 
                            onClick={() => handleShow(4)}
                            style={{ background: `url(${data.images[4]}) center center no-repeat`, backgroundSize: 'cover', width: 'auto', height: '100px', cursor: 'pointer' }}>
                            </div>

                            <div className='my-1 rounded-end' 
                            onClick={() => handleShow(5)}
                            style={{ background: `url(${data.images[5]}) center center no-repeat`, backgroundSize: 'cover', width: 'auto', height: '100px', cursor: 'pointer' }}>
                            </div>

                            <div className='my-1 rounded-end' 
                            onClick={() => handleShow(6)}
                            style={{ background: `url(${data.images[6]}) center center no-repeat`, backgroundSize: 'cover', width: 'auto', height: '100px', cursor: 'pointer' }}>
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

export default PlaceImageBlock2