import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'

import Title from '../../components/Title'
import SearchCardHolder from './SearchCardHolder'
import SearchCriteriaHolder from './SearchCriteriaHolder'
import SearchOrder from './SearchOrder'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { collection, getDocs, query, orderBy } from 'firebase/firestore'

import { db } from '../../firebase.config'

const Search = () => {


    const params = useParams()
    const location = useLocation()
    const navigate = useNavigate()

    const paramArray = location.pathname.split('/')
    const removeSpace = paramArray.filter((item) => item !== '')
    const removeq = removeSpace.filter((item) => item !== 'q')
    const removeSearch = removeq.filter((item) => item !== 'search')


    const [cutoff, setCutoff] = useState(4)

    const [listing, setListing] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchOrder, setSearchOrder] = useState('desc')
    const [orderedArray, setOrderedArray] = useState([])
    const [criteriaArray, setCriteriaArray] = useState([])
    const [changed, setChanged] = useState(false)

    const [locationArray, setLocationArray] = useState([])
    const [locationDone, setLocationDone] = useState(true)

    const [typeArray, setTypeArray] = useState([])
    const [typeDone, setTypeDone] = useState(true)

    const [starArray, setStarArray] = useState([])
    const [starDone, setStarDone] = useState(true)

    const [reviewArray, setReviewArray] = useState([])
    const [reviewDone, setReviewDone] = useState(true)

    const [priceArray, setPriceArray] = useState([])
    const [priceDone, setPriceDone] = useState(true)

    const [pickDone, setPickDone] = useState(true)

    const [removeSearchExists, setRemoveSearchExists] = useState(false)


    useEffect(() => {

        const fetchListings = async () => {

            const listingsRef = collection(db, 'listings')

            const q = query(
                listingsRef,

                orderBy('reviewScore', 'desc')

            )

            const collectionSnap = await getDocs(q)


            let listings = []

            collectionSnap.forEach((doc) => {
                return listings.push(
                    doc.data()
                )
            })
            setListing(listings)
            // setLocationArray(listings)
            // setTypeArray(listings)
            // setStarArray(listings)
            //setReviewArray(listings)
            setOrderedArray(listings)
            setPriceArray(listings)

            if (removeSearch.length > 0) {
                setRemoveSearchExists(true)
            }
        }

        fetchListings()

    }, [])


    useEffect(() => {



        const orderListings = async () => {
            setLoading(true)
            const reviewSort = [...priceArray]

            if (listing != null) {

                switch (searchOrder) {
                    case 'desc':
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
                        break;
                    case 'asc':
                        reviewSort.sort((a, b) => {
                            const reviewA = a.reviewScore;
                            const reviewB = b.reviewScore;

                            if (reviewA < reviewB) {
                                return -1;
                            }
                            if (reviewA > reviewB) {
                                return 1;
                            }

                            return 0

                        })
                        break;
                    case 'expensive':
                        reviewSort.sort((a, b) => {
                            const priceA = a.price;
                            const priceB = b.price;

                            if (priceA < priceB) {
                                return 1;
                            }
                            if (priceA > priceB) {
                                return -1;
                            }

                            return 0

                        })
                        break;
                    case 'cheap':
                        reviewSort.sort((a, b) => {
                            const priceA = a.price;
                            const priceB = b.price;

                            if (priceA < priceB) {
                                return -1;
                            }
                            if (priceA > priceB) {
                                return 1;
                            }

                            return 0

                        })
                        break;
                    case 'most':
                        reviewSort.sort((a, b) => {
                            const visitsA = a.visited;
                            const visitsB = b.visited;

                            if (visitsA < visitsB) {
                                return 1;
                            }
                            if (visitsA > visitsB) {
                                return -1;
                            }

                            return 0

                        })
                        break;
                    case 'least':
                        reviewSort.sort((a, b) => {
                            const visitsA = a.visited;
                            const visitsB = b.visited;

                            if (visitsA < visitsB) {
                                return -1;
                            }
                            if (visitsA > visitsB) {
                                return 1;
                            }

                            return 0

                        })
                        break;
                    default:

                }

                setOrderedArray(reviewSort)
                setLoading(false)
            }

        }

        orderListings()

    }, [searchOrder, pickDone])



    useEffect(() => {
        const orderListings = async () => {

            if ((removeSearch.includes('Edinburgh') || removeSearch.includes('Aberdeen') || removeSearch.includes('Glasgow') || removeSearch.includes('London'))) {
                let holdArray = []
                removeSearch.forEach((item) => {

                    switch (item) {
                        case 'Edinburgh':
                            listing.forEach((element) => {
                                if (element.location === 'Edinburgh') {
                                    holdArray.push(element)
                                }
                            })
                            break;
                        case 'Aberdeen':
                            listing.forEach((element) => {
                                if (element.location === 'Aberdeen') {
                                    holdArray.push(element)
                                }
                            })
                            break;
                        case 'Glasgow':
                            listing.forEach((element) => {
                                if (element.location === 'Glasgow') {
                                    holdArray.push(element)
                                }
                            })
                            break;
                        case 'London':
                            listing.forEach((element) => {
                                if (element.location === 'London') {
                                    holdArray.push(element)
                                }
                            })
                            break;
                        default:

                    }

                })

                setLocationArray(holdArray)

            } else {
                setLocationArray(listing)
            }
            setCutoff(5)
            setLocationDone(!locationDone)
        }
        orderListings()
    }, [location, removeSearchExists])

    useEffect(() => {
        const sortType = async () => {

            if ((removeSearch.includes('Studio') || removeSearch.includes('Hotel') || removeSearch.includes('Apartment'))) {
                let holdArray = []

                removeSearch.forEach((item) => {

                    switch (item) {
                        case 'Studio':
                            locationArray.forEach((element) => {
                                if (element.type === 'Studio') {
                                    holdArray.push(element)
                                }
                            })
                            break;
                        case 'Hotel':
                            locationArray.forEach((element) => {
                                if (element.type === 'Hotel') {
                                    holdArray.push(element)
                                }
                            })
                            break;
                        case 'Apartment':
                            locationArray.forEach((element) => {
                                if (element.type === 'Apartment') {
                                    holdArray.push(element)
                                }
                            })
                            break;
                        default:
                    }

                })
                console.log(holdArray)
                setTypeArray(holdArray)

            } else {
                setTypeArray(locationArray)
            }

            setTypeDone(!typeDone)
        }

        sortType()
    }, [locationDone])

    useEffect(() => {
        const sortType = async () => {
            if ((removeSearch.includes('1-Star') || removeSearch.includes('2-Star') || removeSearch.includes('3-Star') || removeSearch.includes('4-Star') || removeSearch.includes('5-Star'))) {
                let holdArray = []
                removeSearch.forEach((item) => {

                    switch (item) {
                        case '1-Star':

                            typeArray.forEach((element) => {
                                if (element.stars.length === 1) {
                                    holdArray.push(element)
                                }
                            })
                            break;
                        case '2-Star':
                            typeArray.forEach((element) => {
                                if (element.stars.length === 2) {
                                    holdArray.push(element)
                                }
                            })

                            break;
                        case '3-Star':
                            typeArray.forEach((element) => {
                                if (element.stars.length === 3) {
                                    holdArray.push(element)
                                }
                            })

                            break;
                        case '4-Star':
                            typeArray.forEach((element) => {
                                if (element.stars.length === 4) {
                                    holdArray.push(element)
                                }
                            })

                            break;
                        case '5-Star':
                            typeArray.forEach((element) => {
                                if (element.stars.length === 5) {
                                    holdArray.push(element)
                                }
                            })

                            break;
                        default:

                    }

                })
                console.log(holdArray)
                setStarArray(holdArray)

            } else {
                setStarArray(typeArray)
            }

            setStarDone(!starDone)
        }

        sortType()
    }, [typeDone])

    useEffect(() => {
        const sortType = async () => {

            if ((removeSearch.includes('1-Review') || removeSearch.includes('2-Review') || removeSearch.includes('3-Review') || removeSearch.includes('4-Review') || removeSearch.includes('5-Review') || removeSearch.includes('6-Review') || removeSearch.includes('7-Review') || removeSearch.includes('8-Review') || removeSearch.includes('9-Review'))) {
                let holdArray = []
                removeSearch.forEach((item) => {

                    console.log(criteriaArray)
                    switch (item) {
                        case '1-Review':

                            starArray.forEach((element) => {
                                if (element.reviewScore >= 1.0 && element.reviewScore <= 1.9) {
                                    holdArray.push(element)
                                }
                            })
                            break;
                        case '2-Review':
                            starArray.forEach((element) => {
                                if (element.reviewScore >= 2.0 && element.reviewScore <= 2.9) {
                                    holdArray.push(element)
                                }
                            })
                            break;
                        case '3-Review':
                            starArray.forEach((element) => {
                                if (element.reviewScore >= 3.0 && element.reviewScore <= 3.9) {
                                    holdArray.push(element)
                                }
                            })
                            break;
                        case '4-Review':
                            starArray.forEach((element) => {
                                if (element.reviewScore >= 4.0 && element.reviewScore <= 4.9) {
                                    holdArray.push(element)
                                }
                            })
                            break;
                        case '5-Review':
                            starArray.forEach((element) => {
                                if (element.reviewScore >= 5.0 && element.reviewScore <= 5.9) {
                                    holdArray.push(element)
                                }
                            })
                            break;
                        case '6-Review':
                            starArray.forEach((element) => {
                                if (element.reviewScore >= 6.0 && element.reviewScore <= 6.9) {
                                    holdArray.push(element)
                                }
                            })
                            break;
                        case '7-Review':
                            starArray.forEach((element) => {
                                if (element.reviewScore >= 7.0 && element.reviewScore <= 7.9) {
                                    holdArray.push(element)
                                }
                            })
                            break;
                        case '8-Review':
                            starArray.forEach((element) => {
                                if (element.reviewScore >= 8.0 && element.reviewScore <= 8.9) {
                                    holdArray.push(element)
                                }
                            })
                            break;
                        case '9-Review':
                            starArray.forEach((element) => {
                                if (element.reviewScore >= 9.0) {
                                    holdArray.push(element)
                                }
                            })
                            break;
                        default:

                    }

                })
                console.log(holdArray)
                setReviewArray(holdArray)

            } else {
                setReviewArray(starArray)
            }

            setReviewDone(!reviewDone)
        }

        sortType()
    }, [starDone])

    useEffect(() => {
        const sortType = async () => {
            if ((removeSearch.includes('0-49') || removeSearch.includes('50-99') || removeSearch.includes('100-149') || removeSearch.includes('150-199') || removeSearch.includes('200-249') || removeSearch.includes('250+'))) {
                let holdArray = []
                removeSearch.forEach((item) => {
                    switch (item) {
                        case '0-49':
                            reviewArray.forEach((element) => {
                                if (element.price >= 0 && element.price < 50) {
                                    holdArray.push(element)
                                }
                            })
                            break;
                        case '50-99':
                            reviewArray.forEach((element) => {
                                if (element.price >= 50 && element.price < 100) {
                                    holdArray.push(element)
                                }
                            })
                            break;
                        case '100-149':
                            reviewArray.forEach((element) => {
                                if (element.price >= 100 && element.price < 150) {
                                    holdArray.push(element)
                                }
                            })
                            break;
                        case '150-199':
                            reviewArray.forEach((element) => {
                                if (element.price >= 150 && element.price < 200) {
                                    holdArray.push(element)
                                }
                            })
                            break;
                        case '200-499':
                            reviewArray.forEach((element) => {
                                if (element.price >= 200 && element.price < 249) {
                                    holdArray.push(element)
                                }
                            })
                            break;
                        case '250+':
                            reviewArray.forEach((element) => {
                                if (element.price >= 250) {
                                    holdArray.push(element)
                                }
                            })
                            break;

                        default:
                    }

                })
                console.log(holdArray)
                setPriceArray(holdArray)

            } else {
                setPriceArray(reviewArray)
            }
            setPriceDone(!priceDone)
        }

        sortType()
    }, [reviewDone])


    useEffect(() => {

        const sortType = async () => {

            if ((removeSearch.includes('Our-Pick'))) {
                let holdArray = []
                removeSearch.forEach((item) => {

                    switch (item) {
                        case 'Our-Pick':

                            setPriceArray((prev) => prev.filter((element) => (
                                element.ourPick === true
                            )
                            ))

                            break;

                        default:

                    }

                })


            } else {

            }
            setPickDone(!pickDone)
            setLoading(false)
        }
        sortType()


    }, [priceDone])

    const locations = ['Edinburgh', 'London', 'Cardiff']
    const places = ['Stays', 'Attractions', 'Dining']



    const handleClick2 = (index) => {
        delete removeSearch[index]

        navigate(`q/${removeSearch.join('/')}`)
    }


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
                            <Title>
                                <h1>Stay Search</h1>
                            </Title>
                        </Col>
                    </Row>
                    <hr />
                    <Row className='d-flex flex-column flex-md-row justify-content-center'>
                        <Col className='col-md-6 col-12 text-center text-md-start'>
                            <p className=''>
                                Stays Found: <span className='fw-bold'>{orderedArray.length}</span>
                            </p>
                        </Col>

                        <Col className='col-md-6 col-12 px-5 px-md-0'>
                            <SearchOrder setSearchOrder={setSearchOrder} />
                        </Col>
                    </Row>
                    {removeSearch.length > 0 && <Row className=''>
                        <Col className='col-12 col-md-10 pt-2'>
                            {removeSearch.map((item, index) => (
                                <Button className='mx-1 mt-1' variant="outline-primary"

                                    onClick={() => handleClick2(index)
                                    }
                                >{item}
                                    <FontAwesomeIcon icon=' fa-circle-xmark' className='ms-2  ' />
                                </Button>
                            ))}
                        </Col>
                        <Col className='col-12 col-md-2 text-center pt-2'>
                            <Button variant="outline-secondary mt-1"

                                onClick={() => {
                                    navigate('/search')

                                }}
                            >
                                Clear Filters</Button>
                        </Col>
                    </Row>}
                    <Row className='mt-1'>
                        <Col className='col-md-3 col-12 order-1 g-0'>
                            <SearchCriteriaHolder possible={orderedArray} />
                        </Col>

                        {!loading ? <>

                            {orderedArray.length === 0 && <Col className='col-md-9 col-12 order-2 g-0 d-flex justify-content-center align-items-center'>
                                <h2>Nothing Matching Criteria</h2>
                            </Col>}

                            <Col className='col-md-9 col-12 order-2 g-0 '>
                                <SearchCardHolder listing={orderedArray.slice(0, cutoff)} />
                                {orderedArray.length > cutoff && <Button className='w-100 mt-2'
                                    onClick={() => setCutoff((prev) => prev + 2)}>Show More</Button>}
                            </Col>

                        </> :

                            <Col className='col-md-9 col-12 order-2 g-0 text-center text-primary'>
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </Col>
                        }
                    </Row>
                </Container >
            }

        </>
    )
}

export default Search
