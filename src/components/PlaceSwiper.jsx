import React, { useState } from 'react'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Pagination, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import PlaceSwiperWithThumbs from './PlaceSwiperWithThumbs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import '../mySwiper.css'

const PlaceSwiper = ({ data }) => {

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
            <Swiper className='placeSwiper rounded-5'

                style={{
                    '--swiper-pagination-color': '#fff',
                }}
                pagination={{
                    dynamicBullets: true,
                }}

                spaceBetween={10}
                navigation={true}

                modules={[Pagination, FreeMode, Navigation, Thumbs]}

            >

                {data.images.map((pic, index) => (
                    <SwiperSlide>
                        <img src={pic} alt='' className='img-fluid' 
                        onClick={() => handleShow(index)}/>
                    </SwiperSlide>
                ))}
            </Swiper>


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

export default PlaceSwiper
