import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const HouseRules = ({ data }) => {


    const houseRulesIcons = [
        {
            name: 'Check-In',
            icon: 'fa-arrow-right-to-bracket',
        },
        {
            name: 'Check-Out',
            icon: 'fa-arrow-right-from-bracket',
        }, {
            name: 'Cancelation/Prepayment',
            icon: 'fa-circle-info',
        },
        {
            name: 'Children & Beds',
            icon: 'fa-people-roof',
        },
        {
            name: 'Age Restriction',
            icon: 'fa-person',
        },
        {
            name: 'Smoking',
            icon: 'fa-smoking',
        },
        {
            name: 'Parties',
            icon: 'fa-champagne-glasses',
        },
        {
            name: 'Quiet Hours',
            icon: 'fa-moon',
        },
        {
            name: 'Pets',
            icon: 'fa-paw'
        }











    ]

    return (
        <>
            <Container>
                <h1>House Rules</h1>
                <hr />
                {houseRulesIcons.map((rule) => (
                    <Row>

                        <Col className='fs-5 col-4'>
                            <FontAwesomeIcon icon={rule.icon} className='text-center' />
                            <span className='ms-2 fw-bold'>{rule.name}</span>
                        </Col>


                        <Col>
                        </Col>
                        <hr />
                    </Row>

                ))}
            </Container>
        </>
    )
}

export default HouseRules
