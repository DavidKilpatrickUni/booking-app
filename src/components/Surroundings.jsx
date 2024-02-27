import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Collapse from 'react-bootstrap/esm/Collapse'

library.add(fas)

const Surroundings = () => {

    const surroundings = [
        {
            category: 'Attractions',
            icon: 'fa-binoculars',
            places: [
                {
                    name: 'Sky Garden',
                    type: 'Sightseeing',
                    distance: '800 m'
                },
                {
                    name: 'London Bridge',
                    type: 'Tour',
                    distance: '1.1 km'
                },
                {
                    name: 'Big Ben',
                    type: 'Sightseeing',
                    distance: '1.3 km'
                }
                ,
                {
                    name: 'Victoria Park',
                    type: 'Park',
                    distance: '1.8 km'
                }
            ]
        },
        {
            category: 'Dining',
            icon: 'fa-utensils',
            places: [
                {
                    name: 'XI Bar',
                    type: 'Bar',
                    distance: '600 m'
                },
                {
                    name: 'Townhouse 360 Kitchen',
                    type: 'Restaurant',
                    distance: '760 m'
                },
                {
                    name: 'Vicinity',
                    type: 'Restaurant',
                    distance: '1.1 km'
                }
            ]
        },
        {
            category: 'Public Transport',
            icon: 'fa-bus',
            places: [
                {
                    name: 'Tower Hill',
                    type: 'Metro',
                    distance: '1.7 km'
                },
                {
                    name: 'Tower Gateway',
                    type: 'Train',
                    distance: '2.1 km'
                },
                {
                    name: 'Victoria Coach Station',
                    type: 'Bus',
                    distance: '2.4 km'
                }
            ]
        },
        {
            category: 'Closest Airports',
            icon: 'fa-plane',
            places: [
                {
                    name: 'London City Airport',
                    type: 'Airport',
                    distance: '6.1 km'
                },
                {
                    name: 'London Heathrow Airport',
                    type: 'Airport',
                    distance: '8.0 km'
                }
            ]
        }

    ]

    return (
        <section>
            <Container>
                <Row className=''>
                    <h1 className='text-center text-md-start'>Surroundings</h1>
                    <hr />

                    {surroundings.map((surround) => (
                        <>
                            <Col className='col-md-4 col-6 mb-1'>
                                <h5 className='mb-2'><FontAwesomeIcon icon={surround.icon} className='me-2' />{surround.category}</h5>
                                {surround.places.map((place) => (
                                    <Row className='d-flex justify-content-between'>
                                        <Col className='col-9'>
                                            <p ><span className='fst-italic text-secondary' >{place.type} -</span> {place.name}</p>
                                        </Col>
                                        <Col className='col-3 text-end'>
                                            <p >{place.distance}</p>
                                        </Col>

                                    </Row>

                                ))}
                            </Col >
                        </>
                    ))}

                </Row>
            </Container>
        </section >
    )
}

export default Surroundings
