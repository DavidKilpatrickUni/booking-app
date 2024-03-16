import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas)

const TabCard = ({ info }) => {

    // console.log(info)


    const navigate = useNavigate()


    return (
        <>
            <Container>
                <Row className='' onClick={() => navigate(`/${info.location}/${info.category}/${info.name}/${info.refID}`)} style={{ cursor: 'pointer' }}>
                    <Col className='col-6 position-relative'>
                        <img src={info.image} alt='' className='img-fluid rounded-3 h-100 ' />
                        <p className='badge bg-primary fs-6 d-inline d-lg-none position-absolute end-0 me-4 me-lg-1 mt-2 mt-lg-1'>
                            {info.reviewScore}
                        </p>
                    </Col>

                    <Col className='col-6'>
                        <div className='d-flex justify-content-between my-0'>
                            <h6 >
                                {info.name}
                            </h6>
                            <p className='badge bg-primary fs-6 my-0 d-none d-lg-inline'>
                                {info.reviewScore}
                            </p>
                        </div>

                        <p className='my-sm-1 my-0 fst-italic'>{info.type}</p>

                        {info.stars.length > 0 ?
                            <p className='text-warning'>
                                {info.stars.map((star) => (
                                    <FontAwesomeIcon icon={star} className='' />
                                ))}
                            </p>
                            :
                            <p className='text-secondary fst-italic'>
                                No Star Rating
                            </p>
                        }



                        <p className=' d-none d-sm-inline d-md-none d-lg-inline'>{info.address}</p>
                        <p className=''>{info.location}</p>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default TabCard
