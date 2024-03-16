import React from 'react'
import TabCard from './TabCard'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TabList = ({ tabInfo, tab }) => {

  return (

    <>
      <Container>
        <Row>

          {tabInfo.filter(place => place.type == tab.name || tab.name == 'All').map((info) => (
            <Col className='col-md-6 col-12 my-1'>
              <TabCard info={info} />
            </Col>
          ))}

        </Row>
      </Container>

    </>
  )
}

export default TabList
