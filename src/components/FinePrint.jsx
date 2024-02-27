import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const FinePrint = ({ children, fine }) => {
    return (
        <section className='text-center text-md-start'>
            <Container>
                <Row>
                    {children}
                    <Col className='border css-fix text-start'>
                        {fine}
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default FinePrint
