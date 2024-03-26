import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';

const SearchOrder = ({ setSearchOrder }) => {

    const handleChange = (e) => {

        setSearchOrder(e.target.value)
    }

    return (
        <>
            <Container>
                <Row>
                    <Col className=''>
                        <div>
                            <select class="form-select form-select-sm  ms-auto text-center" onChange={handleChange}>
                                <option value="desc">Highest Review Score</option>
                                <option value="asc">Lowest Review Score</option>
                                <option value="expensive">Highest Price</option>
                                <option value="cheap">Lowest Price</option>
                                <option value="most">Most Visits</option>
                                <option value="least">Least Visits</option>
                            </select>

                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default SearchOrder
