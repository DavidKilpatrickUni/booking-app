import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const SearchCriteriaHolder = ({ possible }) => {


    const navigate = useNavigate()
    const location = useLocation()

    const paramArray = location.pathname.split('/')
    const removeSpace = paramArray.filter((item) => item !== '')
    const removeq = removeSpace.filter((item) => item !== 'q')
    const removeSearch = removeq.filter((item) => item !== 'search')


    useEffect(() => {

        let checkboxes = document.getElementsByClassName('form-check-input')

        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false
        }

        removeSearch.forEach((item) => (
            document.getElementById(item).checked = true
        ))


    }, [location])


    const handleChange = (e) => {
        let url = ''


        if (e.target.checked) {

            removeSearch.push(e.target.value)
            removeSearch.forEach((item) => {
                url += '/' + item
            })

            navigate(`q${url}`)


        }
        else {
            const array = removeSearch.filter((item) => (item !== e.target.value))


            array.forEach((item) => {
                url += '/' + item
            })

            navigate(`q${url}`)
        }
    }

    return (

        <>
            <Container className='sticky-top'>
                <Row>
                    <Col>
                        <h3>Filter By</h3>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0" >
                                <Accordion.Header>Location</Accordion.Header>
                                <Accordion.Body>
                                    <Row className='d-flex flex-md-column flex-row'>
                                        <Col className="form-check col-4 col-md-12">
                                            <input className="form-check-input" type="checkbox" value="Aberdeen"
                                                name='location'
                                                id="Aberdeen"

                                                onClick={handleChange}

                                            >
                                            </input>
                                            <label className="form-check-label" for="Aberdeen">
                                                Aberdeen ({possible.filter((item) => (item.location === 'Aberdeen')).length})
                                            </label>
                                        </Col>
                                        <Col className="form-check col-4 col-md-12">
                                            <input className="form-check-input" type="checkbox" value="Edinburgh"
                                                name='location'
                                                id="Edinburgh"

                                                onClick={handleChange}
                                            >
                                            </input>
                                            <label className="form-check-label" for="Edinburgh">
                                                Edinburgh ({possible.filter((item) => (item.location === 'Edinburgh')).length})
                                            </label>
                                        </Col>
                                        <Col className="form-check col-4 col-md-12">
                                            <input className="form-check-input" type="checkbox" value="Glasgow"
                                                name='location'
                                                id="Glasgow"

                                                onClick={handleChange}
                                            >
                                            </input>
                                            <label className="form-check-label" for="Glasgow">
                                                Glasgow ({possible.filter((item) => (item.location === 'Glasgow')).length})
                                            </label>
                                        </Col>
                                        <Col className="form-check col-4 col-md-12">
                                            <input className="form-check-input" type="checkbox" value="London"
                                                name='location'
                                                id="London"

                                                onClick={handleChange}
                                            >
                                            </input>
                                            <label className="form-check-label" for="London">
                                                London ({possible.filter((item) => (item.location === 'London')).length})
                                            </label>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Our Pick</Accordion.Header>
                                <Accordion.Body>
                                    <Row className='d-flex flex-md-column flex-row justify-content-start'>
                                        <Col className="form-check col-3 col-md-12">
                                            <input className="form-check-input" type="checkbox" value='Our-Pick' name='ourPick' id="Our-Pick"

                                                onClick={handleChange}
                                            ></input>
                                            <label className="form-check-label" for="Our-Pick"
                                            >
                                                Yes ({possible.filter((item) => (item.ourPick === true)).length})
                                            </label>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Type</Accordion.Header>
                                <Accordion.Body>
                                    <Row className='d-flex flex-md-column flex-row'>
                                        <Col className="form-check col-4 col-md-12">
                                            <input className="form-check-input" type="checkbox" value="Apartment" id="Apartment"
                                                onClick={handleChange}
                                            ></input>
                                            <label className="form-check-label" for="Apartment"
                                            >
                                                Apartment ({possible.filter((item) => (item.type === 'Apartment')).length})
                                            </label>
                                        </Col>
                                        <Col className="form-check col-4 col-md-12">
                                            <input className="form-check-input" type="checkbox" value="Studio"
                                                id="Studio"
                                                onClick={handleChange}
                                            >
                                            </input>
                                            <label className="form-check-label" for="Studio">
                                                Studio ({possible.filter((item) => (item.type === 'Studio')).length})
                                            </label>
                                        </Col>
                                        <Col className="form-check col-4 col-md-12">
                                            <input className="form-check-input" type="checkbox" value="Hotel"
                                                id="Hotel"
                                                onClick={handleChange}
                                            >
                                            </input>
                                            <label className="form-check-label" for="Hotel">
                                                Hotel ({possible.filter((item) => (item.type === 'Hotel')).length})
                                            </label>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Stars</Accordion.Header>
                                <Accordion.Body>
                                    <Row className='d-flex flex-md-column flex-row '>
                                        <Col className="form-check col-4 col-md-12">
                                            <input className="form-check-input" type="checkbox" value='1-Star'
                                                id="1-Star"

                                                onClick={handleChange}
                                            ></input>
                                            <label className="form-check-label" for="1-Star"
                                            >
                                                1-Star ({possible.filter((item) => (item.stars.length === 1)).length})
                                            </label>
                                        </Col>
                                        <Col className="form-check col-4 col-md-12">
                                            <input className="form-check-input" type="checkbox" value='2-Star' id="2-Star"

                                                onClick={handleChange}
                                            ></input>
                                            <label className="form-check-label" for="2-Star"
                                            >
                                                2-Star ({possible.filter((item) => (item.stars.length === 2)).length})
                                            </label>
                                        </Col>
                                        <Col className="form-check col-4 col-md-12">
                                            <input className="form-check-input" type="checkbox" value='3-Star' name='review' id="3-Star"

                                                onClick={handleChange}
                                            ></input>
                                            <label className="form-check-label" for="3-Star"
                                            >
                                                3-Star ({possible.filter((item) => (item.stars.length === 3)).length})
                                            </label>
                                        </Col>
                                        <Col className="form-check col-4 col-md-12">
                                            <input className="form-check-input" type="checkbox" value='4-Star' name='review' id="4-Star"

                                                onClick={handleChange}
                                            ></input>
                                            <label className="form-check-label" for="4-Star"
                                            >
                                                4-Star ({possible.filter((item) => (item.stars.length === 4)).length})
                                            </label>
                                        </Col>
                                        <Col className="form-check col-4 col-md-12">
                                            <input className="form-check-input" type="checkbox" value='5-Star' name='review' id="5-Star"

                                                onClick={handleChange}
                                            ></input>
                                            <label className="form-check-label" for="5-Star"
                                            >
                                                5-Star ({possible.filter((item) => (item.stars.length === 5)).length})
                                            </label>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Review Score</Accordion.Header>
                                <Accordion.Body>
                                    <Row className='d-flex flex-md-column flex-row '>
                                        <Col className="form-check col-6 col-md-12">
                                            <input className="form-check-input" type="checkbox" value='1-Review' name='1-review' id="1-Review"

                                                onClick={handleChange}
                                            ></input>
                                            <label className="form-check-label" for="1-Review"
                                            >
                                                1-Review  ({possible.filter((item) => (item.reviewScore >= 0 && item.reviewScore < 2)).length})
                                            </label>
                                        </Col>
                                        <Col className="form-check col-6 col-md-12">
                                            <input className="form-check-input" type="checkbox" value='2-Review' name='review' id="2-Review"

                                                onClick={handleChange}
                                            ></input>
                                            <label className="form-check-label" for="2-Review"
                                            >
                                                2-Review ({possible.filter((item) => (item.reviewScore >= 1 && item.reviewScore < 3)).length})
                                            </label>
                                        </Col>
                                        <Col className="form-check col-6 col-md-12">
                                            <input className="form-check-input" type="checkbox" value='3-Review' name='review' id="3-Review"

                                                onClick={handleChange}
                                            ></input>
                                            <label className="form-check-label" for="3-Review"
                                            >
                                                3-Review ({possible.filter((item) => (item.reviewScore >= 2 && item.reviewScore < 3)).length})
                                            </label>
                                        </Col>
                                        <Col className="form-check col-6 col-md-12">
                                            <input className="form-check-input" type="checkbox" value='4-Review' name='review' id="4-Review"

                                                onClick={handleChange}
                                            ></input>
                                            <label className="form-check-label" for="4-Review"
                                            >
                                                4-Review ({possible.filter((item) => (item.reviewScore >= 4 && item.reviewScore < 5)).length})
                                            </label>
                                        </Col>
                                        <Col className="form-check col-6 col-md-12">
                                            <input className="form-check-input" type="checkbox" value='5-Review' name='review' id="5-Review"

                                                onClick={handleChange}
                                            ></input>
                                            <label className="form-check-label" for="5-Review"
                                            >
                                                5-Review ({possible.filter((item) => (item.reviewScore >= 5 && item.reviewScore < 6)).length})
                                            </label>
                                        </Col>
                                        <Col className="form-check col-6 col-md-12">
                                            <input className="form-check-input" type="checkbox" value='6-Review' name='review' id="6-Review"

                                                onClick={handleChange}
                                            ></input>
                                            <label className="form-check-label" for="6-Review"
                                            >
                                                6-Review ({possible.filter((item) => (item.reviewScore >= 6 && item.reviewScore < 7)).length})
                                            </label>
                                        </Col>
                                        <Col className="form-check col-6 col-md-12">
                                            <input className="form-check-input" type="checkbox" value='7-Review' name='review' id="7-Review"

                                                onClick={handleChange}
                                            ></input>
                                            <label className="form-check-label" for="7-Review"
                                            >
                                                7-Review ({possible.filter((item) => (item.reviewScore >= 7 && item.reviewScore < 8)).length})
                                            </label>
                                        </Col>
                                        <Col className="form-check col-6 col-md-12">
                                            <input className="form-check-input" type="checkbox" value='8-Review' name='review' id="8-Review"

                                                onClick={handleChange}
                                            ></input>
                                            <label className="form-check-label" for="8-Review"
                                            >
                                                8-Review ({possible.filter((item) => (item.reviewScore >= 8 && item.reviewScore < 9)).length})
                                            </label>
                                        </Col>
                                        <Col className="form-check col-6 col-md-12">
                                            <input className="form-check-input" type="checkbox" value='9-Review' name='review' id="9-Review"

                                                onClick={handleChange}
                                            ></input>
                                            <label className="form-check-label" for="9-Review"
                                            >
                                                9-Review ({possible.filter((item) => (item.reviewScore >= 9)).length})
                                            </label>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Price Range</Accordion.Header>
                                <Accordion.Body>

                                    <Row className='d-flex flex-md-column flex-row '>
                                        <Col className="form-check col-6 col-md-12">
                                            <input className="form-check-input" type="checkbox" value='0-49'
                                                id="0-49"

                                                onClick={handleChange}
                                            ></input>
                                            <label className="form-check-label" for="0-49"
                                            >
                                                £0-£49 ({possible.filter((item) => (item.price >= 0 && item.price < 50)).length})
                                            </label>
                                        </Col>
                                        <Col className="form-check col-6 col-md-12">
                                            <input className="form-check-input" type="checkbox" value='50-99' id="50-99"

                                                onClick={handleChange}
                                            ></input>
                                            <label className="form-check-label" for="50-99"
                                            >
                                                £50-£99 ({possible.filter((item) => (item.price >= 50 && item.price < 100)).length})
                                            </label>
                                        </Col>
                                        <Col className="form-check col-6 col-md-12">
                                            <input className="form-check-input" type="checkbox" value='100-149' name='review' id="100-149"

                                                onClick={handleChange}
                                            ></input>
                                            <label className="form-check-label" for="100-149"
                                            >
                                                £100-£149 ({possible.filter((item) => (item.price >= 100 && item.price < 150)).length})
                                            </label>
                                        </Col>
                                        <Col className="form-check col-6 col-md-12">
                                            <input className="form-check-input" type="checkbox" value='150-199' name='review' id="150-199"

                                                onClick={handleChange}
                                            ></input>
                                            <label className="form-check-label" for="150-199"
                                            >
                                                £150-£199 ({possible.filter((item) => (item.price >= 150 && item.price < 200)).length})
                                            </label>
                                        </Col>
                                        <Col className="form-check col-6 col-md-12">
                                            <input className="form-check-input" type="checkbox" value='200-249' name='review' id="200-249"

                                                onClick={handleChange}
                                            ></input>
                                            <label className="form-check-label" for="200-249"
                                            >
                                                £200-£249 ({possible.filter((item) => (item.price >= 200 && item.price < 249)).length})
                                            </label>
                                        </Col>
                                        <Col className="form-check col-6 col-md-12">
                                            <input className="form-check-input" type="checkbox" value='250+' name='review' id="250+"

                                                onClick={handleChange}
                                            ></input>
                                            <label className="form-check-label" for="250+"
                                            >
                                                £250+ ({possible.filter((item) => (item.price >= 250)).length})
                                            </label>
                                        </Col>
                                    </Row>


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
