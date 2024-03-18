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
            //e.target.disabled = true
            const joinString = removeSearch.join('/')
            //console.log(joinString)

            navigate(`q${url}`)


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


        }
    }




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
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Glasgow"
                                            name='location'
                                            id="flexCheckChecked2"
                                            onClick={handleChange}
                                        >
                                        </input>
                                        <label className="form-check-label" for="flexCheckChecked2">
                                            Glasgow
                                        </label>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Our Pick</Accordion.Header>
                                <Accordion.Body>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value='ourPick' name='ourPick' id="flexCheckDefault3"

                                            onClick={handleChange}
                                        ></input>
                                        <label className="form-check-label" for="flexCheckDefault3"
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
                                        <input className="form-check-input" type="checkbox" value="Apartment" id="flexCheckDefault4"
                                            onClick={handleChange}
                                        ></input>
                                        <label className="form-check-label" for="flexCheckDefault4"
                                        >
                                            Apartment
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Studio"
                                            id="flexCheckChecked5"
                                            onClick={handleChange}
                                        >
                                        </input>
                                        <label className="form-check-label" for="flexCheckChecked5">
                                            Studio
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Hotel"
                                            id="flexCheckChecked6"
                                            onClick={handleChange}
                                        >
                                        </input>
                                        <label className="form-check-label" for="flexCheckChecked6">
                                            Hotel
                                        </label>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Stars</Accordion.Header>
                                <Accordion.Body>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value='1Star' name='review' id="flexCheckDefault8"

                                            onClick={handleChange}
                                        ></input>
                                        <label className="form-check-label" for="flexCheckDefault8"
                                        >
                                            1 Star
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value='2Star' name='review' id="flexCheckDefault9"

                                            onClick={handleChange}
                                        ></input>
                                        <label className="form-check-label" for="flexCheckDefault9"
                                        >
                                            2 Star
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value='3Star' name='review' id="flexCheckDefault10"

                                            onClick={handleChange}
                                        ></input>
                                        <label className="form-check-label" for="flexCheckDefault10"
                                        >
                                            3 Star
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value='4Star' name='review' id="flexCheckDefault11"

                                            onClick={handleChange}
                                        ></input>
                                        <label className="form-check-label" for="flexCheckDefault11"
                                        >
                                            4 Star
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value='5Star' name='review' id="flexCheckDefault12"

                                            onClick={handleChange}
                                        ></input>
                                        <label className="form-check-label" for="flexCheckDefault12"
                                        >
                                            5 Star
                                        </label>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Review Score</Accordion.Header>
                                <Accordion.Body>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value='3Review' name='review' id="flexCheckDefault13"

                                            onClick={handleChange}
                                        ></input>
                                        <label className="form-check-label" for="flexCheckDefault13"
                                        >
                                            3+ Review
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value='5Review' name='review' id="flexCheckDefault14"

                                            onClick={handleChange}
                                        ></input>
                                        <label className="form-check-label" for="flexCheckDefault14"
                                        >
                                            5+ Review
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value='7Review' name='review' id="flexCheckDefault15"

                                            onClick={handleChange}
                                        ></input>
                                        <label className="form-check-label" for="flexCheckDefault15"
                                        >
                                            7+ Review
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value='8Review' name='review' id="flexCheckDefault16"

                                            onClick={handleChange}
                                        ></input>
                                        <label className="form-check-label" for="flexCheckDefault16"
                                        >
                                            8+ Review
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value='9Review' name='review' id="flexCheckDefault17"

                                            onClick={handleChange}
                                        ></input>
                                        <label className="form-check-label" for="flexCheckDefault17"
                                        >
                                            9+ Review
                                        </label>
                                    </div>

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
