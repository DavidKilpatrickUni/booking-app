import React from 'react'
import { useState, useEffect } from 'react'


import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner';

import SearchBar from './SearchBar'
import Title from '../../components/Title'
import ImageGrid2 from '../../components/ImageGrid2'
import AdvertBar from '../../components/AdvertBar'
import SmallSwiper from '../../components/SmallSwiper'
import TabComponent from '../../components/TabComponent'
import InfoPicLeft from '../../components/InfoPicLeft'

import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase.config'


const Attractions = () => {

    const [myAttractions, setMyAttractions] = useState(null)
    const [ourPickArray, setOurPickArray] = useState(null)
    const [highReviewArray, setHighReviewArray] = useState(null)
    const [popularArray, setPopularArray] = useState(null)

    const [tabsArray, setTabsArray] = useState(null)

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchData = async () => {

            const attractionListRef = collection(db, 'attractionList')

            const collectionSnap = await getDocs(attractionListRef)

            let attractions = []

            collectionSnap.forEach((doc) => {
                return attractions.push(
                    doc.data()
                )
            })


            const tabsListRef = collection(db, 'attractionTabs')

            const tabsSnap = await getDocs(tabsListRef)

            let tabs = []

            tabsSnap.forEach((doc) => {
                return tabs.push(
                    doc.data()
                )
            })


            setMyAttractions(attractions)
            setTabsArray(tabs)
        }

        fetchData()

    }, [])

    //console.log(myAttractions)
    console.log(tabsArray)

    useEffect(() => {

        if (myAttractions != null) {
            setOurPickArray(myAttractions.filter((element) => element.ourPick === true))
        }

        if (myAttractions != null) {

            const reviewSort = [...myAttractions]
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

            setHighReviewArray(reviewSort.slice(0, 10))
        }

        if (myAttractions != null) {

            const popularSort = [...myAttractions]
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
            setLoading(false)
        }

    }, [myAttractions])


    const adverts = [
        {
            icon: 'fa-map-location-dot',
            stat: '',
            title: 'Explore top attractions',
            message: 'Experience the best of your destination, with attractions, tours, activities and more'
        },
        {
            icon: 'fa-calendar-days',
            stat: '',
            title: 'Fast and flexible',
            message: 'Book tickets online in minutes, with free cancellation on many attractions'
        },
        {
            icon: 'fa-phone-volume',
            stat: '',
            title: 'Support when you need it',
            message: `Booking.com's global Customer Service team is here to help 24/7`
        }
    ]

    const details = {
        location: 'Edinburgh',
        name: 'Dynamic Earth',
        info: `Dynamic Earth, a five star visitor attraction in Edinburgh, gives you the chance to experience the primeval forces of nature as they shaped our planet, to journey through space and time and even go on a 4DVENTURE around the world. You'll be embarking on the interactive adventure of a lifetime - the lifetime of our planet.
        `,
        pic: 'https://images.pexels.com/photos/14551495/pexels-photo-14551495.jpeg',
        refID: 'r3Jf824NqIuRup9oBwpc'

    }

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
                                <h1>Attractions</h1>
                                <p>Find Something New & Interesting</p>
                            </Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <SearchBar />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <ImageGrid2 array3={popularArray}>
                                <h1>Discover Popular Attractions</h1>
                            </ImageGrid2>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <h1>In The Spotlight</h1>
                            <p>Best Place To Visit Right Now</p>
                            <InfoPicLeft details={details} />
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
                            <SmallSwiper array={ourPickArray}>
                                <h1>Our Top Picks</h1>
                                <p>Our Attraction Picks</p>
                            </SmallSwiper >
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <SmallSwiper array={highReviewArray}>
                                <h1>High Rated Attractions</h1>
                                <p>Best Attractions On Offer</p>
                            </SmallSwiper >
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <h1>All Attractions</h1>
                            <TabComponent tabs={tabsArray} tabInfo={myAttractions} />
                        </Col>
                    </Row>
                    <hr />


                </Container>}

        </>
    )
}

export default Attractions
