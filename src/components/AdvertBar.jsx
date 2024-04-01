import React from 'react'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas)

const AdvertBar = ({ adverts }) => {
    return (

        <Container>
            <Row className='d-flex flex-md-row flex-column d-md-flex d-none mt-3'>
                <hr />
                {adverts.map((advert) => (
                    <Col
                        className='col-md-4 py-1'
                        title='Advert Card'
                        key={advert.title}
                        id={advert.title}
                    >
                        <Card
                            className='text-bg-primary text-center h-100' >
                            <FontAwesomeIcon
                                icon={advert.icon}
                                className='fs-1 pt-3'
                            />
                            <Card.Body>
                                <Card.Title>
                                    {advert.stat}
                                </Card.Title>
                                <Card.Title>
                                    {advert.title}
                                </Card.Title>
                                <Card.Text>
                                    {advert.message}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container >

    )
}

export default AdvertBar
