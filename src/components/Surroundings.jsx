import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Collapse from 'react-bootstrap/esm/Collapse'

library.add(fas)

const Surroundings = ({ surroundings }) => {

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
