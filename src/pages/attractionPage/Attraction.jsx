import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Title from '../../components/Title'

import ReviewBars from '../../components/ReviewBars'
import InteractiveMap from '../../components/InteractiveMap'
import PlaceSwiper from '../../components/PlaceSwiper'
import PlaceImageBlock2 from '../../components/PlaceImageBlock2'
import ReviewCardHolder from '../../components/ReviewCardHolder'
import ReviewScore from '../../components/ReviewScore'


const Attraction = () => {

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
                    category: 'Value For Money',
                    score: 8.6
                },
                {
                    category: 'Location',
                    score: 8.9
                }
            ]
        }
    }

    const featured =
    {
        location: 'Aberdeen',
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
        text: `Aberdeen  Scots: Aiberdeen; Scottish Gaelic: Obar Dheathain ; Latin: Aberdonia) is a city in North East Scotland, and is the third most populous Scottish city. Aberdeen is one of Scotland s 32 local government council areas(as Aberdeen City[7]), and has a 2020 population estimate of 198, 590 for the city, [3] making it the United Kingdoms 39th most populous built-up area, and 227,430 for the wider council area including outlying localities.[4] The city is 93 mi (150 km) northeast of Edinburgh and 398 mi (641 km) north of London, and is the northernmost major city in the United Kingdom. Aberdeen has a long, sandy coastline and features an oceanic climate, with cool summers and mild, rainy winters.[8]`,
        lat: '57.149446',
        lng: '-2.093752',
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
            {
                location: 'Aberdeen',
                category: 'stay',
                placeName: 'Hotel A',
                address: '9 Bridge St, Aberdeen AB11 6JL',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                lat: '57.146478',
                lng: '-2.095684',
                image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
                review: {
                    score: 8.7,
                    count: 100
                }
            },
            {
                location: 'Aberdeen',
                category: 'stay',
                placeName: 'Hotel B',
                address: '9 Bridge St, Aberdeen AB11 6JL',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                lat: '57.154636',
                lng: '-2.085430',
                image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
                review: {
                    score: 8.7,
                    count: 100
                }
            }
        ],
        attractionMarkers: [
            {
                location: 'Aberdeen',
                category: 'attraction',
                placeName: 'Castle',
                address: '9 Bridge St, Aberdeen AB11 6JL',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                lat: '57.150109',
                lng: '-2.102335',
                image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
                review: {
                    score: 8.7,
                    count: 100
                }
            },
            {
                location: 'Aberdeen',
                category: 'attraction',
                placeName: 'Pool',
                address: '9 Bridge St, Aberdeen AB11 6JL',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                lat: '57.153957',
                lng: '-2.099069',
                image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
                review: {
                    score: 8.7,
                    count: 100
                }
            }
        ],
        restaurantMarkers: [
            {
                location: 'Aberdeen',
                category: 'dining',
                placeName: 'Kfc',
                address: '9 Bridge St, Aberdeen AB11 6JL',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                lat: '57.150576',
                lng: '-2.094169',
                image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
                review: {
                    score: 8.7,
                    count: 100
                }
            },
            {
                location: 'Aberdeen',
                category: 'dining',
                placeName: 'Mcdonalds',
                address: '9 Bridge St, Aberdeen AB11 6JL',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                lat: '57.143907',
                lng: '-2.093455',
                image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
                review: {
                    score: 8.7,
                    count: 100
                }
            }
        ],
        barMarkers: [
            {
                location: 'Aberdeen',
                category: 'dining',
                placeName: 'Queens Bar',
                address: '9 Bridge St, Aberdeen AB11 6JL',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                lat: '57.150192',
                lng: '-2.081104',
                image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
                review: {
                    score: 8.7,
                    count: 100
                }
            },
            {
                location: 'Aberdeen',
                category: 'dining',
                placeName: 'Kings Bar',
                address: '9 Bridge St, Aberdeen AB11 6JL',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                lat: '57.158110',
                lng: '-2.096698',
                image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
                review: {
                    score: 8.7,
                    count: 100
                }
            }
        ],
        coffeeMarkers: [
            {
                location: 'Aberdeen',
                category: 'dining',
                placeName: 'Bucks',
                address: '9 Bridge St, Aberdeen AB11 6JL',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                lat: '57.145813',
                lng: '-2.077766',
                image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
                review: {
                    score: 8.7,
                    count: 100
                }
            },
            {
                location: 'Aberdeen',
                category: 'dining',
                placeName: 'Costa',
                address: '9 Bridge St, Aberdeen AB11 6JL',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                lat: '57.150686',
                lng: '-2.086262',
                image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
                review: {
                    score: 8.7,
                    count: 100
                }
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
    ]

    return (
        <>
            <Container>
                <Row>
                    <Col >
                        <Title >
                            <h1>
                                Some Attraction
                            </h1>
                            <p>
                                Great place to visit
                            </p>
                        </Title>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-block d-lg-none'>
                        <PlaceSwiper data={data} />

                    </Col>
                    <Col className='d-none d-lg-block'>

                        <PlaceImageBlock2 data={data} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <InteractiveMap featured={featured} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <ReviewScore data={data}>
                            <h1>Reviews</h1>
                        </ReviewScore>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ReviewBars data={data}>
                        </ReviewBars>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <ReviewCardHolder reviews={reviews} data={data} />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Attraction

