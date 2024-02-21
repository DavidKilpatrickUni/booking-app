import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';

const SearchCriteriaHolder = () => {
    return (
        <>

            <Container>
                <Row>
                    <Col>
                        <h3>Filter By</h3>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Place</Accordion.Header>
                                <Accordion.Body>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Type</Accordion.Header>
                                <Accordion.Body>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Rating</Accordion.Header>
                                <Accordion.Body>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
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
