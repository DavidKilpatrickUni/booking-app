import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PlaceImageBlock from '../../components/PlaceImageBlock'
import PlaceHighlightsBlock from '../../components/PlaceHighlightsBlock'
import Title from '../../components/Title'
import ReviewBars from '../../components/ReviewBars'
import HouseRules from './HouseRules'



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
                    <Col>
                        {data.text}
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <ReviewBars data={data} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <HouseRules data={data} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Stay
