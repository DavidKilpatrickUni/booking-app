
import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

const SubscribeBar = () => {
    return (
        <section className='bg-primary py-4 mt-5'>
            <Container >
                <Row>
                    <Col className='col-12'>
                        <header>
                            <h1 className='text-white text-center'>
                                Save Time & Save Money
                            </h1>
                            <p className='text-white text-center'>
                                Sign up and we'll send the best deals to you
                            </p>
                            <form>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" />
                                    <Button variant="secondary" className="text-white">
                                        Sign Up
                                    </Button>
                                </div>
                            </form>
                        </header>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SubscribeBar
