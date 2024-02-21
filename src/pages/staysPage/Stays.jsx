import React from 'react'
import SearchBar from './SearchBar'
import Title from '../../components/Title'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ImageGrid from '../../components/ImageGrid'
import PlaceCards from '../../components/PlaceCards'

const Stays = () => {

    const locations = ['Edinburgh', 'London', 'Cardiff']
    const stays = ['Hotel', 'B&B', 'Camping', 'Apartment']

    const array3 = [
        {
            name: 'Cardiff',
            image: 'https://images.pexels.com/photos/1088291/pexels-photo-1088291.jpeg',
            price: 87
        },
        {
            name: 'Manchester',
            image: 'https://images.pexels.com/photos/15023016/pexels-photo-15023016/free-photo-of-aerial-view-of-manchester-town-hall.jpeg',
            price: 81
        },
        {
            name: 'Newcastle',
            image: 'https://images.pexels.com/photos/2893285/pexels-photo-2893285.jpeg',
            price: 79
        },
        {
            name: 'Cardiff',
            image: 'https://images.pexels.com/photos/1088291/pexels-photo-1088291.jpeg',
            price: 98
        },
        {
            name: 'Manchester',
            image: 'https://images.pexels.com/photos/15023016/pexels-photo-15023016/free-photo-of-aerial-view-of-manchester-town-hall.jpeg',
            price: 101
        },
        {
            name: 'Newcastle',
            image: 'https://images.pexels.com/photos/2893285/pexels-photo-2893285.jpeg',
            price: 109
        },
        {
            name: 'Cardiff',
            image: 'https://images.pexels.com/photos/1088291/pexels-photo-1088291.jpeg',
            price: 91
        },
        {
            name: 'Manchester',
            image: 'https://images.pexels.com/photos/15023016/pexels-photo-15023016/free-photo-of-aerial-view-of-manchester-town-hall.jpeg',
            price: 89
        },
        {
            name: 'Newcastle',
            image: 'https://images.pexels.com/photos/2893285/pexels-photo-2893285.jpeg',
            price: 95
        }
    ]

    const features = [
        {
            name: 'Station Hotel',
            location: 'Dundee',
            reviewText: 'Good',
            reviewCount: 666,
            reviewScore: 8.5,
            images: [
                {
                    image: 'https://images.pexels.com/photos/14194120/pexels-photo-14194120.jpeg'
                },
                {
                    image: 'https://images.pexels.com/photos/13012302/pexels-photo-13012302.jpeg'
                },
                {
                    image: 'https://images.pexels.com/photos/3061345/pexels-photo-3061345.jpeg'
                }
            ],
            text: `new build wer wer we wr we we we we `,
            stars: ['fa-star', 'fa-star', 'fa-star'],
            price: 87
        },
        {
            name: 'Holiday Inn',
            location: 'York',
            reviewText: 'Great',
            reviewCount: 586,
            reviewScore: 9.5,
            images: [
                {
                    image: 'https://images.pexels.com/photos/14194120/pexels-photo-14194120.jpeg'
                },
                {
                    image: 'https://images.pexels.com/photos/13012302/pexels-photo-13012302.jpeg'
                },
                {
                    image: 'https://images.pexels.com/photos/3061345/pexels-photo-3061345.jpeg'
                }
            ],
            text: `some place wewer wer we we we rwe rwer we we rwe`,
            stars: ['fa-star', 'fa-star', 'fa-star', 'fa-star-half'],
            price: 95
        },
        {
            name: 'Sleeperz',
            location: 'Leeds',
            reviewText: 'Bad',
            reviewCount: 300,
            reviewScore: 7.3,
            images: [
                {
                    image: 'https://images.pexels.com/photos/14194120/pexels-photo-14194120.jpeg'

                },
                {
                    image: 'https://images.pexels.com/photos/13012302/pexels-photo-13012302.jpeg'

                },
                {
                    image: 'https://images.pexels.com/photos/3061345/pexels-photo-3061345.jpeg'
                }
            ],
            text: `great place sdfjkasdkfhlaflawe er gav b  ag w  wer`,
            stars: ['fa-star', 'fa-star'],
            price: 107
        }
    ]

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Title>
                            <h1>
                                Find Your perfect Stay
                            </h1>
                            <p>
                                No Matter Your Preference We Have A Bed For You
                            </p>
                        </Title>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <SearchBar locations={locations} stays={stays} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <ImageGrid array3={array3}>
                            <h1>Discover Popular Stays</h1>
                        </ImageGrid>
                    </Col>
                </Row >
                <hr />
                <Row>
                    <Col>
                        <PlaceCards features={features}>
                            <h1>Our Top Picks</h1>
                            <p>Investigate These Stays We Love</p>
                        </PlaceCards>
                    </Col>
                </Row >
                <hr />
                <Row>
                    <Col>
                        <PlaceCards features={features}>
                            <h1>Highest Reviewed</h1>
                            <p>Stay Somewhere Trusted</p>
                        </PlaceCards>
                    </Col>
                </Row >

            </Container>
        </>
    )
}

export default Stays
