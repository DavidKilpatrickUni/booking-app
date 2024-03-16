import React from 'react'
import { useState } from 'react';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas';

import SmallSwiper from './SmallSwiper'
import ReviewBars from './ReviewBars';
import ReviewScore from './ReviewScore';
import ReviewCardList from './ReviewCardList';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ReviewCard from './ReviewCard'



const ReviewCardHolder = ({ reviews, data }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <section >
            <Swiper
                className='smallSwiper'
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}

                spaceBetween={10}
                slidesPerView={1}
                navigation
                autoplay
                //pagination={{ clickable: true }}
                //scrollbar={{ draggable: true }}
                breakpoints={{
                    370: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1400: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
            >
                {reviews.filter((review, index) => index < 5).map((review) => (
                    <SwiperSlide>
                        <ReviewCard review={review} />
                    </SwiperSlide>


                ))}
            </Swiper>

            <div className='text-center text-md-start mt-2'>
                <Button variant='outline-primary' onClick={handleShow}>See All Reviews ({reviews.length})</Button>
            </div>

            <Offcanvas show={show} onHide={handleClose} placement='end' className='w-75'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{data.name}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ReviewScore data={data}>
                    </ReviewScore>
                    <ReviewBars data={data}>
                        <h3>Categories</h3>
                    </ReviewBars>
                    <hr />
                    <ReviewCardList reviews={reviews}>
                        <h3>Guest Reviews</h3>
                    </ReviewCardList>
                </Offcanvas.Body>
                <div className='sticky-bottom border w-100 p-3 bg-white'>
                    <Button className='w-100' size='lg'>Post A Review</Button>
                </div>
            </Offcanvas>

        </section>
    )
}

export default ReviewCardHolder
