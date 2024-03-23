import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Pagination, FreeMode, Navigation, Thumbs } from 'swiper/modules';

const PlaceSwiperWithThumbs = ({ slide, data }) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
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
                        <img src={pic.image} alt={pic.imageInfo} className='img-fluid' />
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
                        <img src={pic.image} alt={pic.imageInfo} className='img-fluid' />
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    )
}

export default PlaceSwiperWithThumbs
