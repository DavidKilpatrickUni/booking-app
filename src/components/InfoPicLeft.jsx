import React from 'react'
import { useNavigate } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const InfoPicLeft = ({ details }) => {

    const navigate = useNavigate()

    return (
        <section>
            <Container>
                <Row
                    className='align-items-center d-flex flex-column flex-md-row'
                >
                    <Col
                        className='col-md-6 mb-3 mb-md-0 '
                    >
                        <img
                            src={details.pic}
                            id={details.refID}
                            alt={`${details.name} in ${details.location}`}
                            className='img-fluid rounded-3'
                            onClick={() => navigate(`/${details.location}/attraction/${details.name}/${details.refID}`)}
                        />
                    </Col>
                    <Col
                        className='col-md-6 text-center'
                    >
                        <p
                            className='m-0'
                        >
                            {details.info}
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default InfoPicLeft
