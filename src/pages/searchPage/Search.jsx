import React, { useState, useEffect } from 'react'
import Title from '../../components/Title'
import SearchBar from './SearchBar'
import SearchCardHolder from './SearchCardHolder'
import SearchCriteriaHolder from './SearchCriteriaHolder'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner';

import { collection, getDocs } from 'firebase/firestore'

import { db } from '../../firebase.config'

const Search = () => {

    const [listing, setListing] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        const fetchListings = async () => {
            const listingsRef = collection(db, 'listings')

            const collectionSnap = await getDocs(listingsRef)

            let listings = []

            collectionSnap.forEach((doc) => {
                return listings.push({
                    id: doc.id,
                    data: doc.data()
                }

                )
            })
            setListing(listings)
            setLoading(false)
        }

        fetchListings()

    }, [])

    console.log(listing)
    console.log(loading)

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
            image: 'https://images.pexels.com/photos/14194120/pexels-photo-14194120.jpeg',
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
            image: 'https://images.pexels.com/photos/14194120/pexels-photo-14194120.jpeg',
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
            image: 'https://images.pexels.com/photos/14194120/pexels-photo-14194120.jpeg',
            text: `great place sdfjkasdkfhlaflawe er ga`,
            stars: ['fa-star', 'fa-star'],
            price: 107
        }
    ]

    console.log(features)

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
                    {/* <Col className='col-md-9 col-12 order-2 g-0'>
                        <SearchCardHolder features={features} />
                    </Col> */}



                    {loading && <Col className='col-md-9 col-12 order-2 g-0 text-center text-primary'>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Col>}


                    {!loading && <Col className='col-md-9 col-12 order-2 g-0'>
                        <SearchCardHolder listing={listing} />
                    </Col>}
                </Row>
            </Container>

        </>
    )
}

export default Search
