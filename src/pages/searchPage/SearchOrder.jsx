import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';

const SearchOrder = ({ setSearchOrder }) => {

    const handleChange = (e) => {
        //console.log('hi')
        //console.log(e.target.value)
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
                            </select>

                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default SearchOrder
