import React from 'react'

import { useNavigate } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const ImageGrid2 = ({ children, data }) => {

    const navigate = useNavigate()

    return (
        <section
            className='text-center text-md-start'
        >
            {children}
            <Container>
                <Row
                    className='d-flex flex-column flex-md-row'
                >
                    {data.slice(0, 6).map((location) => (
                        <Col
                            className='col-md-6 my-1'
                            key={location.name}
                            title='Grid Card'
                        >
                            <div
                                className='rounded-3 position-relative'
                                style={{ background: `url(${location.image})center center no-repeat`, backgroundSize: 'Cover', height: '200px' }}
                                onClick={() => navigate(`/${location.location}/${location.category}/${location.name}/${location.refID}`)}
                            >
                                <p
                                    className="position-absolute top-50 text-white fw-bolder ms-2 mt-5"
                                >
                                    {location.name}
                                </p>
                                <small
                                    className=" position-absolute bottom-0 start-0 text-white ms-2 mb-2"
                                >
                                    {location.type}
                                </small>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default ImageGrid2