import React from 'react'
import Title from '../../components/Title'
import SearchBar from './SearchBar'
import SearchCardHolder from './SearchCardHolder'
import SearchCriteriaHolder from './SearchCriteriaHolder'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Search = () => {

    const locations = ['Edinburgh', 'London', 'Cardiff']
    const places = ['Stays', 'Attractions', 'Dining']


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
            category: 'Stay',
            type: 'Apartment',
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
            category: 'Stay',
            type: 'Studio',
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
            text: `some place wewer wer we we we rwe rwer we `,
            stars: ['fa-star', 'fa-star', 'fa-star', 'fa-star-half'],
            price: 95
        },
        {
            name: 'Sleeperz',
            category: 'Stay',
            type: 'Hotel',
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
            text: `great place sdfjkasdkfhlaflawe er ga`,
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
                            <h1>Search</h1>
                        </Title>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SearchBar locations={locations} places={places} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className='text-center'>
                        <p className='text-primary'>Search Criteria:</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-md-3 col-12 order-1 g-0'>
                        <SearchCriteriaHolder />
                    </Col>
                    <Col className='col-md-9 col-12 order-2 g-0'>
                        <SearchCardHolder features={features} />
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Search
