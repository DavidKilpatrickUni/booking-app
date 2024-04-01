import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import SearchBar from './SearchBar'
import BigSwiper from '../../components/BigSwiper'
import SmallSwiper from '../../components/SmallSwiper'
import Title from '../../components/Title'
import AdvertBar from '../../components/AdvertBar'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ImageBlock from '../../components/ImageBlock'

import { doc, getDoc, updateDoc, collection, getDocs, query, where, orderBy, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'

import Spinner from 'react-bootstrap/Spinner';


const Home = () => {

    const [myLocations, setMyLocations] = useState(null)
    const [myStays, setMyStays] = useState(null)
    const [myAttractions, setMyAttractions] = useState(null)
    const [myDinings, setMyDinings] = useState(null)
    const [myOffers, setMyOffers] = useState(null)
    const [popularArray, setPopularArray] = useState(null)

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

            const attractionListRef = collection(db, 'attractionList')

            const attractionSnap = await getDocs(attractionListRef)

            let attractions = []

            attractionSnap.forEach((doc) => {
                return attractions.push(
                    doc.data()
                )
            })

            const diningListRef = collection(db, 'diningList')

            const diningSnap = await getDocs(diningListRef)

            let dinings = []

            diningSnap.forEach((doc) => {
                return dinings.push(doc.data()
                )
            })

            const offersRef = collection(db, 'offers')

            const offersSnap = await getDocs(offersRef)

            let offers = []

            offersSnap.forEach((doc) => {
                return offers.push(doc.data()
                )
            })

            setMyLocations(locations)
            setMyStays(stays)
            setMyAttractions(attractions)
            setMyDinings(dinings)
            setMyOffers(offers)
            setLoading(false)
        }

        fetchData()

    }, [])

    useEffect(() => {

        if (myLocations != null) {

            const popularSort = [...myLocations]
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

    }, [myLocations])

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


    console.log(myLocations)

    return (
        <>
            {!loading && <Container>
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
                        <BigSwiper array4={myOffers}>
                            <h1>Offers</h1>
                            <p>Make Huge Savings With These Deals</p>
                        </BigSwiper>
                    </Col>
                </Row>
                <hr />
                {popularArray && <Row>
                    <Col>
                        <ImageBlock popularArray={popularArray}>
                            <h1>Popular Locations</h1>
                            <p>Explorers Loving These Areas</p>
                        </ImageBlock>
                    </Col>
                </Row>}
                <hr />
                <Row>
                    <Col>
                        <SmallSwiper array={myLocations}>
                            <h1>All Locations</h1>
                            <p>Try Somewhere New</p>
                        </SmallSwiper >
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col >
                        <SmallSwiper array={myStays} >
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
                        <SmallSwiper array={myAttractions}>
                            <h1>Awesome Attractions</h1>
                            <p>Fun & Interesting Activities</p>
                        </SmallSwiper >
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <SmallSwiper array={myDinings}>
                            <h1>High Rated Dining</h1>
                            <p>Best Cuisine On Offer</p>
                        </SmallSwiper >
                    </Col>
                </Row>
            </Container >}


        </>


    )
}

export default Home
