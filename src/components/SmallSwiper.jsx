import React from 'react'
import Card from 'react-bootstrap/Card';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useNavigate } from 'react-router-dom'
import ReviewCard from './ReviewCard';



const SmallSwiper = ({ children, array, reviews }) => {

    const navigate = useNavigate()

    return (
        <div className='text-center text-md-start'>

            {children}

            <Swiper
                className='smallSwiper'
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                // spaceBetween={50}
                // slidesPerView={4}
                navigation
                autoplay
                //pagination={{ clickable: true }}
                //scrollbar={{ draggable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
            >
                {array.map((location) => (
                    <SwiperSlide>

                        <Card style={{ cursor: 'pointer' }} className='h-100' onClick={() => navigate(`/locations/${location.name}`)}>
                            <Card.Img variant="top" src={location.image} />
                            <Card.Footer>
                                <p className='m-0 fw-bold fs-6'>{location.name}</p>
                                <small>{location.places} Places</small>
                            </Card.Footer>
                        </Card>


                    </SwiperSlide>


                ))}
            </Swiper>
        </div >
    )
}

export default SmallSwiper
