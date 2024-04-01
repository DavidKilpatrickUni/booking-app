import React from 'react'
import { useNavigate } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const InfoPicRight = ({ details }) => {

    const navigate = useNavigate()

    return (
        <section>
            <Container >
                <Row
                    className='align-items-center d-flex flex-column flex-md-row'
                >
                    <Col
                        className='col-md-6 text-center order-2 order-md-1'
                    >
                        <p
                            className='m-0'
                        >
                            {details.info}
                        </p>
                    </Col>
                    <Col
                        className='col-md-6 mb-3 mb-md-0 order-1 order-md-2'
                    >
                        <img
                            src={details.pic}
                            id={details.refID}
                            alt={`${details.name} in ${details.location}`}
                            className='img-fluid rounded-3'
                            onClick={() => navigate(`/${details.location}/dining/${details.name}/${details.refID}`)}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default InfoPicRight
