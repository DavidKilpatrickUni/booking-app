import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import BigSwiper from '../../components/BigSwiper'
import SmallSwiper from '../../components/SmallSwiper'
import InteractiveMap from '../../components/InteractiveMap'
import Nav from 'react-bootstrap/Nav';

import PlaceImageBlock4 from '../../components/PlaceImageBlock4'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import * as L from "leaflet";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'


import AdvertBar from '../../components/AdvertBar'


import Title from '../../components/Title'

import { doc, getDoc, updateDoc, collection, getDocs, query, where, orderBy, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'


import Spinner from 'react-bootstrap/Spinner';

const Location = () => {

    const params = useParams()

    const [myData, setMyData] = useState(null)
    const [myStays, setMyStays] = useState(null)
    const [myAttractions, setMyAttractions] = useState(null)
    const [myDinings, setMyDinings] = useState(null)
    const [loading, setLoading] = useState(true)

    console.log(params)


    useEffect(() => {

        const fetchData = async () => {

            const docRef = doc(db, "locations", params.id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                // console.log("Document data:", docSnap.data());
                setMyData(

                    docSnap.data()

                )

            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }



            const stayQ = query(collection(db, "listings"), where("location", "==", params.location));

            const staySnapshot = await getDocs(stayQ);

            let stays = []

            staySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                stays.push(doc.data())

            });

            const attractionQ = query(collection(db, "attractionList"), where("location", "==", params.location));

            const attractionSnapshot = await getDocs(attractionQ);

            let attractions = []

            attractionSnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                attractions.push(doc.data())

            });

            const diningQ = query(collection(db, "diningList"), where("location", "==", params.location));

            const diningSnapshot = await getDocs(diningQ);

            let dinings = []

            diningSnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                dinings.push(doc.data())

            });

            setMyStays(stays)
            setMyAttractions(attractions)
            setMyDinings(dinings)
            setLoading(false)
        }

        fetchData()

    }, [])





    console.log(myData)
    //console.log(myStays)
    //console.log(myAttractions)

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
                location: 'Aberdeen',
                category: 'stay',
                placeName: 'Hotel A',
                address: '9 Bridge St, Aberdeen AB11 6JL',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                lat: '57.146478',
                lng: '-2.095684',
                image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
                review: {
                    score: 8.7,
                    count: 100
                }
            },
            {
                location: 'Aberdeen',
                category: 'stay',
                placeName: 'Hotel B',
                address: '9 Bridge St, Aberdeen AB11 6JL',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                lat: '57.154636',
                lng: '-2.085430',
                image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
                review: {
                    score: 8.7,
                    count: 100
                }
            }
        ],
        attractionMarkers: [
            {
                location: 'Aberdeen',
                category: 'attraction',
                placeName: 'Castle',
                address: '9 Bridge St, Aberdeen AB11 6JL',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                lat: '57.150109',
                lng: '-2.102335',
                image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
                review: {
                    score: 8.7,
                    count: 100
                }
            },
            {
                location: 'Aberdeen',
                category: 'attraction',
                placeName: 'Pool',
                address: '9 Bridge St, Aberdeen AB11 6JL',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                lat: '57.153957',
                lng: '-2.099069',
                image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
                review: {
                    score: 8.7,
                    count: 100
                }
            }
        ],
        restaurantMarkers: [
            {
                location: 'Aberdeen',
                category: 'dining',
                placeName: 'Kfc',
                address: '9 Bridge St, Aberdeen AB11 6JL',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                lat: '57.150576',
                lng: '-2.094169',
                image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
                review: {
                    score: 8.7,
                    count: 100
                }
            },
            {
                location: 'Aberdeen',
                category: 'dining',
                placeName: 'Mcdonalds',
                address: '9 Bridge St, Aberdeen AB11 6JL',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                lat: '57.143907',
                lng: '-2.093455',
                image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
                review: {
                    score: 8.7,
                    count: 100
                }
            }
        ],
        barMarkers: [
            {
                location: 'Aberdeen',
                category: 'dining',
                placeName: 'Queens Bar',
                address: '9 Bridge St, Aberdeen AB11 6JL',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                lat: '57.150192',
                lng: '-2.081104',
                image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
                review: {
                    score: 8.7,
                    count: 100
                }
            },
            {
                location: 'Aberdeen',
                category: 'dining',
                placeName: 'Kings Bar',
                address: '9 Bridge St, Aberdeen AB11 6JL',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                lat: '57.158110',
                lng: '-2.096698',
                image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
                review: {
                    score: 8.7,
                    count: 100
                }
            }
        ],
        coffeeMarkers: [
            {
                location: 'Aberdeen',
                category: 'dining',
                placeName: 'Bucks',
                address: '9 Bridge St, Aberdeen AB11 6JL',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                lat: '57.145813',
                lng: '-2.077766',
                image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
                review: {
                    score: 8.7,
                    count: 100
                }
            },
            {
                location: 'Aberdeen',
                category: 'dining',
                placeName: 'Costa',
                address: '9 Bridge St, Aberdeen AB11 6JL',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                lat: '57.150686',
                lng: '-2.086262',
                image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
                review: {
                    score: 8.7,
                    count: 100
                }
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




    return (
        < >
            {!loading &&
                <Container>
                    <Row>
                        <Col>
                            <Title>
                                <h1>{myData.location}</h1>
                            </Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Nav justify defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link href="#overview">Overview</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#highlights">Highlights</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        href="#map" >Map</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        href="#stays" >Stays</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        href="#attractions" >Attractions</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        href="#dining" >Dining</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                    <hr />

                    <Row id='overview'>
                        <Col>
                            <PlaceImageBlock4 data={myData}>
                            </PlaceImageBlock4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>{myData.text}</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col id='highlights'>
                            <BigSwiper array4={array4}>
                                <h1>Highlights</h1>
                                <p>Best {myData.location} Has To Offer</p>
                            </BigSwiper>
                        </Col>
                    </Row>
                    <hr />
                    <h1 id='map'>
                        Interactive Map
                    </h1>
                    <p>
                        Have A Look At The Area And View Some Of Our Suggested Places
                    </p>
                    <Row>
                        <Col>
                            <InteractiveMap featured={myData} />
                            {/* <MapContainer
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


                        </MapContainer> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AdvertBar adverts={myData.stats} />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col id='stays'>
                            <SmallSwiper array={myStays}>
                                <h1>Stays</h1>
                            </SmallSwiper>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col id='attractions'>
                            <SmallSwiper array={myAttractions}>
                                <h1>Attractions</h1>
                            </SmallSwiper>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col id='dining'>
                            <SmallSwiper array={myDinings}>
                                <h1>Dining</h1>
                            </SmallSwiper>
                        </Col>
                    </Row>




                </Container>

            }

        </ >
    )
}

export default Location
