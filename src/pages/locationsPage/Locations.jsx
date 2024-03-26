import React from 'react'
import { useState, useEffect } from 'react'

import Title from '../../components/Title'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Spinner from 'react-bootstrap/Spinner';

import SearchBar from './SearchBar'
import ImageBlock from '../../components/ImageBlock'
import AdvertBar from '../../components/AdvertBar'
import Featured from '../../components/Featured'
import SmallSwiper from '../../components/SmallSwiper'

import { doc, getDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase.config'



const Locations = () => {

    const [myLocations, setMyLocations] = useState(null)
    const [myFeatured, setMyFeatured] = useState(null)
    const [ourPickArray, setOurPickArray] = useState(null)
    const [highReviewArray, setHighReviewArray] = useState(null)
    const [popularArray, setPopularArray] = useState(null)
    const [loading, setLoading] = useState(true)

    const featuredID = 'QTQ1gjt4U2gmppTvWFGL'

    useEffect(() => {

        const fetchData = async () => {

            const docRef = doc(db, "locationList", featuredID);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                // console.log("Document data:", docSnap.data());
                setMyFeatured(

                    docSnap.data()

                )
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }

            const locationListRef = collection(db, 'locationList')

            const collectionSnap = await getDocs(locationListRef)

            let locations = []

            collectionSnap.forEach((doc) => {
                return locations.push(
                    doc.data()
                )
            })

            setMyLocations(locations)
            setLoading(false)
        }

        fetchData()

    }, [])


    useEffect(() => {

        if (myLocations != null) {
            setOurPickArray(myLocations.filter((element) => element.ourPick === true))
        }

        if (myLocations != null) {

            const reviewSort = [...myLocations]
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
        }

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


    const adverts = [
        {
            icon: 'fa-hotel',
            stat: '1200+',
            title: 'Stays',
            message: 'From executive suites to camping, you are sure to find a place to stay'
        },
        {
            icon: 'fa-pen-to-square',
            stat: '2700+',
            title: 'Reviews',
            message: 'Explorers Have Left Lots Of Insights About Their Discoveries'
        },
        {
            icon: 'fa-star',
            stat: '250+',
            title: '5 Star Stays',
            message: 'Amazing Stays That Have Left Lasting Impressions On Their Guests'
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
                                    Great Locations
                                </h1>
                                <p>
                                    Many Areas Waiting To Be Explored
                                </p>
                            </Title>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <SearchBar locations={locations} />
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

                    <Row>
                        <Col>
                            <AdvertBar adverts={adverts} />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <Featured myFeatured={myFeatured}>
                                <h1>Our Favorite Location Right Now</h1>
                                <p>Find Out Why We Love This Area</p>
                            </Featured>
                        </Col>
                    </Row>
                    <hr />
                    {ourPickArray && <Row>
                        <Col>
                            <SmallSwiper array={ourPickArray}>
                                <h1>Our Top Picks</h1>
                                <p>Leave The Research To Us</p>
                            </SmallSwiper >
                        </Col>
                    </Row>}

                    <hr />
                    {highReviewArray && <Row>
                        <Col>
                            <SmallSwiper array={highReviewArray}>
                                <h1>Top Reviewed Locations</h1>
                                <p>Only The Best</p>
                            </SmallSwiper >
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

                </Container>
            }
        </>
    )
}

export default Locations
