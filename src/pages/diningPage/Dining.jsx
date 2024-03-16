import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Title from '../../components/Title'
import Nav from 'react-bootstrap/Nav';

import ReviewScore from '../../components/ReviewScore'
import Questions from '../../components/Questions';
import MenuSquares from '../../components/MenuSquares'
import ReviewBars from '../../components/ReviewBars'
import ReviewCardHolder from '../../components/ReviewCardHolder'
import PlaceImageBlock3 from '../../components/PlaceImageBlock3'

import { doc, getDoc, updateDoc, collection, getDocs, query, where, orderBy, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'


import Spinner from 'react-bootstrap/Spinner';
import PlaceHighlightsBlock from '../../components/PlaceHighlightsBlock'
import InteractiveMap from '../../components/InteractiveMap'
import FinePrint from '../../components/FinePrint'
import Surroundings from '../../components/Surroundings'



const data =
{
    name: 'The Polwarth Apartment',
    address: '112 Polwarth Gardens Apartment 5, Edinburgh, EH11 1LH, United Kingdom',
    text: `You're eligible for a Genius discount at The Polwarth Apartment! To save at this property, all you have to do is sign in.

The Polwarth Apartment in Edinburgh offers accommodation with free WiFi, 1.8 km from EICC, 2.7 km from National Museum of Scotland and 2.9 km from The Real Mary King's Close. The property is set 3.2 km from University of Edinburgh, 3.2 km from Camera Obscura and World of Illusions and 3.3 km from Royal Mile. Edinburgh Castle is 3.4 km from the apartment and Murrayfield Stadium is 3.4 km away.

The spacious apartment features 2 bedrooms, a flat-screen TV with streaming services, a fully equipped kitchen with an oven and a microwave, a washing machine, and 1 bathroom with a walk-in shower. Towels and bed linen are featured in the apartment. This apartment is allergy-free and non-smoking.

Edinburgh Waverley station is 4.3 km from the apartment, while Edinburgh Zoo is 4.7 km away. The nearest airport is Edinburgh Airport, 10 km from The Polwarth Apartment.

Couples particularly like the location — they rated it 9.5 for a two-person trip.`,

    highlights: [
        {
            name: 'Wifi',
            icon: 'fa-wifi'
        },
        {
            name: 'Bath',
            icon: 'fa-bath'
        },
        {
            name: 'Air Conditioning',
            icon: 'fa-fan'
        },
        {
            name: 'Non-Smoking ',
            icon: 'fa-ban-smoking'
        },
        {
            name: 'Deposit Box',
            icon: 'fa-vault'
        },
        {
            name: 'Heating',
            icon: 'fa-fire'
        },
        {
            name: 'Lift',
            icon: 'fa-elevator'
        },
        {
            name: 'Parking',
            icon: 'fa-square-parking'
        }
    ],

    images: [
        'https://images.pexels.com/photos/7363781/pexels-photo-7363781.jpeg',
        'https://images.pexels.com/photos/2290070/pexels-photo-2290070.jpeg',
        'https://images.pexels.com/photos/601169/pexels-photo-601169.jpeg',
        'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg',
        'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg',
        'https://images.pexels.com/photos/1571077/pexels-photo-1571077.jpeg',
        'https://images.pexels.com/photos/3615386/pexels-photo-3615386.jpeg',
        'https://images.pexels.com/photos/16471975/pexels-photo-16471975/free-photo-of-hand-holding-food-with-chopsticks.jpeg'


    ],

    review: {
        average: 8.5,
        text: 'Very Good',
        amount: 139,
        categories: [
            {
                category: 'Staff',
                score: 9.3
            },
            {
                category: 'Facilities',
                score: 8.8
            },
            {
                category: 'Cleanliness',
                score: 9.1
            },
            {
                category: 'Comfort',
                score: 9.0
            },
            {
                category: 'Value',
                score: 8.6
            },
            {
                category: 'Location',
                score: 8.9
            }
        ]
    },
    houserules: [
        {
            category: 'Check-In',
            icon: 'fa-arrow-right-to-bracket',
            text: `From 15:00 to 00:00\n
Guests are required to show a photo identification and credit card upon check-in`
        },
        {
            category: 'Check-Out',
            icon: 'fa-arrow-right-from-bracket',
            text: `Until 11:00`
        },
        {
            category: 'Cancelation / Prepayment',
            icon: 'fa-circle-info',
            text: `Cancellation and prepayment policies vary according to accommodation type. Please enter the dates of your stay and check the conditions of your required room.`
        },
        {
            category: 'Children & Beds',
            icon: 'fa-people-roof',
            text: `Children under age of 13.\nDouble bed and single bed`
        },
        {
            category: 'Age Restriction',
            icon: 'fa-person',
            text: `The minimum age for check-in is 18`
        },
        {
            category: 'Smoking',
            icon: 'fa-smoking',
            text: `No Smoking`
        },
        {
            category: 'Parties',
            icon: 'fa-champagne-glasses',
            text: `No Group Parties`
        },
        {
            category: 'Quiet Hours',
            icon: 'fa-moon',
            text: `0:00 - 8:00`
        },
        {
            category: 'Pets',
            icon: 'fa-paw',
            text: `Pets are not allowed.`
        }
    ]
}

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


    // console.log(myData)

    return (

        <>
            {!loading && <Container>
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
                        <PlaceImageBlock3 data={data} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <PlaceHighlightsBlock data={myData}></PlaceHighlightsBlock>
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
