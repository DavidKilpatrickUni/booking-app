import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import SearchBar from './SearchBar'
import Title from '../../components/Title'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ImageGrid from '../../components/ImageGrid'
import PlaceCards from '../../components/PlaceCards'
import AdvertBar from '../../components/AdvertBar'

import { doc, getDoc, updateDoc, collection, getDocs, query, where, orderBy, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'

const Stays = () => {

    const [myLocations, setMyLocations] = useState(null)
    const [myStays, setMyStays] = useState(null)
    const [popularArray, setPopularArray] = useState(null)
    const [ourPickArray, setOurPickArray] = useState(null)
    const [highReviewArray, setHighReviewArray] = useState(null)

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchData = async () => {

            const locationListRef = collection(db, 'locationList')

            const locationSnap = await getDocs(locationListRef)

            let locations = []

            locationSnap.forEach((doc) => {
                return locations.push(
                    doc.data()
                )
            })

            const stayListRef = collection(db, 'listings')

            const staysSnap = await getDocs(stayListRef)

            let stays = []

            staysSnap.forEach((doc) => {
                return stays.push(doc.data()
                )
            })

            setMyLocations(locations)
            setMyStays(stays)

        }

        fetchData()

    }, [])

    useEffect(() => {

        if (myStays != null) {

            const popularSort = [...myStays]
            popularSort.sort((a, b) => {
                const visitedA = a.visited;
                const visitedB = b.visited;

                if (visitedA < visitedB) {
                    return 1;
                }
                if (visitedA > visitedB) {
                    return -1;
                }

                return 0

            })

            setPopularArray(popularSort.slice(0, 5))
        }

        if (myStays != null) {
            setOurPickArray(myStays.filter((element) => element.ourPick === true))
        }

        if (myStays != null) {

            const reviewSort = [...myStays]
            reviewSort.sort((a, b) => {
                const reviewA = a.reviewScore;
                const reviewB = b.reviewScore;

                if (reviewA < reviewB) {
                    return 1;
                }
                if (reviewA > reviewB) {
                    return -1;
                }

                return 0

            })

            setHighReviewArray(reviewSort.slice(0, 5))
            setLoading(false)
        }

    }, [myStays])

    // console.log(myLocations)
    console.log(highReviewArray)

    const locations = ['Edinburgh', 'London', 'Cardiff']
    const stays = ['Hotel', 'B&B', 'Camping', 'Apartment']

    const array3 = [
        {
            name: 'Cardiff',
            image: 'https://images.pexels.com/photos/1088291/pexels-photo-1088291.jpeg',
            price: 87
        },
        {
            name: 'Manchester',
            image: 'https://images.pexels.com/photos/15023016/pexels-photo-15023016/free-photo-of-aerial-view-of-manchester-town-hall.jpeg',
            price: 81
        },
        {
            name: 'Newcastle',
            image: 'https://images.pexels.com/photos/2893285/pexels-photo-2893285.jpeg',
            price: 79
        },
        {
            name: 'Cardiff',
            image: 'https://images.pexels.com/photos/1088291/pexels-photo-1088291.jpeg',
            price: 98
        },
        {
            name: 'Manchester',
            image: 'https://images.pexels.com/photos/15023016/pexels-photo-15023016/free-photo-of-aerial-view-of-manchester-town-hall.jpeg',
            price: 101
        },
        {
            name: 'Newcastle',
            image: 'https://images.pexels.com/photos/2893285/pexels-photo-2893285.jpeg',
            price: 109
        },
        {
            name: 'Cardiff',
            image: 'https://images.pexels.com/photos/1088291/pexels-photo-1088291.jpeg',
            price: 91
        },
        {
            name: 'Manchester',
            image: 'https://images.pexels.com/photos/15023016/pexels-photo-15023016/free-photo-of-aerial-view-of-manchester-town-hall.jpeg',
            price: 89
        },
        {
            name: 'Newcastle',
            image: 'https://images.pexels.com/photos/2893285/pexels-photo-2893285.jpeg',
            price: 95
        }
    ]

    const features = [
        {
            name: 'Station Hotel',
            location: 'Dundee',
            reviewText: 'Good',
            reviewCount: 666,
            reviewScore: 8.5,
            images: [
                {
                    image: 'https://images.pexels.com/photos/14194120/pexels-photo-14194120.jpeg'
                },
                {
                    image: 'https://images.pexels.com/photos/13012302/pexels-photo-13012302.jpeg'
                },
                {
                    image: 'https://images.pexels.com/photos/3061345/pexels-photo-3061345.jpeg'
                }
            ],
            text: `new build wer wer we wr we we we we `,
            stars: ['fa-star', 'fa-star', 'fa-star'],
            price: 87
        },
        {
            name: 'Holiday Inn',
            location: 'York',
            reviewText: 'Great',
            reviewCount: 586,
            reviewScore: 9.5,
            images: [
                {
                    image: 'https://images.pexels.com/photos/14194120/pexels-photo-14194120.jpeg'
                },
                {
                    image: 'https://images.pexels.com/photos/13012302/pexels-photo-13012302.jpeg'
                },
                {
                    image: 'https://images.pexels.com/photos/3061345/pexels-photo-3061345.jpeg'
                }
            ],
            text: `some place wewer wer we we we rwe rwer we we rwe`,
            stars: ['fa-star', 'fa-star', 'fa-star', 'fa-star-half'],
            price: 95
        },
        {
            name: 'Sleeperz',
            location: 'Leeds',
            reviewText: 'Bad',
            reviewCount: 300,
            reviewScore: 7.3,
            images: [
                {
                    image: 'https://images.pexels.com/photos/14194120/pexels-photo-14194120.jpeg'

                },
                {
                    image: 'https://images.pexels.com/photos/13012302/pexels-photo-13012302.jpeg'

                },
                {
                    image: 'https://images.pexels.com/photos/3061345/pexels-photo-3061345.jpeg'
                }
            ],
            text: `great place sdfjkasdkfhlaflawe er gav b  ag w  wer`,
            stars: ['fa-star', 'fa-star'],
            price: 107
        }
    ]

    const adverts = [
        {
            icon: 'fa-hotel',
            stat: '1200+',
            title: 'Stays',
            message: 'From executive suites to camping, you are sure to find a place to stay'
        },
        {
            icon: 'fa-star',
            stat: '100+',
            title: '5-Star',
            message: 'Stay in luxury. Get a great night stay somewhere memorable'
        },
        {
            icon: 'fa-piggy-bank',
            stat: '£',
            title: 'Price',
            message: 'So much choice and offers to fit any budget'
        }
    ]

    return (
        <>
            {!loading && <Container>
                <Row>
                    <Col>
                        <Title>
                            <h1>
                                Find Your perfect Stay
                            </h1>
                            <p>
                                No Matter Your Preference We Have A Bed For You
                            </p>
                        </Title>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <SearchBar locations={locations} stays={stays} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <ImageGrid array3={myLocations.slice(0, 9)}>
                            <h1>Discover Popular Stays</h1>
                        </ImageGrid>
                    </Col>
                </Row >
                <hr />
                <Row>
                    <Col>
                        <PlaceCards features={ourPickArray}>
                            <h1>Our Top Picks</h1>
                            <p>Investigate These Stays We Love</p>
                        </PlaceCards>
                    </Col>
                </Row >

                <Row>
                    <Col>
                        <AdvertBar adverts={adverts} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <PlaceCards features={popularArray}>
                            <h1>Discover Popular Stays</h1>
                            <p>Other Explorers Visit Here</p>
                        </PlaceCards>
                    </Col>
                </Row >
                <hr />
                <Row>
                    <Col>
                        <PlaceCards features={highReviewArray}>
                            <h1>Highest Reviewed</h1>
                            <p>Stay Somewhere Trusted</p>
                        </PlaceCards>
                    </Col>
                </Row >

            </Container>}
        </>
    )
}

export default Stays
