import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import BigSwiper from '../../components/BigSwiper'
import SmallSwiper from '../../components/SmallSwiper'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import * as L from "leaflet";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import GreenIcon from '../../leaflet-color-markers-master/img/marker-icon-green.png'
import RedIcon from '../../leaflet-color-markers-master/img/marker-icon-red.png'
import YellowIcon from '../../leaflet-color-markers-master/img/marker-icon-yellow.png'
import Shadow from '../../leaflet-color-markers-master/img/marker-shadow.png'
import AdvertBar from '../../components/AdvertBar'

import WineGlass from '../../images/wine-glass-solid.svg'
import Title from '../../components/Title'


import { Link, useNavigate } from 'react-router-dom'

const Location = () => {

    const navigate = useNavigate()

    const array4 = [
        {
            message: 'Aberdeen Hotel',
            image: 'https://images.pexels.com/photos/707581/pexels-photo-707581.jpeg'
        },
        {
            message: 'Aberdeen big wheel',
            image: 'https://images.pexels.com/photos/1005774/pexels-photo-1005774.jpeg'
        },
        {
            message: 'Aberdeen restaurant',
            image: 'https://images.pexels.com/photos/291767/pexels-photo-291767.jpeg'
        }
    ]

    const featured =
    {
        location: 'Aberdeen',
        images: [
            {
                image: 'https://images.pexels.com/photos/14194120/pexels-photo-14194120.jpeg',
                imageInfo: 'Some building'
            },
            {
                image: 'https://images.pexels.com/photos/13012302/pexels-photo-13012302.jpeg',
                imageInfo: 'This square'
            },
            {
                image: 'https://images.pexels.com/photos/3061345/pexels-photo-3061345.jpeg',
                imageInfo: 'Fancy Area'
            }
        ],
        text: `Aberdeen  Scots: Aiberdeen; Scottish Gaelic: Obar Dheathain ; Latin: Aberdonia) is a city in North East Scotland, and is the third most populous Scottish city. Aberdeen is one of Scotland s 32 local government council areas(as Aberdeen City[7]), and has a 2020 population estimate of 198, 590 for the city, [3] making it the United Kingdoms 39th most populous built-up area, and 227,430 for the wider council area including outlying localities.[4] The city is 93 mi (150 km) northeast of Edinburgh and 398 mi (641 km) north of London, and is the northernmost major city in the United Kingdom. Aberdeen has a long, sandy coastline and features an oceanic climate, with cool summers and mild, rainy winters.[8]`,
        lat: '57.149446',
        lng: '-2.093752',
        stats: [
            {
                icon: 'fa-hotel',
                stat: 100,
                title: 'Stays',
                message: null
            },
            {
                icon: 'fa-binoculars',
                stat: 67,
                title: 'Attractions',
                message: null
            },
            {
                icon: 'fa-utensils',
                stat: 185,
                title: 'Dining',
                message: null
            }
        ],
        hotelMarkers: [
            {
                placeName: 'Hotel A',
                lat: '57.146478',
                lng: '-2.095684'
            },
            {
                placeName: 'Hotel B',
                lat: '57.154636',
                lng: '-2.085430'
            },
            {
                placeName: 'Hotel C',
                lat: '57.163640',
                lng: '-2.097075'
            }
        ],
        attractionMarkers: [
            {
                placeName: 'Attraction A',
                lat: '57.146478',
                lng: '-2.095684'
            },
            {
                placeName: 'Attraction B',
                lat: '57.154636',
                lng: '-2.085430'
            },
            {
                placeName: 'Attraction C',
                lat: '57.163640',
                lng: '-2.097075'
            }
        ],
        diningMarkers: [
            {
                placeName: 'Dining A',
                lat: '57.145813',
                lng: '-2.077766'
            },
            {
                placeName: 'Dining B',
                lat: '57.150686',
                lng: '-2.086262'
            },
            {
                placeName: 'Dining C',
                lat: '57.147558',
                lng: '-2.103195'
            }
        ]
    }

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


    const greenIcon = new L.Icon({
        iconUrl: GreenIcon,
        shadowUrl: Shadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });


    const redIcon = new L.Icon({
        iconUrl: RedIcon,
        shadowUrl: Shadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });



    const yellowIcon = new L.Icon({
        iconUrl: WineGlass,
        shadowUrl: Shadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });


    return (
        < >

            <Container>
                <Row>
                    <Col>
                        <Title>
                            <h1>{featured.location}</h1>
                        </Title>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{featured.text}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <BigSwiper array4={array4}>
                            <h1>Highlights</h1>
                            <p>Best {featured.location} Has To Offer</p>
                        </BigSwiper>
                    </Col>
                </Row>
                <hr />
                <h1>
                    Interactive Map
                </h1>
                <p>
                    Have A Look At The Area And View Some Of Our Suggested Places
                </p>
                <Row>
                    <Col style={{ height: '400px', width: '100%', overflowX: 'hidden' }}>
                        <MapContainer
                            style={{ height: '100%', width: '100%' }}
                            center={[featured.lat, featured.lng]}
                            zoom={13}
                            scrollWheelZoom={false}
                        >
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
                            />


                            <Marker position={[featured.lat, featured.lng]} >
                                <Popup>
                                    Location Centre
                                </Popup>
                            </Marker>

                            {featured.hotelMarkers.map((mark) => (
                                <Marker position={[mark.lat, mark.lng]} icon={greenIcon} >
                                    <Popup>
                                        {mark.placeName}

                                    </Popup>
                                </Marker>
                            ))}

                            {featured.attractionMarkers.map((mark) => (
                                <Marker position={[mark.lat, mark.lng]} icon={redIcon} >
                                    <Popup>
                                        {mark.placeName}

                                    </Popup>
                                </Marker>
                            ))}

                            {featured.diningMarkers.map((mark) => (
                                <Marker position={[mark.lat, mark.lng]} icon={yellowIcon} >
                                    <Popup>
                                        <h6>
                                            {mark.placeName}
                                        </h6>
                                        <Link to='/'>
                                            View
                                        </Link>
                                    </Popup>

                                </Marker>
                            ))}


                        </MapContainer>
                    </Col>
                </Row>
                <Row className='mt-3 d-flex justify-content-center'>
                    <Col className='col-md-2 text-center text-primary' style={{ cursor: 'pointer' }}>
                        <FontAwesomeIcon
                            icon='fa-hotel'
                            className='fs-1'
                        />
                        <p className='d-md-block d-none text-primary'>
                            Stays
                        </p>
                    </Col>
                    <Col className='col-md-2   text-center text-danger' style={{ cursor: 'pointer' }}>
                        <FontAwesomeIcon
                            icon='fa-binoculars'
                            className='fs-1'
                        />
                        <p className='d-md-block d-none text-danger'>
                            Attractions
                        </p>
                    </Col>
                    <Col className='col-md-2 text-center text-warning' style={{ cursor: 'pointer' }}>
                        <FontAwesomeIcon
                            icon='fa-utensils'
                            className='fs-1'
                        />
                        <p className='d-md-block d-none text-warning'>
                            Restaurants
                        </p>
                    </Col>
                    <Col className='col-md-2 text-center text-success' style={{ cursor: 'pointer' }}>
                        <FontAwesomeIcon
                            icon='fa-martini-glass'
                            className='fs-1'
                        />
                        <p className='d-md-block d-none text-success'>
                            Bars
                        </p>
                    </Col>
                    <Col className='col-md-2 text-center text-info' style={{ cursor: 'pointer' }}>
                        <FontAwesomeIcon
                            icon='fa-mug-saucer'
                            className='fs-1'
                        />
                        <p className='d-md-block d-none text-info '>
                            Coffee Shops
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AdvertBar adverts={featured.stats} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <SmallSwiper array={array}>
                            <h1>Stays</h1>
                        </SmallSwiper>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <SmallSwiper array={array}>
                            <h1>Attractions</h1>
                        </SmallSwiper>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <SmallSwiper array={array}>
                            <h1>Dining</h1>
                        </SmallSwiper>
                    </Col>
                </Row>



            </Container>



        </ >
    )
}

export default Location
