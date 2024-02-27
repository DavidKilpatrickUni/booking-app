import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav';

import PlaceImageBlock from '../../components/PlaceImageBlock'
import PlaceHighlightsBlock from '../../components/PlaceHighlightsBlock'
import Title from '../../components/Title'
import ReviewBars from '../../components/ReviewBars'
import ReviewScore from '../../components/ReviewScore';
import HouseRules from './HouseRules'
import ReviewCardHolder from '../../components/ReviewCardHolder'
import Facilities from '../../components/Facilities';
import Surroundings from '../../components/Surroundings';
import InteractiveMap from '../../components/InteractiveMap';
import FinePrint from '../../components/FinePrint';
import Questions from '../../components/Questions';


const Stay = () => {


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
            'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
            'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg',
            'https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg',
            'https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg',
            'https://images.pexels.com/photos/14930629/pexels-photo-14930629.jpeg',
            'https://images.pexels.com/photos/14590688/pexels-photo-14590688.jpeg',
            '       https://images.pexels.com/photos/14590695/pexels-photo-14590695.jpeg',
            'https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg'
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

    const reviews = [
        {
            reviewer: 'jim',
            country: 'Spain',
            countryCode: 'ES',
            profilePic: "https://randomuser.me/api/portraits/men/70.jpg",
            group: 'solo',
            duration: '3 days',
            date: '03 May',
            score: '8.7',
            subject: 'Great',
            text: 'Good attraction',
            good: 'Price',
            bad: 'Queue',
            posted: '21 May',
            helpful: 0,
        },
        {
            reviewer: 'gary',
            country: 'Switzerland',
            countryCode: 'CH',
            profilePic: "https://randomuser.me/api/portraits/men/71.jpg",
            group: 'family',
            duration: '3 days',
            date: '03 May',
            score: '8.7',
            subject: 'Good',
            text: 'Good attraction',
            good: 'Price',
            bad: 'Queue',
            posted: '21 May',
            helpful: 0,
        },
        {
            reviewer: 'john',
            country: 'USA',
            countryCode: 'US',
            profilePic: "https://randomuser.me/api/portraits/men/72.jpg",
            group: 'couple',
            duration: '3 days',
            date: '03 May',
            score: '8.7',
            subject: 'Great',
            text: 'Good attraction',
            good: 'Price',
            bad: 'Queue',
            posted: '21 May',
            helpful: 0,
        },
        {
            reviewer: 'craig',
            country: 'sweden',
            countryCode: 'SE',
            profilePic: "https://randomuser.me/api/portraits/men/73.jpg",
            group: 'friends',
            duration: '3 days',
            date: '03 May',
            score: '8.7',
            subject: 'Poor',
            text: 'Good attraction',
            good: 'Price',
            bad: 'Queue',
            posted: '21 May',
            helpful: 0,
        },
        {
            reviewer: 'ted',
            country: 'Zimbabwe',
            countryCode: 'ZW',
            profilePic: "https://randomuser.me/api/portraits/men/74.jpg",
            group: 'friends',
            duration: '3 days',
            date: '03 May',
            score: '8.7',
            subject: 'Average',
            text: 'Good attraction',
            good: 'Price',
            bad: 'Queue',
            posted: '21 May',
            helpful: 0,
        },
        {
            reviewer: 'pete',
            country: 'Mexico',
            countryCode: 'MX',
            profilePic: "https://randomuser.me/api/portraits/men/75.jpg",
            group: 'friends',
            duration: '3 days',
            date: '03 May',
            score: '8.7',
            subject: 'Poor',
            text: 'Good attraction',
            good: 'Price',
            bad: 'Queue',
            posted: '21 May',
            helpful: 0,
        },
        {
            reviewer: 'max',
            country: 'France',
            countryCode: 'FR',
            profilePic: "https://randomuser.me/api/portraits/men/76.jpg",
            group: 'friends',
            duration: '3 days',
            date: '03 May',
            score: '8.7',
            subject: 'Average',
            text: 'Good attraction',
            good: 'Price',
            bad: 'Queue',
            posted: '21 May',
            helpful: 0,
        },
    ]

    const featured =
    {
        location: 'London',
        images: [
            {
                image: 'https://images.pexels.com/photos/14194120/pexels-photo-14194120.jpeg',
                imageInfo: 'Some building'
            },
            {
                image: 'https://images.pexels.com/photos/13012302/pexels-photo-13012302.jpeg',
                imageInfo: 'This square'
            },
            {
                image: 'https://images.pexels.com/photos/3061345/pexels-photo-3061345.jpeg',
                imageInfo: 'Fancy Area'
            }
        ],
        text: ``,
        lat: '51.502881',
        lng: '-0.106241',
        stats: [
            {
                icon: 'fa-hotel',
                stat: 100,
                title: 'Stays',
                message: null
            },
            {
                icon: 'fa-binoculars',
                stat: 67,
                title: 'Attractions',
                message: null
            },
            {
                icon: 'fa-utensils',
                stat: 185,
                title: 'Dining',
                message: null
            }
        ],
        hotelMarkers: [

        ],
        attractionMarkers: [

        ],
        restaurantMarkers: [

        ],
        barMarkers: [

        ],
        coffeeMarkers: [

        ]
    }

    const fine = `For advance purchase rates the card you booked with must be presented on arrival, along with a photo ID.\n
Guests are required to show a photo identification and credit card upon check-in. Please note that all Special Requests are subject to availability and additional charges may apply.\n
Please inform The Tower Hotel, London in advance of your expected arrival time. You can use the Special Requests box when booking, or contact the property directly with the contact details provided in your confirmation.\n
Guests under the age of 18 can only check in with a parent or official guardian.`


    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Title>
                            <h1>{data.name}</h1>
                            <small>{data.address}</small>
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
                                    href="#houseRules" eventKey="link-5">House Rules</Nav.Link>
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
                    <Col >
                        <PlaceImageBlock data={data}></PlaceImageBlock>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <PlaceHighlightsBlock data={data}></PlaceHighlightsBlock>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col id='overview'>
                        {data.text}
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col id='reviews'>
                        <ReviewScore data={data}>
                            <h1>Reviews</h1>
                        </ReviewScore>
                    </Col>
                </Row>

                <Row>
                    <Col id='reviews'>
                        <ReviewBars data={data}>

                        </ReviewBars>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col >
                        <ReviewCardHolder data={data} reviews={reviews} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col id='questions'>
                        <Questions>
                            <h1>Questions</h1>
                            <p>Frequent Asked</p>
                        </Questions>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col id='facilities'>
                        <Facilities />
                    </Col>
                </Row>

                <hr />
                <Row className='mb-3'>
                    <Col id='map'>
                        <h1 className='text-center text-md-start'>Map</h1>
                        <InteractiveMap featured={featured} />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Surroundings />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col id='houseRules'>
                        <HouseRules data={data} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col id='finePrint'>
                        <FinePrint fine={fine}>
                            <h1 >
                                Fine Print
                            </h1>
                            <p>
                                Need-to-know information for guests at this property
                            </p>
                        </FinePrint>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Stay
