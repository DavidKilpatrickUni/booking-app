import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav';
import Spinner from 'react-bootstrap/Spinner';

import Title from '../../components/Title'

import ReviewBars from '../../components/ReviewBars'
import InteractiveMap from '../../components/InteractiveMap'
import PlaceSwiper from '../../components/PlaceSwiper'
import PlaceImageBlock2 from '../../components/PlaceImageBlock2'
import ReviewCardHolder from '../../components/ReviewCardHolder'
import ReviewScore from '../../components/ReviewScore'
import Questions from '../../components/Questions';
import FinePrint from '../../components/FinePrint';
import PlaceHighlightsBlock from '../../components/PlaceHighlightsBlock'
import Facilities from '../../components/Facilities';
import Surroundings from '../../components/Surroundings';

import { doc, getDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase.config'


const Attraction = () => {

    const params = useParams()

    const [myData, setMyData] = useState(null)
    const [myReviews, setMyReviews] = useState(null)
    const [myQuestions, setMyQuestions] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchData = async () => {

            let docID = ''

            const docRef = doc(db, "attractions", params.id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setMyData(docSnap.data())
                docID = docSnap.id
            } else {
                console.log("No such document!");
            }

            const subReviews = await getDocs(collection(db, "attractions", docID, "reviews"));

            let responseReviews = []

            subReviews.forEach((doc) => {
                return responseReviews.push(
                    doc.data()
                )
            });

            const subQuestions = await getDocs(collection(db, "attractions", docID, "questions"));

            let responseQuestions = []

            subQuestions.forEach((doc) => {

                return responseQuestions.push(
                    doc.data()
                )
            });

            setMyReviews(responseReviews)
            setMyQuestions(responseQuestions)
            setLoading(false)

        }

        fetchData()

    }, [])

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

            {!loading && <Container>
                <Row>
                    <Col >
                        <Title >
                            <h1>
                                {myData.name}
                            </h1>
                            <p>
                                {myData.summary}
                            </p>
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
                                <Nav.Link
                                    href="#reviews" eventKey="link-1">Reviews</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    href="#questions" eventKey="link-2">Questions</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    href="#facilities" eventKey="link-3">Facilities</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    href="#map" eventKey="link-4">Map</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    href="#finePrint" eventKey="link-5">Fine Print</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className='d-block d-lg-none'>
                        <PlaceSwiper data={myData} />

                    </Col>
                    <Col className='d-none d-lg-block'>

                        <PlaceImageBlock2 data={myData} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <PlaceHighlightsBlock data={myData}></PlaceHighlightsBlock>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p>{myData.text}</p>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col id='reviews'>
                        <ReviewScore data={myData}>
                            <h1>Reviews</h1>
                        </ReviewScore>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ReviewBars data={myData}>
                        </ReviewBars>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col >
                        <ReviewCardHolder data={myData} reviews={myReviews} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col id='questions'>
                        <Questions questions={myQuestions}>
                            <h1>Questions</h1>
                            <p>Frequent Asked</p>
                        </Questions>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col id='facilities'>
                        <Facilities facilities={myData.facilities} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <h1 id='map'>
                            Interactive Map
                        </h1>
                        <p>
                            Have A Look At The Area And View Some Of Our Suggested Places
                        </p>
                        <InteractiveMap featured={myData.map} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Surroundings surroundings={myData.surroundings} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col id='finePrint'>
                        <FinePrint fine={myData.fine}>
                            <h1 >
                                Fine Print
                            </h1>
                            <p>
                                Need-to-know information for guests visiting this attraction
                            </p>
                        </FinePrint>
                    </Col>
                </Row>



            </Container>}
        </>
    )
}

export default Attraction

