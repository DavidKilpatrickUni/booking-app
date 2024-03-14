import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas)

const Facilities = ({ facilities }) => {




    return (
        <section>
            <Container>
                <Row className=''>
                    <h1 className='text-center text-md-start'>Facilities</h1>
                    <hr />

                    {facilities.map((facility) => (
                        <>
                            <Col className='col-md-4 col-6 mb-1'>
                                <h5 className='mb-2'><FontAwesomeIcon icon={facility.icon} className='me-2' />{facility.category}</h5>
                                {facility.items.map((item) => (
                                    <p>            <FontAwesomeIcon icon='fa-check' className='me-2 text-success' />{item}</p>
                                ))}
                            </Col >
                        </>
                    ))}

                </Row>
            </Container>
        </section >
    )
}

export default Facilities
