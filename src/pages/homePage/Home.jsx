import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'


import SearchBar from './SearchBar'
import BigSwiper from '../../components/BigSwiper'
import SmallSwiper from '../../components/SmallSwiper'
import Title from '../../components/Title'
import AdvertBar from '../../components/AdvertBar'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ImageBlock from '../../components/ImageBlock'



const Home = () => {

    const array4 = [
        {
            message: '20% Off Early Hotel Bookings',
            image: 'https://images.pexels.com/photos/707581/pexels-photo-707581.jpeg'
        },
        {
            message: 'One Free Child Entry Per Paying Adult At Selected Attractions',
            image: 'https://images.pexels.com/photos/1005774/pexels-photo-1005774.jpeg'
        },
        {
            message: '2 For 1 Meal Deals',
            image: 'https://images.pexels.com/photos/291767/pexels-photo-291767.jpeg'
        }
    ]

    const array2 = [
        {
            name: 'Edinburgh',
            image: 'https://images.pexels.com/photos/7813912/pexels-photo-7813912.jpeg'
        },
        {
            name: 'London',
            image: 'https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg'
        }
    ]

    const array3 = [
        {
            name: 'Cardiff',
            image: 'https://images.pexels.com/photos/1088291/pexels-photo-1088291.jpeg'
        },
        {
            name: 'Manchester',
            image: 'https://images.pexels.com/photos/15023016/pexels-photo-15023016/free-photo-of-aerial-view-of-manchester-town-hall.jpeg'
        },
        {
            name: 'Newcastle',
            image: 'https://images.pexels.com/photos/2893285/pexels-photo-2893285.jpeg'
        }
    ]

    const array = [
        {
            name: 'Edinburgh',
            image: 'https://images.pexels.com/photos/7813912/pexels-photo-7813912.jpeg',
            places: 1034
        },
        {
            name: 'London',
            image: 'https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg',
            places: 1564
        },
        {
            name: 'Cardiff',
            image: 'https://images.pexels.com/photos/1088291/pexels-photo-1088291.jpeg',
            places: 894
        },
        {
            name: 'Manchester',
            image: 'https://images.pexels.com/photos/15023016/pexels-photo-15023016/free-photo-of-aerial-view-of-manchester-town-hall.jpeg',
            places: 970
        },
        {
            name: 'Newcastle',
            image: 'https://images.pexels.com/photos/2893285/pexels-photo-2893285.jpeg',
            places: 811
        },
        {
            name: 'Glasgow',
            image: 'https://images.pexels.com/photos/11142526/pexels-photo-11142526.jpeg',
            places: 1294
        },
        {
            name: 'York',
            image: 'https://images.pexels.com/photos/18381522/pexels-photo-18381522/free-photo-of-historic-york-minster-in-england.jpeg',
            places: 768
        }
    ]

    const locations = ['Edinburgh', 'London', 'Cardiff']
    const places = ['Stays', 'Attractions', 'Dining']

    const adverts = [
        {
            icon: 'fa-hotel',
            stat: '1200+',
            title: 'Stays',
            message: 'From executive suites to camping, you are sure to find a place to stay'
        },
        {
            icon: 'fa-binoculars',
            stat: '800+',
            title: 'Attractions',
            message: 'Top attractions to catch the interest of anyone or keep the family entertained'
        },
        {
            icon: 'fa-utensils',
            stat: '1800+',
            title: 'Dining',
            message: 'Even the most fussiest of eaters will struggle to not find their perfect meal'
        }
    ]


    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Title>
                            <h1>
                                Start Your Exploration
                            </h1>
                            <p>
                                Find The Perfect Places To Stay & Visit
                            </p>
                        </Title>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <SearchBar locations={locations} places={places} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <BigSwiper array4={array4}>
                            <h1>Offers</h1>
                            <p>Make Huge Savings With These Deals</p>
                        </BigSwiper>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <ImageBlock array2={array2} array3={array3} >
                            <h1>Popular Locations</h1>
                            <p>Explorers Loving These Areas</p>
                        </ImageBlock>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <SmallSwiper array={array}>
                            <h1>All Locations</h1>
                            <p>Try Somewhere New</p>
                        </SmallSwiper >
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <SmallSwiper array={array}>
                            <h1>Top Places To Stay</h1>
                            <p>Get A Great Night Sleep</p>
                        </SmallSwiper >
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AdvertBar adverts={adverts} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <SmallSwiper array={array}>
                            <h1>Awesome Attractions</h1>
                            <p>Fun & Interesting Activities</p>
                        </SmallSwiper >
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <SmallSwiper array={array}>
                            <h1>High Rated Dining</h1>
                            <p>Best Cuisine On Offer</p>
                        </SmallSwiper >
                    </Col>
                </Row>
            </Container >


        </>


    )
}

export default Home
