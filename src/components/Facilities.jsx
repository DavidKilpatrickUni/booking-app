import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas)

const Facilities = () => {

    const facilities = [
        {
            category: 'Bathroom',
            icon: 'fa-bath',
            items: ['Towels', 'Bath', 'Shower', 'Hairdryer', 'Toiletries']
        },
        {
            category: 'Bedroom',
            icon: 'fa-bed',
            items: ['Double Bed', 'Linen', 'Wardrobe', 'Extra Pillows']
        },
        {
            category: 'General',
            icon: 'fa-circle-info',
            items: ['Designated smoking area', 'Wake-up service', 'Ironing facilities']
        },
        {
            category: 'Accessability',
            icon: 'fa-wheelchair',
            items: ['Lower bathroom sink', 'Toilet with grab rails', 'Wheelchair accessible', 'Upper floors accessible by elevator']
        }

    ]


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
