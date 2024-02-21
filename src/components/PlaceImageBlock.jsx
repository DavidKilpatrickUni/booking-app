import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Pagination, FreeMode, Navigation, Thumbs } from 'swiper/modules';

// import '../index.css'

const PlaceImageBlock = ({ children, data }) => {

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

                    <Row className='mt-2'>
                        <Col className='col-md-4 col-6'>
                            <Row className='mb-1 mb-md-3'>
                                <Col className='col-12'
                                    onClick={() => handleShow(0)}
                                >
                                    <img src={data.images[0]} alt='' className='img-fluid rounded-5' />
                                </Col>
                            </Row>
                            <Row className='mt-1'>
                                <Col className='col-12'
                                    onClick={() => handleShow(1)}
                                >
                                    <img src={data.images[1]} alt='' className='img-fluid rounded-5' />
                                </Col>
                            </Row>
                        </Col>

                        <Col className='col-6 d-md-none'>
                            <Row className='mb-1 mb-md-3'>
                                <Col className='col-12 '
                                    onClick={() => handleShow(2)}
                                >
                                    <img src={data.images[2]} alt='' className='img-fluid rounded-5' />
                                </Col>
                            </Row>
                            <Row className='mt-1'>
                                <Col className='col-12 h-100 position-relative'
                                    onClick={() => handleShow(3)}
                                >
                                    <img src={data.images[3]} alt='' className='img-fluid rounded-5' style={{ opacity: '0.7' }} />
                                    <p className='position-absolute top-50 start-50 translate-middle text-white fw-bold '>
                                        <u>+{data.images.length} Photos</u>
                                    </p>
                                </Col>
                            </Row>
                        </Col>

                        <Col className='col-md-8 h-100 mb-1 d-none d-md-flex'
                            onClick={() => handleShow(2)}
                        >
                            <img src={data.images[2]} alt='' className='img-fluid rounded-5' />
                        </Col>
                    </Row>

                    <Row className='mt-2 d-none d-md-flex'>
                        {thumbnails.map((pic, index) => (
                            <Col className='col-md-3 '
                                onClick={() => handleShow(index + 3)}
                            >
                                <img src={pic} alt='' className='img-fluid rounded-5' />
                            </Col>
                        ))}
                        <Col className='col-md-3 position-relative'
                            onClick={() => handleShow(6)}
                        >
                            <img src={data.images[6]} alt='' className='img-fluid rounded-5' style={{ opacity: '0.7' }} />
                            <p className='position-absolute top-50 start-50 translate-middle text-white fw-bold '>
                                <u>+{data.images.length} Photos</u>
                            </p>
                        </Col>
                    </Row>



                </Container>

            </section>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton >
                    <Modal.Title >
                        {data.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Swiper
                        initialSlide={slide}
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        pagination={{
                            el: '.swiper-custom-pagination',
                            type: 'fraction'
                        }}

                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        modules={[Pagination, FreeMode, Navigation, Thumbs]}
                        className="mySwiper2 text-white fw-bold"
                    >

                        {data.images.map((pic) => (
                            <SwiperSlide>
                                <img src={pic} alt='' className='img-fluid' />
                            </SwiperSlide>
                        ))}


                    </Swiper>
                    <div className='swiper-custom-pagination text-center'></div>
                    <Swiper
                        breakpoints={{
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 5,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 10,
                            },
                        }}
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={3}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper mt-2"
                    >
                        {data.images.map((pic) => (
                            <SwiperSlide>
                                <img src={pic} alt='' className='img-fluid' />
                            </SwiperSlide>
                        ))}

                    </Swiper>


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

export default PlaceImageBlock
