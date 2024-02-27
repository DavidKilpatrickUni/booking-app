import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

const SearchBar = () => {

    const locations = ['Edinburgh', 'London', 'Cardiff']
    const attractions = ['Tour', 'Museum', 'Sight Seeing']


    return (
        <form>
            <Container>
                <Row className='d-flex flex-column flex-md-row'>
                    <Col className='col-md-5 py-1'>
                        <select className="form-select">
                            <option value='*'>
                                City
                            </option>
                            {locations.map((loc, index) => (
                                <option value={loc.toLowerCase()} key={index}>
                                    {loc}
                                </option>
                            ))}
                        </select>
                    </Col>
                    <Col className='col-md-5 py-1'>
                        <select className="form-select">
                            <option value='*'>
                                Type
                            </option>
                            {attractions.map((place, index) => (
                                <option value={place.toLowerCase()} key={index}>
                                    {place}
                                </option>
                            ))}
                        </select>
                    </Col>

                    <Col className='col-md-2 d-grid py-1'>
                        <Button variant="primary" className="text-white"
                        >
                            Submit
                        </Button>
                    </Col>

                </Row>
            </Container>
        </form>
    )
}

export default SearchBar
