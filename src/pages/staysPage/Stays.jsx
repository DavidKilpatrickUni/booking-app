import React from 'react'
import { useState, useEffect } from 'react'

import SearchBar from './SearchBar'
import Title from '../../components/Title'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner';

import ImageGrid from '../../components/ImageGrid'
import PlaceCards from '../../components/PlaceCards'
import AdvertBar from '../../components/AdvertBar'

import { collection, getDocs } from 'firebase/firestore'
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

            setPopularArray(popularSort.slice(0, 6))
        }

        if (myStays != null) {
            setOurPickArray(myStays.filter((element) => element.ourPick === true).slice(0, 6))
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

            setHighReviewArray(reviewSort.slice(0, 6))
            setLoading(false)
        }

    }, [myStays])

    const locations = [
        {
            location: 'Aberdeen',
            refID: 'kOdNplPNb5qN0q87p8FI'
        },
        {
            location: 'Edinburgh',
            refID: 'PxivP523oeXKTs4f9NW8'
        },
        {
            location: 'London',
            refID: 'gceCdMAypuywCSvfffGO'
        },
    ]
    const stays = ['Hotel', 'Studio', 'Apartment']

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
            {loading &&
                <Container>
                    <Row>
                        <Col className='d-flex align-items-center justify-content-center'>
                            <Spinner animation="border" role="status" variant="primary">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </Col>
                    </Row>
                </Container>
            }

            {!loading &&
                <Container>
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
                </Container>
            }
        </>
    )
}

export default Stays
