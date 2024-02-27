import React from 'react'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const MapIconBar = () => {


    const array = [
        {
            icon: 'fa-hotel',
            color: 'primary',
            name: 'Stays'
        },
        {
            icon: 'fa-binoculars',
            color: 'danger',
            name: 'Attractions'
        },
        {
            icon: 'fa-utensils',
            color: 'warning',
            name: 'Restaurants'
        },
        {
            icon: 'fa-martini-glass',
            color: 'success',
            name: 'Bars'
        },
        {
            icon: 'fa-mug-saucer',
            color: 'info',
            name: 'Coffee Shops'
        }
    ]

    return (
        <>
            <Container>
                <Row className='mt-3 d-flex justify-content-center'>

                    {array.map((item) => (
                        <Col className={`col-md-2 text-center text-${item.color}`} style={{ cursor: 'pointer' }}>
                            <FontAwesomeIcon
                                icon={item.icon}
                                className='fs-1'
                            />
                            <p className={`d-md-block d-none text-${item.color}`}>
                                {item.name}
                            </p>
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    )
}

export default MapIconBar
