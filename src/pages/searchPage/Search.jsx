import React, { useState, useEffect } from 'react'
import Title from '../../components/Title'
import SearchBar from './SearchBar'
import SearchCardHolder from './SearchCardHolder'
import SearchCriteriaHolder from './SearchCriteriaHolder'
import Accordion from 'react-bootstrap/Accordion';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner';

import { collection, getDocs, where, query, orderBy, limit, startAfter } from 'firebase/firestore'

import { db } from '../../firebase.config'
import SearchOrder from './SearchOrder'
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom'


const Search = () => {


    const params = useParams()
    const location = useLocation()
    console.log(location.search)
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


    useEffect(() => {

        const fetchListings = async () => {

            const listingsRef = collection(db, 'listings')
            const collectionSnap = await getDocs(listingsRef)

            let listings = []

            collectionSnap.forEach((doc) => {
                return listings.push(
                    doc.data()
                )
            })
            setListing(listings)
        }

        fetchListings()

    }, [])


    useEffect(() => {

        const orderListings = async () => {

            const reviewSort = [...listing]

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

            }

        }

        orderListings()
        setLoading(false)
        //setCriteriaArray(orderedArray)

    }, [listing, searchOrder])

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



    const locations = ['Edinburgh', 'London', 'Cardiff']
    const places = ['Stays', 'Attractions', 'Dining']

    const handleChange = (e) => {
        let url = ''

        //console.log(e)
        // console.log(e.target.name)
        // console.log(e.target.value)

        if (e.target.checked) {
            //console.log(removeSearch.length)
            removeSearch.push(e.target.value)
            removeSearch.forEach((item) => {
                url += '/' + item
            })

            const joinString = removeSearch.join('/')
            //console.log(joinString)

            navigate(`q${url}`)

            setChanged(!changed)
        }
        else {
            const array = removeSearch.filter((item) => (item !== e.target.value))

            //console.log(array)
            //console.log(array.length)

            array.forEach((item) => {
                url += '/' + item
            })


            const joinString = array.join('/')
            //console.log(joinString)

            navigate(`q${url}`)
            setChanged(!changed)

        }
    }

    const handleChange2 = (e) => {
        let url = ''

        console.log(e)
        // console.log(e.target.name)
        // console.log(e.target.value)

        if (e.target.checked) {
            //console.log(removeSearch.length)
            removeSearch.push(e.target.value)
            removeSearch.forEach((item) => {
                url += '/' + item
            })

            const joinString = removeSearch.join('/')
            //console.log(joinString)

            navigate(`q${url}`)
            setChanged(!changed)

        }
        else {
            const array = removeSearch.filter((item) => (item !== e.target.value))

            //console.log(array)
            //console.log(array.length)

            array.forEach((item) => {
                url += '/' + item
            })


            const joinString = array.join('/')
            //console.log(joinString)

            navigate(`q${url}`)
            setChanged(!changed)

        }
    }

    return (
        <>
            {!loading && <Container>
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
                    <Col>
                        <p className='text-primary'>Search Criteria:</p>
                    </Col>
                    <Col className='text-end'>
                        <SearchOrder setSearchOrder={setSearchOrder} />
                    </Col>
                </Row>
                <Row>
                    <Col className='col-md-3 col-12 order-1 g-0'>
                        <SearchCriteriaHolder />
                    </Col>

                    {loading && <Col className='col-md-9 col-12 order-2 g-0 text-center text-primary'>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Col>}


                    {!loading && <Col className='col-md-9 col-12 order-2 g-0'>

                        <SearchCardHolder listing={orderedArray} />
                    </Col>}
                </Row>

                {/* if (criteriaArray.length > 0) {
                    setCriteriaArray(criteriaArray.reduce((acc, curr) => {
                        if (!criteriaArray.includes(curr))
                            acc.push(curr)
                        return acc
                    }))
                } */}

                {/* <Row>
                    <Col>
                        <h3>Filter By</h3>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0" >
                                <Accordion.Header>Location</Accordion.Header>
                                <Accordion.Body>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Aberdeen" name='location' id="flexCheckDefault"

                                            onClick={handleChange}
                                        ></input>
                                        <label className="form-check-label" for="flexCheckDefault" value='Aberdeen'
                                        >
                                            Aberdeen
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Edinburgh"
                                            name='location'
                                            id="flexCheckChecked"

                                            onClick={handleChange}
                                        >
                                        </input>
                                        <label className="form-check-label" for="flexCheckChecked">
                                            Edinburgh
                                        </label>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Our Pick</Accordion.Header>
                                <Accordion.Body>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="ourPick" name='location' id="flexCheckDefault"

                                            onClick={handleChange}
                                        ></input>
                                        <label className="form-check-label" for="flexCheckDefault" value='Aberdeen'
                                        >
                                            Yes
                                        </label>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Type</Accordion.Header>
                                <Accordion.Body>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                            value='All'
                                            onClick={handleChange2}
                                        >

                                        </input>
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            All
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                            value='Aberdeen'
                                            onClick={handleChange2}
                                        >
                                        </input>
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Aberdeen
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                            value='Edinburgh'
                                            onClick={handleChange2}
                                        >
                                        </input>
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Edinburgh
                                        </label>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Rating</Accordion.Header>
                                <Accordion.Body>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Facilities</Accordion.Header>
                                <Accordion.Body>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </Col>
                </Row> */}


            </Container >

            }

        </>
    )
}

export default Search
