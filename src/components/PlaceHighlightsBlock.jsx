import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PlaceHighlightsBlock = ({ data }) => {
    return (
        <>
            <Container>
                <Row
                    className='d-flex flex-row justify-content-center'
                >
                    {data.slice(0, 12).map((item) => (
                        <Col
                            className='col-2 text-center'
                            key={item.name}
                            title='Highlight Info'
                        >
                            <p
                                className='my-0 fs-3'
                            >
                                <FontAwesomeIcon
                                    icon={item.icon}
                                    className='badge bg-primary '
                                />
                            </p>
                            <p
                                className='d-none d-md-block'
                            >
                                {item.name}
                            </p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default PlaceHighlightsBlock
