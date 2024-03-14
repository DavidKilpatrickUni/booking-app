import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Title from '../../components/Title'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

import SearchBar from './SearchBar'
import ImageBlock from '../../components/ImageBlock'
import AdvertBar from '../../components/AdvertBar'
import Featured from '../../components/Featured'

import SmallSwiper from '../../components/SmallSwiper'

import { doc, getDoc, updateDoc, collection, getDocs, query, where, orderBy, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'

import Spinner from 'react-bootstrap/Spinner';

const Locations = () => {

    const [myLocations, setMyLocations] = useState(null)
    const [myFeatured, setMyFeatured] = useState(null)
    const [ourPickArray, setOurPickArray] = useState(null)
    const [highReviewArray, setHighReviewArray] = useState(null)
    const [popularArray, setPopularArray] = useState(null)
    const [loading, setLoading] = useState(true)

    const featuredID = 'QTQ1gjt4U2gmppTvWFGL'

    useEffect(() => {

        const fetchData = async () => {

            const docRef = doc(db, "locationList", featuredID);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                // console.log("Document data:", docSnap.data());
                setMyFeatured(

                    docSnap.data()

                )
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }

            const locationListRef = collection(db, 'locationList')

            const collectionSnap = await getDocs(locationListRef)

            let locations = []

            collectionSnap.forEach((doc) => {
                return locations.push(
                    doc.data()
                )
            })

            setMyLocations(locations)
            setLoading(false)
        }

        fetchData()

    }, [])

    //console.log(myFeatured)
    //console.log(myLocations)

    useEffect(() => {

        if (myLocations != null) {
            setOurPickArray(myLocations.filter((element) => element.ourPick === true))
        }

        if (myLocations != null) {

            const reviewSort = [...myLocations]
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

            setHighReviewArray(reviewSort.slice(0, 5))
        }

        if (myLocations != null) {

            const popularSort = [...myLocations]
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
        }

    }, [myLocations])

    // console.log(ourPickArray)
    // console.log(highReviewArray)

    const locations = ['Edinburgh', 'London', 'Cardiff']

    const array = [
        {
            name: 'Edinburgh',
            image: 'https://images.pexels.com/photos/7813912/pexels-photo-7813912.jpeg',
            places: 1034
        },
        {
            name: 'London',
            image: 'https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg',
            places: 1564
        },
        {
            name: 'Cardiff',
            image: 'https://images.pexels.com/photos/1088291/pexels-photo-1088291.jpeg',
            places: 894
        },
        {
            name: 'Manchester',
            image: 'https://images.pexels.com/photos/15023016/pexels-photo-15023016/free-photo-of-aerial-view-of-manchester-town-hall.jpeg',
            places: 970
        },
        {
            name: 'Newcastle',
            image: 'https://images.pexels.com/photos/2893285/pexels-photo-2893285.jpeg',
            places: 811
        },
        {
            name: 'Glasgow',
            image: 'https://images.pexels.com/photos/11142526/pexels-photo-11142526.jpeg',
            places: 1294
        },
        {
            name: 'York',
            image: 'https://images.pexels.com/photos/18381522/pexels-photo-18381522/free-photo-of-historic-york-minster-in-england.jpeg',
            places: 768
        }
    ]

    const array2 = [
        {
            name: 'Edinburgh',
            image: 'https://images.pexels.com/photos/7813912/pexels-photo-7813912.jpeg'
        },
        {
            name: 'London',
            image: 'https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg'
        }
    ]

    const array3 = [
        {
            name: 'Cardiff',
            image: 'https://images.pexels.com/photos/1088291/pexels-photo-1088291.jpeg'
        },
        {
            name: 'Manchester',
            image: 'https://images.pexels.com/photos/15023016/pexels-photo-15023016/free-photo-of-aerial-view-of-manchester-town-hall.jpeg'
        },
        {
            name: 'Newcastle',
            image: 'https://images.pexels.com/photos/2893285/pexels-photo-2893285.jpeg'
        }
    ]

    const allLocations = [
        {
            name: 'Edinburgh',
            image: 'https://images.pexels.com/photos/7813912/pexels-photo-7813912.jpeg'
        },
        {
            name: 'London',
            image: 'https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg'
        },
        {
            name: 'Cardiff',
            image: 'https://images.pexels.com/photos/1088291/pexels-photo-1088291.jpeg'
        },
        {
            name: 'Manchester',
            image: 'https://images.pexels.com/photos/15023016/pexels-photo-15023016/free-photo-of-aerial-view-of-manchester-town-hall.jpeg'
        },
        {
            name: 'Newcastle',
            image: 'https://images.pexels.com/photos/2893285/pexels-photo-2893285.jpeg'
        }
    ]

    const adverts = [
        {
            icon: 'fa-hotel',
            stat: '1200+',
            title: 'Stays',
            message: 'From executive suites to camping, you are sure to find a place to stay'
        },
        {
            icon: 'fa-pen-to-square',
            stat: '2700+',
            title: 'Reviews',
            message: 'Explorers Have Left Lots Of Insights About Their Discoveries'
        },
        {
            icon: 'fa-star',
            stat: '250+',
            title: '5 Star Stays',
            message: 'Amazing Stays That Have Left Lasting Impressions On Their Guests'
        }
    ]



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
        lat: '',
        lng: ''

    }



    return (
        <>
            {!loading && <Container>
                <Row>
                    <Col>
                        <Title>
                            <h1>
                                Great Locations
                            </h1>
                            <p>
                                Many Areas Waiting To Be Explored
                            </p>
                        </Title>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <SearchBar locations={locations} />
                    </Col>
                </Row>
                <hr />
                {popularArray && <Row>
                    <Col>
                        <ImageBlock array2={array2} array3={array3} popularArray={popularArray}>
                            <h1>Popular Locations</h1>
                            <p>Explorers Loving These Areas</p>
                        </ImageBlock>
                    </Col>
                </Row>}

                <Row>
                    <Col>
                        <AdvertBar adverts={adverts} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <Featured featured={featured} myFeatured={myFeatured}>
                            <h1>Our Favorite Location Right Now</h1>
                            <p>Find Out Why We Love This Area</p>
                        </Featured>
                    </Col>
                </Row>
                <hr />
                {ourPickArray && <Row>
                    <Col>
                        <SmallSwiper array={ourPickArray}>
                            <h1>Our Top Picks</h1>
                            <p>Leave The Research To Us</p>
                        </SmallSwiper >
                    </Col>
                </Row>}

                <hr />
                {highReviewArray && <Row>
                    <Col>
                        <SmallSwiper array={highReviewArray}>
                            <h1>Top Reviewed Locations</h1>
                            <p>Only The Best</p>
                        </SmallSwiper >
                    </Col>
                </Row>}
                <hr />
                <Row>
                    <Col>
                        <SmallSwiper array={myLocations}>
                            <h1>All Locations</h1>
                            <p>Try Somewhere New</p>
                        </SmallSwiper >
                    </Col>
                </Row>

            </Container>
            }
        </>
    )
}

export default Locations
