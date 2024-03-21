import React, { useState, useEffect } from 'react'
import Title from '../../components/Title'
import SearchBar from './SearchBar'
import SearchCardHolder from './SearchCardHolder'
import SearchCriteriaHolder from './SearchCriteriaHolder'
import Accordion from 'react-bootstrap/Accordion';
import Pagination from 'react-bootstrap/Pagination';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner';

import { collection, getDocs, where, query, orderBy, limit, startAfter } from 'firebase/firestore'

import { db } from '../../firebase.config'
import SearchOrder from './SearchOrder'
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Search = () => {


    const params = useParams()
    const location = useLocation()
    //console.log(location.search)
    const navigate = useNavigate()

    const paramArray = location.pathname.split('/')
    const removeSpace = paramArray.filter((item) => item !== '')
    const removeq = removeSpace.filter((item) => item !== 'q')
    const removeSearch = removeq.filter((item) => item !== 'search')
    //console.log(removeSearch)



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

    const [pickDone, setPickDone] = useState(true)

    const [removeSearchExists, setRemoveSearchExists] = useState(false)

    const handleClick = () => {


    }


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
            setReviewArray(listings)
            setOrderedArray(listings)

            if (removeSearch.length > 0) {
                setRemoveSearchExists(true)
            }
        }

        fetchListings()

    }, [])


    useEffect(() => {



        const orderListings = async () => {
            setLoading(true)
            const reviewSort = [...reviewArray]

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
                    default:

                }

                setOrderedArray(reviewSort)
                setLoading(false)
            }

        }

        orderListings()
        //setLoading(false)
        //setCriteriaArray(orderedArray)
        // console.log(orderedArray)
    }, [searchOrder, pickDone])

    // useEffect(() => {

    //     const orderListings = async () => {
    //         console.log(removeSearch)
    //         if (removeSearch.length > 0) {
    //             setCriteriaArray([])
    //             removeSearch.forEach((item) => {

    //                 // console.log(criteriaArray)
    //                 switch (item) {
    //                     case 'Edinburgh':
    //                         // code block
    //                         setCriteriaArray(criteriaArray.concat
    //                             (orderedArray.filter((element) => (element.location === 'Edinburgh'))))
    //                         break;
    //                     case 'Aberdeen':
    //                         setCriteriaArray(criteriaArray.concat(orderedArray.filter((element) => (element.location === 'Aberdeen'))))
    //                         break;
    //                     case 'ourPick':
    //                         setCriteriaArray(criteriaArray.concat(orderedArray.filter((element) => (element.ourPick === true))))
    //                         break;
    //                     case 'Studio':
    //                         setCriteriaArray(criteriaArray.concat(orderedArray.filter((element) => (element.type === 'Studio'))))
    //                         break;
    //                     default:

    //                 }

    //             })

    //         } else {
    //             setCriteriaArray([])
    //         }
    //         //console.log(criteriaArray)

    //     }
    //     setLoading(true)
    //     orderListings()
    //     setLoading(false)
    //     //console.log(location)

    // }, [location])

    // useEffect(() => {

    //     const orderListings = async () => {
    //         //console.log(removeSearch)
    //         if (removeSearch.length > 0 && (removeSearch.includes('Edinburgh') || removeSearch.includes('Aberdeen') || removeSearch.includes('Glasgow'))) {
    //             let holdArray = []
    //             removeSearch.forEach((item) => {

    //                 // console.log(criteriaArray)
    //                 switch (item) {
    //                     case 'Edinburgh':
    //                         // code block

    //                         listing.forEach((element) => {
    //                             if (element.location === 'Edinburgh') {
    //                                 holdArray.push(element)
    //                             }
    //                         }
    //                         )


    //                         break;
    //                     case 'Aberdeen':
    //                         listing.forEach((element) => {
    //                             if (element.location === 'Aberdeen') {
    //                                 holdArray.push(element)
    //                             }
    //                         }
    //                         )


    //                         break;
    //                     case 'Glasgow':
    //                         listing.forEach((element) => {
    //                             if (element.location === 'Glasgow') {
    //                                 holdArray.push(element)
    //                             }
    //                         }
    //                         )


    //                         break;
    //                     default:

    //                 }

    //             })
    //             console.log(holdArray)
    //             setLocationArray(holdArray)

    //         } else {
    //             setLocationArray(listing)
    //         }
    //         //console.log(locationArray)
    //         setTypeArray(locationArray)
    //         sortType()
    //     }

    //     orderListings()

    //     console.log(locationArray)
    //     //setLoading(false)

    // }, [location])


    // useEffect(() => {

    //     const orderListings = async () => {
    //         //console.log(removeSearch)
    //         if (removeSearch.length > 0 && (removeSearch.includes('Studio') || removeSearch.includes('Hotel') || removeSearch.includes('Apartment'))) {
    //             let holdArray = []


    //             removeSearch.forEach((item) => {

    //                 // console.log(criteriaArray)
    //                 switch (item) {
    //                     case 'Studio':
    //                         // code block
    //                         locationArray.forEach((element) => {
    //                             if (element.type === 'Studio') {
    //                                 holdArray.push(element)
    //                             }
    //                         }
    //                         )


    //                         break;
    //                     case 'Hotel':
    //                         locationArray.forEach((element) => {
    //                             if (element.type === 'Hotel') {
    //                                 holdArray.push(element)
    //                             }
    //                         }
    //                         )

    //                         break;
    //                     case 'Apartment':
    //                         locationArray.forEach((element) => {
    //                             if (element.type === 'Apartment') {
    //                                 holdArray.push(element)
    //                             }
    //                         }
    //                         )

    //                         break;
    //                     default:

    //                 }

    //             })
    //             console.log(holdArray)
    //             setTypeArray(holdArray)

    //         } else {
    //             setTypeArray(locationArray)
    //         }
    //         //console.log(locationArray)

    //     }

    //     orderListings()

    //     console.log(typeArray)
    //     setLoading(false)

    // }, [location])








    useEffect(() => {
        const orderListings = async () => {
            //console.log(removeSearch)
            if ((removeSearch.includes('Edinburgh') || removeSearch.includes('Aberdeen') || removeSearch.includes('Glasgow'))) {
                let holdArray = []
                removeSearch.forEach((item) => {

                    // console.log(criteriaArray)
                    switch (item) {
                        case 'Edinburgh':
                            // code block

                            listing.forEach((element) => {
                                if (element.location === 'Edinburgh') {
                                    holdArray.push(element)
                                }
                            }
                            )


                            break;
                        case 'Aberdeen':
                            listing.forEach((element) => {
                                if (element.location === 'Aberdeen') {
                                    holdArray.push(element)
                                }
                            }
                            )


                            break;
                        case 'Glasgow':
                            listing.forEach((element) => {
                                if (element.location === 'Glasgow') {
                                    holdArray.push(element)
                                }
                            }
                            )


                            break;
                        default:

                    }

                })
                //console.log(holdArray)
                setLocationArray(holdArray)

            } else {
                setLocationArray(listing)
            }
            setLocationDone(!locationDone)
        }
        orderListings()
    }, [location, removeSearchExists])

    useEffect(() => {
        const sortType = async () => {
            //console.log(removeSearch)
            if ((removeSearch.includes('Studio') || removeSearch.includes('Hotel') || removeSearch.includes('Apartment'))) {
                let holdArray = []


                removeSearch.forEach((item) => {

                    // console.log(criteriaArray)
                    switch (item) {
                        case 'Studio':
                            // code block
                            locationArray.forEach((element) => {
                                if (element.type === 'Studio') {
                                    holdArray.push(element)
                                }
                            }
                            )


                            break;
                        case 'Hotel':
                            locationArray.forEach((element) => {
                                if (element.type === 'Hotel') {
                                    holdArray.push(element)
                                }
                            }
                            )

                            break;
                        case 'Apartment':
                            locationArray.forEach((element) => {
                                if (element.type === 'Apartment') {
                                    holdArray.push(element)
                                }
                            }
                            )

                            break;
                        default:

                    }

                })
                console.log(holdArray)
                setTypeArray(holdArray)

            } else {
                setTypeArray(locationArray)
            }
            //console.log(locationArray)
            //setLoading(false)
            setTypeDone(!typeDone)
        }

        sortType()
    }, [locationDone])

    useEffect(() => {
        const sortType = async () => {
            //console.log(removeSearch)
            if ((removeSearch.includes('1Star') || removeSearch.includes('2Star') || removeSearch.includes('3Star') || removeSearch.includes('4Star') || removeSearch.includes('5Star'))) {
                let holdArray = []
                removeSearch.forEach((item) => {

                    // console.log(criteriaArray)
                    switch (item) {
                        case '1Star':
                            // code block
                            locationArray.forEach((element) => {
                                if (element.stars.length === 1) {
                                    holdArray.push(element)
                                }
                            }
                            )


                            break;
                        case '2Star':
                            locationArray.forEach((element) => {
                                if (element.stars.length === 2) {
                                    holdArray.push(element)
                                }
                            }
                            )

                            break;
                        case '3Star':
                            locationArray.forEach((element) => {
                                if (element.stars.length === 3) {
                                    holdArray.push(element)
                                }
                            }
                            )

                            break;
                        case '4Star':
                            locationArray.forEach((element) => {
                                if (element.stars.length === 4) {
                                    holdArray.push(element)
                                }
                            }
                            )

                            break;
                        case '5Star':
                            locationArray.forEach((element) => {
                                if (element.stars.length === 5) {
                                    holdArray.push(element)
                                }
                            }
                            )

                            break;
                        default:

                    }

                })
                console.log(holdArray)
                setStarArray(holdArray)

            } else {
                setStarArray(typeArray)
            }
            //console.log(locationArray)
            //setLoading(false)
            setStarDone(!starDone)
        }

        sortType()
    }, [typeDone])

    useEffect(() => {
        const sortType = async () => {
            //console.log(removeSearch)
            if ((removeSearch.includes('1Review') || removeSearch.includes('2Review') || removeSearch.includes('3Review') || removeSearch.includes('4Review') || removeSearch.includes('5Review') || removeSearch.includes('6Review') || removeSearch.includes('7Review') || removeSearch.includes('8Review') || removeSearch.includes('9Review'))) {
                let holdArray = []
                removeSearch.forEach((item) => {

                    console.log(criteriaArray)
                    switch (item) {
                        case '1Review':
                            // code block
                            starArray.forEach((element) => {
                                if (element.reviewScore >= 1.0 && element.reviewScore <= 1.9) {
                                    holdArray.push(element)
                                }
                            }
                            )
                            break;
                        case '2Review':
                            // code block
                            starArray.forEach((element) => {
                                if (element.reviewScore >= 2.0 && element.reviewScore <= 2.9) {
                                    holdArray.push(element)
                                }
                            }
                            )
                            break;
                        case '3Review':
                            // code block
                            starArray.forEach((element) => {
                                if (element.reviewScore >= 3.0 && element.reviewScore <= 3.9) {
                                    holdArray.push(element)
                                }
                            }
                            )


                            break;
                        case '4Review':
                            // code block
                            starArray.forEach((element) => {
                                if (element.reviewScore >= 4.0 && element.reviewScore <= 4.9) {
                                    holdArray.push(element)
                                }
                            }
                            )
                            break;
                        case '5Review':
                            starArray.forEach((element) => {
                                if (element.reviewScore >= 5.0 && element.reviewScore <= 5.9) {
                                    holdArray.push(element)
                                }
                            }
                            )

                            break;
                        case '6Review':
                            // code block
                            starArray.forEach((element) => {
                                if (element.reviewScore >= 6.0 && element.reviewScore <= 6.9) {
                                    holdArray.push(element)
                                }
                            }
                            )
                            break;
                        case '7Review':
                            starArray.forEach((element) => {
                                if (element.reviewScore >= 7.0 && element.reviewScore <= 7.9) {
                                    holdArray.push(element)
                                }
                            }
                            )

                            break;
                        case '8Review':
                            starArray.forEach((element) => {
                                if (element.reviewScore >= 8.0 && element.reviewScore <= 8.9) {
                                    holdArray.push(element)
                                }
                            }
                            )


                            break;
                        case '9Review':
                            starArray.forEach((element) => {
                                if (element.reviewScore >= 9.0) {
                                    holdArray.push(element)
                                }
                            }
                            )


                            break;
                        default:

                    }

                })
                console.log(holdArray)
                setReviewArray(holdArray)

            } else {
                setReviewArray(starArray)
            }
            //console.log(locationArray)
            //setLoading(false)
            //setStarDone(!starDone)
            setReviewDone(!reviewDone)
        }

        sortType()
    }, [starDone])

    useEffect(() => {

        const sortType = async () => {
            //console.log(removeSearch)
            if ((removeSearch.includes('ourPick'))) {
                let holdArray = []


                removeSearch.forEach((item) => {

                    switch (item) {
                        case 'ourPick':
                            // code block
                            setReviewArray((prev) => prev.filter((element) => (
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
        // filterType()
        // filterReview()

    }, [reviewDone])

    const locations = ['Edinburgh', 'London', 'Cardiff']
    const places = ['Stays', 'Attractions', 'Dining']



    const handleClick2 = (index) => {
        delete removeSearch[index]

        navigate(`q/${removeSearch.join('/')}`)
    }


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
                <Row>
                    <Col className='col-12 col-md-10 pt-2'>
                        {removeSearch.map((item, index) => (
                            <Button className='mx-1 mb-1'

                                onClick={() => handleClick2(index)
                                }
                            >{item}
                                <FontAwesomeIcon icon='circle-xmark' className='ms-2' />
                            </Button>
                        ))}
                    </Col>
                    <Col className='col-12 col-md-2 text-center pt-2'>
                        <Button variant="outline-secondary"

                            onClick={() => {
                                navigate('/search')

                            }}
                        >
                            Clear Filters</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-md-3 col-12 order-1 g-0'>
                        <SearchCriteriaHolder possible={orderedArray} />
                    </Col>

                    {/* {loading && <Col className='col-md-9 col-12 order-2 g-0 text-center text-primary'>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Col>} */}


                    {!loading ? <>

                        {orderedArray.length === 0 && <Col className='col-md-9 col-12 order-2 g-0 d-flex justify-content-center align-items-center'>
                            <h2>Nothing Matching Criteria</h2>
                        </Col>}

                        <Col className='col-md-9 col-12 order-2 g-0 '>
                            <SearchCardHolder listing={orderedArray} />
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



        </>
    )
}

export default Search
