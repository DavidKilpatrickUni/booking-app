import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Title from '../../components/Title'
import Nav from 'react-bootstrap/Nav';
import Spinner from 'react-bootstrap/Spinner';

import ReviewScore from '../../components/ReviewScore'
import Questions from '../../components/Questions';
import MenuSquares from '../../components/MenuSquares'
import ReviewBars from '../../components/ReviewBars'
import ReviewCardHolder from '../../components/ReviewCardHolder'
import PlaceImageBlock3 from '../../components/PlaceImageBlock3'
import PlaceHighlightsBlock from '../../components/PlaceHighlightsBlock'
import InteractiveMap from '../../components/InteractiveMap'
import FinePrint from '../../components/FinePrint'
import Surroundings from '../../components/Surroundings'


import { doc, getDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase.config'

const Dining = () => {


    const [myData, setMyData] = useState(null)
    const [myReviews, setMyReviews] = useState(null)
    const [myQuestions, setMyQuestions] = useState(null)
    const [loading, setLoading] = useState(true)

    const params = useParams()

    useEffect(() => {

        const fetchData = async () => {

            let docID = ''

            const docRef = doc(db, "dinings", params.id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                // console.log("Document data:", docSnap.data());
                setMyData(docSnap.data())
                docID = docSnap.id
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }

            const subReviews = await getDocs(collection(db, "dinings", docID, "reviews"));

            let responseReviews = []

            subReviews.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                return responseReviews.push(
                    doc.data()
                )
            });

            const subQuestions = await getDocs(collection(db, "dinings", docID, "questions"));

            let responseQuestions = []

            subQuestions.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
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


    console.log(myData)

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
                                        href="#menus" eventKey="link-1">Menus</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        href="#reviews" eventKey="link-2">Reviews</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        href="#questions" eventKey="link-3">Questions</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        href="#facilities" eventKey="link-4">Facilities</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        href="#map" eventKey="link-5">Map</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        href="#finePrint" eventKey="link-6">Fine Print</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col id='overview'>
                            <PlaceImageBlock3 data={myData} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <PlaceHighlightsBlock data={myData.highlights}></PlaceHighlightsBlock>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <p>{myData.text}</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col id='menus'>
                            <MenuSquares myData={myData}>
                                <h1>Menus</h1>
                                <p>Browse Whats On Offer</p>
                            </MenuSquares >
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
                                    Need-to-know information for guests dining here
                                </p>
                            </FinePrint>
                        </Col>
                    </Row>
                </Container>}
        </>
    )
}

export default Dining
