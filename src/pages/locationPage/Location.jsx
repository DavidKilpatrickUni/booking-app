import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav';

import BigSwiper from '../../components/BigSwiper'
import SmallSwiper from '../../components/SmallSwiper'
import InteractiveMap from '../../components/InteractiveMap'
import PlaceImageBlock4 from '../../components/PlaceImageBlock4'
import AdvertBar from '../../components/AdvertBar'
import Title from '../../components/Title'
import Spinner from 'react-bootstrap/Spinner';

import { doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase.config'

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

                dinings.push(doc.data())

            });

            setMyStays(stays)
            setMyAttractions(attractions)
            setMyDinings(dinings)
            setLoading(false)
        }

        fetchData()

    }, [])

    return (
        < >

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

                            {/* <BigSwiper >
                                <h1>Highlights</h1>
                                <p>Best {myData.location} Has To Offer</p>
                            </BigSwiper> */}
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
