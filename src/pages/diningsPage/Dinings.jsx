import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Title from '../../components/Title'
import SearchBar from './SearchBar'
import ImageBlock2 from '../../components/ImageBlock2'
import TabComponent from '../../components/TabComponent'
import InfoPicRight from '../../components/InfoPicRight'
import SmallSwiper from '../../components/SmallSwiper'

import { doc, getDoc, updateDoc, collection, getDocs, query, where, orderBy, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'

import Spinner from 'react-bootstrap/Spinner';

const Dinings = () => {

    const [myDinings, setMyDinings] = useState(null)
    const [ourPickArray, setOurPickArray] = useState(null)
    const [highReviewArray, setHighReviewArray] = useState(null)
    const [popularArray, setPopularArray] = useState(null)
    const [foodArray, setFoodArray] = useState(null)
    const [barArray, setBarArray] = useState(null)
    const [coffeeArray, setCoffeeArray] = useState(null)

    const [tabsArray, setTabsArray] = useState(null)

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchData = async () => {

            const diningListRef = collection(db, 'diningList')

            const collectionSnap = await getDocs(diningListRef)

            let dinings = []

            collectionSnap.forEach((doc) => {
                return dinings.push(
                    doc.data()
                )
            })


            const tabsListRef = collection(db, 'diningsTab')

            const tabsSnap = await getDocs(tabsListRef)

            let tabs = []

            tabsSnap.forEach((doc) => {
                return tabs.push(
                    doc.data()
                )
            })


            setMyDinings(dinings)
            setTabsArray(tabs)
        }

        fetchData()

    }, [])


    useEffect(() => {

        if (myDinings != null) {
            setOurPickArray(myDinings.filter((element) => element.ourPick === true))
        }

        if (myDinings != null) {

            const reviewSort = [...myDinings]
            reviewSort.sort((a, b) => {
                const reviewA = a.reviewScore;
                const reviewB = b.reviewScore;

                if (reviewA < reviewB) {
                    return 1;
                }
                if (reviewA > reviewB) {
                    return -1;
                }

                return 0

            })

            setHighReviewArray(reviewSort.slice(0, 10))
        }

        if (myDinings != null) {

            const popularSort = [...myDinings]
            popularSort.sort((a, b) => {
                const visitedA = a.visited;
                const visitedB = b.visited;

                if (visitedA < visitedB) {
                    return 1;
                }
                if (visitedA > visitedB) {
                    return -1;
                }

                return 0

            })

            setPopularArray(popularSort.slice(0, 5))
            setLoading(false)
        }

    }, [myDinings])

    //console.log(myDinings)
    //console.log(tabsArray)



    const array2 = [
        {
            location: 'Edinburgh',
            name: 'Some Bar',
            image: 'https://images.pexels.com/photos/941864/pexels-photo-941864.jpeg'
        },
        {
            location: 'London',
            name: 'Burger Joint',
            image: 'https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg'
        }
    ]

    const array3 = [
        {
            location: 'Cardiff',
            name: 'Pizza Slice',
            image: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg'
        },
        {
            location: 'Manchester',
            name: 'Fried Chicken',
            image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg'
        },
        {
            location: 'Newcastle',
            name: 'Chinese Place',
            image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg'
        }
    ]


    // const tabInfo = {
    //     tabs: [
    //         {
    //             name: 'Chinese',
    //             icon: 'CN'

    //         },
    //         {
    //             name: 'Italian',
    //             icon: 'IT'
    //         },
    //         {
    //             name: 'Indian',
    //             icon: 'IN'
    //         },
    //         {
    //             name: 'Turkish',
    //             icon: 'TR'
    //         },
    //         {
    //             name: 'Japanese',
    //             icon: 'JP'
    //         },
    //         {
    //             name: 'Korean',
    //             icon: 'KR'
    //         }

    //     ],
    //     places:
    //         [
    //             {
    //                 name: 'The Pearl',
    //                 location: 'Edinburgh',
    //                 address: '123 Baker Street',
    //                 stars: ['fa-star', 'fa-star', 'fa-star'],
    //                 score: 8.7,
    //                 image: 'https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg',
    //                 category: 'Chinese'
    //             },
    //             {
    //                 name: 'Wok Inn',
    //                 location: 'Edinburgh',
    //                 address: '123 Baker Street',
    //                 stars: ['fa-star', 'fa-star'],
    //                 score: 8.7,
    //                 image: 'https://images.pexels.com/photos/5409020/pexels-photo-5409020.jpeg',
    //                 category: 'Chinese'
    //             },
    //             {
    //                 name: 'Little Italy',
    //                 location: 'Edinburgh',
    //                 address: '123 Baker Street',
    //                 stars: ['fa-star', 'fa-star', 'fa-star'],
    //                 score: 8.7,
    //                 image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg',
    //                 category: 'Italian'
    //             },
    //             {
    //                 name: 'Rara Tal',
    //                 location: 'Edinburgh',
    //                 address: '123 Baker Street',
    //                 stars: ['fa-star', 'fa-star', 'fa-star', 'fa-star'],
    //                 score: 8.7,
    //                 image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
    //                 category: 'Indian'
    //             },
    //             {
    //                 name: 'Anadolia',
    //                 location: 'Edinburgh',
    //                 address: '123 Baker Street',
    //                 stars: ['fa-star'],
    //                 score: 8.7,
    //                 image: 'https://images.pexels.com/photos/15390220/pexels-photo-15390220/free-photo-of-close-up-of-turkish-kebabs-lying-among-raw-ingredients.jpeg',
    //                 category: 'Turkish'
    //             },
    //             {
    //                 name: 'Mikaku',
    //                 location: 'Edinburgh',
    //                 address: '123 Baker Street',
    //                 stars: ['fa-star', 'fa-star', 'fa-star'],
    //                 score: 8.7,
    //                 image: 'https://images.pexels.com/photos/3338537/pexels-photo-3338537.jpeg',
    //                 category: 'Japanese'
    //             },
    //             {
    //                 name: 'Nanakusa',
    //                 location: 'Edinburgh',
    //                 address: '123 Baker Street',
    //                 stars: ['fa-star', 'fa-star', 'fa-star', 'fa-star', 'fa-star'],
    //                 score: 8.7,
    //                 image: 'https://images.pexels.com/photos/2098134/pexels-photo-2098134.jpeg',
    //                 category: 'Japanese'
    //             }
    //         ]
    // }

    const details = {
        info: `Welcome to The Social, your ultimate destination for a vibrant late-night experience in the heart of Glasgow city centre. Nestled in the bustling Royal Exchange Square, our stylish cocktail bar and restaurant boasts one of the best outdoor terraces in the city, offering breathtaking views and a perfect spot to unwind.
        `,
        pic: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg'
    }


    const tabs = [
        {
            name: 'Chinese',
            icon: 'CN'

        },
        {
            name: 'Italian',
            icon: 'IT'
        },
        {
            name: 'Indian',
            icon: 'IN'
        },
        {
            name: 'Turkish',
            icon: 'TR'
        },
        {
            name: 'Japanese',
            icon: 'JP'
        },
        {
            name: 'Korean',
            icon: 'KR'
        }

    ]

    const tabInfo =
        [
            {
                name: 'The Pearl',
                location: 'Edinburgh',
                address: '123 Baker Street',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                reviewScore: 8.7,
                image: 'https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg',
                type: 'Chinese',
                category: 'dining'
            },
            {
                name: 'Wok Inn',
                location: 'Edinburgh',
                address: '123 Baker Street',
                stars: ['fa-star', 'fa-star'],
                reviewScore: 8.7,
                image: 'https://images.pexels.com/photos/2133989/pexels-photo-2133989.jpeg',
                type: 'Chinese',
                category: 'dining'
            },
            {
                name: 'Little Italy',
                location: 'Edinburgh',
                address: '123 Baker Street',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                reviewScore: 8.7,
                image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg',
                type: 'Italian',
                category: 'dining'
            },
            {
                name: 'Rara Tal',
                location: 'Edinburgh',
                address: '123 Baker Street',
                stars: ['fa-star', 'fa-star', 'fa-star', 'fa-star'],
                reviewScore: 8.7,
                image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
                type: 'Indian',
                category: 'dining'
            },
            {
                name: 'Anadolia',
                location: 'Edinburgh',
                address: '123 Baker Street',
                stars: ['fa-star'],
                reviewScore: 8.7,
                image: 'https://images.pexels.com/photos/15390220/pexels-photo-15390220/free-photo-of-close-up-of-turkish-kebabs-lying-among-raw-ingredients.jpeg',
                type: 'Turkish',
                category: 'dining'
            },
            {
                name: 'Mikaku',
                location: 'Edinburgh',
                address: '123 Baker Street',
                stars: ['fa-star', 'fa-star', 'fa-star'],
                reviewScore: 8.7,
                image: 'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg',
                type: 'Japanese',
                category: 'dining'
            },
            {
                name: 'Nanakusa',
                location: 'Edinburgh',
                address: '123 Baker Street',
                stars: ['fa-star', 'fa-star', 'fa-star', 'fa-star', 'fa-star'],
                reviewScore: 8.7,
                image: 'https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg',
                type: 'Japanese',
                category: 'dining'
            }
        ]


    return (
        <>
            {!loading && <Container>
                <Row>
                    <Col>
                        <Title>
                            <h1>Food</h1>
                            <p>Find something</p>
                        </Title>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SearchBar />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <ImageBlock2 array2={array2} array3={array3} popularArray={popularArray}>
                            <h1>Popular Dining</h1>
                            <p>Explorers Loving These Areas</p>
                        </ImageBlock2>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <SmallSwiper array={ourPickArray}>
                            <h1>Our Best Picks</h1>
                            <p>Our Picks</p>
                        </SmallSwiper >
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <SmallSwiper array={highReviewArray}>
                            <h1>Top Rated Dining</h1>
                            <p>Great Dining On Offer</p>
                        </SmallSwiper >
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <h1>All Restaurants</h1>
                        <p>Search By Cuisine Type</p>
                        <TabComponent tabInfo={myDinings} tabs={tabsArray} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <InfoPicRight details={details} />
                    </Col>
                </Row>
            </Container>}
        </>
    )
}

export default Dinings
