import React from 'react'
import Col from 'react-bootstrap/Col'

import { useNavigate } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const BigSwiper = ({ children, array4 }) => {

    const navigate = useNavigate()

    return (
        <div className='text-center text-md-start'>
            {children}

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                // spaceBetween={0}
                // slidesPerView={2}
                autoplay
                pagination={{ clickable: true }}
                navigation
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                }}
            //scrollbar={{ draggable: true }}
            >
                {array4.map((location) => (
                    <SwiperSlide>
                        <Container>
                            <Row className='d-flex'>
                                <Col className='mb-2 col-md-12' onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}>
                                    <figure className='position-relative d-inline-block' >
                                        <img
                                            src={location.image}
                                            alt=''
                                            className='rounded-5 d-block img-fluid'
                                        />
                                        <figcaption className='position-absolute text-white fw-bold fs-6 top-0 mt-3 ms-3'>
                                            {location.message}
                                        </figcaption>
                                    </figure>
                                </Col>
                            </Row>
                        </Container>


                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default BigSwiper
