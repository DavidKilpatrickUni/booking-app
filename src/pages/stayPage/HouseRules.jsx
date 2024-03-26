import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HouseRules = ({ data }) => {

    return (
        <>
            <Container>
                <h1 className='text-center text-md-start'>House Rules</h1>
                <hr />
                {data.map((rule) => (
                    <Row className='border pt-2'>

                        <Col className='fs-6 col-5'>
                            <FontAwesomeIcon icon={rule.icon} className='text-center' />
                            <span className='ms-2'>{rule.category}</span>
                        </Col>
                        <Col className='col-7 css-fix'>
                            <p>{rule.text}</p>
                        </Col>

                    </Row>

                ))}
            </Container>
        </>
    )
}

export default HouseRules
