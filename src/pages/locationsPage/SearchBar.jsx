import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'


const SearchBar = ({ locations }) => {




    return (
        <form>
            <Container>
                <Row className='d-flex flex-column flex-md-row justify-content-center'>
                    <Col className='col-md-5 py-1'>
                        <select className="form-select">
                            <option value='*'>
                                City
                            </option>
                            {locations.map((loc) => (
                                <option value={loc.toLowerCase()}>{loc}</option>
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
