import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'



const SearchBar = ({ locations, stays }) => {
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
                            {stays.map((stay, index) => (
                                <option value={stay.toLowerCase()} key={index}>
                                    {stay}
                                </option>
                            ))}
                        </select>
                    </Col>

                    <Col className='col-md-2 d-grid py-1'>
                        <Button variant="primary" className="text-white">
                            Submit
                        </Button>
                    </Col>

                </Row>
            </Container>
        </form>
    )
}

export default SearchBar
