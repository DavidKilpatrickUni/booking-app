import React from 'react'
import { useState, useEffect } from 'react'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Title from '../../components/Title'
import SearchBar from './SearchBar'
import ImageBlock2 from '../../components/ImageBlock2'
import TabComponent from '../../components/TabComponent'
import InfoPicRight from '../../components/InfoPicRight'
import SmallSwiper from '../../components/SmallSwiper'
import Spinner from 'react-bootstrap/Spinner';

import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase.config'


const Dinings = () => {

    const [myDinings, setMyDinings] = useState(null)
    const [ourPickArray, setOurPickArray] = useState(null)
    const [highReviewArray, setHighReviewArray] = useState(null)
    const [popularArray, setPopularArray] = useState(null)


    const [tabsArray, setTabsArray] = useState(null)

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchData = async () => {

            const diningListRef = collection(db, 'diningList')

            const collectionSnap = await getDocs(diningListRef)

            let dinings = []

            collectionSnap.forEach((doc) => {
                return dinings.push(
                    doc.data()
                )
            })


            const tabsListRef = collection(db, 'diningsTab')

            const tabsSnap = await getDocs(tabsListRef)

            let tabs = []

            tabsSnap.forEach((doc) => {
                return tabs.push(
                    doc.data()
                )
            })


            setMyDinings(dinings)
            setTabsArray(tabs)
        }

        fetchData()

    }, [])


    useEffect(() => {

        if (myDinings != null) {
            setOurPickArray(myDinings.filter((element) => element.ourPick === true))
        }

        if (myDinings != null) {

            const reviewSort = [...myDinings]
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

        if (myDinings != null) {

            const popularSort = [...myDinings]
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
            setLoading(false)
        }

    }, [myDinings])

    const details = {
        location: 'Glasgow',
        name: 'The Social',
        info: `Welcome to The Social, your ultimate destination for a vibrant late-night experience in the heart of Glasgow city centre. Nestled in the bustling Royal Exchange Square, our stylish cocktail bar and restaurant boasts one of the best outdoor terraces in the city, offering breathtaking views and a perfect spot to unwind.
        `,
        pic: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg',
        refID: 'MWZ3JGwThj6wM9oLpY4v'
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
                                <h1>Food</h1>
                                <p>Find something</p>
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
                            <ImageBlock2 popularArray={popularArray}>
                                <h1>Popular Dining</h1>
                                <p>Explorers Loving These Areas</p>
                            </ImageBlock2>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <SmallSwiper array={ourPickArray}>
                                <h1>Our Best Picks</h1>
                                <p>Our Picks</p>
                            </SmallSwiper >
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <SmallSwiper array={highReviewArray}>
                                <h1>Top Rated Dining</h1>
                                <p>Great Dining On Offer</p>
                            </SmallSwiper >
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <h1>In The Spotlight</h1>
                            <p>Looking For A Great Night Out</p>
                            <InfoPicRight details={details} />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <SmallSwiper array={myDinings.filter((item) => item.type === 'Bar')}>
                                <h1>Night Out</h1>
                                <p>Brilliant Bars To Try</p>
                            </SmallSwiper >
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <SmallSwiper array={myDinings.filter((item) => item.type === 'Coffee')}>
                                <h1>Coffee Catchup</h1>
                                <p>Grab A Coffee Here</p>
                            </SmallSwiper >
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <h1>All Restaurants</h1>
                            <p>Search By Cuisine Type</p>
                            <TabComponent tabInfo={myDinings.filter((item) => item.type !== 'Bar').filter((element) => element.type !== 'Coffee')} tabs={tabsArray} />
                        </Col>
                    </Row>



                </Container>}
        </>
    )
}

export default Dinings
