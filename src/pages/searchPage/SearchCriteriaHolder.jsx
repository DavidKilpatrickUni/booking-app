import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom'

const SearchCriteriaHolder = () => {

    const [criteriaArray, setCriteriaArray] = useState(true)

    const params = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    // console.log(location)
    // console.log(params)

    const paramArray = location.pathname.split('/')
    const removeSpace = paramArray.filter((item) => item !== '')
    const removeq = removeSpace.filter((item) => item !== 'q')
    const removeSearch = removeq.filter((item) => item !== 'search')
    //console.log(removeSearch)

    const [query, setQuery] = useState(`?`)

    // const handleChange = (e) => {
    //     let url = ''

    //     //console.log(e)
    //     // console.log(e.target.name)
    //     // console.log(e.target.value)

    //     if (e.target.checked) {
    //         //console.log(removeSearch.length)
    //         removeSearch.push(e.target.value)
    //         removeSearch.forEach((item) => {
    //             url += item
    //         })
    //         //e.target.disabled = true
    //         const joinString = removeSearch.join('/')
    //         //console.log(joinString)

    //         navigate(`${location.pathname}?${url}`)


    //     }
    //     else {
    //         const array = removeSearch.filter((item) => (item !== e.target.value))


    //         //console.log(array)
    //         //console.log(array.length)

    //         array.forEach((item) => {
    //             url += item
    //         })


    //         const joinString = array.join('/')
    //         //console.log(joinString)

    //         navigate(`${location.pathname}?${url}`)


    //     }
    // }

    const handleChange = (e) => {
        setQuery((prev) => prev + `${e.target.name}=${e.target.value}`)
    }

    const handleChange2 = (e) => {

        setQuery((prev) => prev + `${e.target.name}=${e.target.value}`)

    }

    useEffect(() => {
        navigate(query)
    }, [query])


    return (

        <>

            <Container>
                <Row>
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
                                        <input className="form-check-input" type="checkbox" value='true' name='ourPick' id="flexCheckDefault"

                                            onClick={handleChange2}
                                        ></input>
                                        <label className="form-check-label" for="flexCheckDefault"
                                        >
                                            Yes
                                        </label>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Type</Accordion.Header>
                                <Accordion.Body>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Apartment" id="flexCheckDefault"
                                            onClick={handleChange}
                                        ></input>
                                        <label className="form-check-label" for="flexCheckDefault"
                                        >
                                            Apartment
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Studio"
                                            id="flexCheckChecked"
                                            onClick={handleChange}
                                        >
                                        </input>
                                        <label className="form-check-label" for="flexCheckChecked">
                                            Studio
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
                </Row>
            </Container >

        </>
    )
}

export default SearchCriteriaHolder
