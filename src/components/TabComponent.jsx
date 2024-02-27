import React from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import TabCard from './TabCard'
import TabList from './TabList'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ReactCountryFlag from "react-country-flag";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas)


const TabComponent = ({tabInfo}) => {
  return (
    <>

                      
            <Tabs
                defaultActiveKey="All"
                id="uncontrolled-tab-example"
                className="mb-2"
                fill 
            >
                <Tab eventKey="All" 
                title='All'
                className='overflow-auto myTabs'
                style ={{maxHeight:'800px'}}
                >
                    <TabList tabInfo={tabInfo} tab={{name:'All'}}/>
                </Tab>

                {tabInfo.tabs.map((tab) =>(
                    <Tab eventKey={tab.name}     className='overflow-auto myTabs'
                    style ={{maxHeight:'800px'}} 
                    title={
                        <>
                         {tab.icon.length == 2 && <span>             
                                <ReactCountryFlag
                                    title={tab.name}
                                    countryCode={tab.icon}
                                    svg
                                    style={{
                                        width: "2em",
                                        height: "1em",
                                    }}
                                />
                            </span>}
                                   {tab.icon.length > 2 && <span>             
                                      <FontAwesomeIcon icon={tab.icon} className='me-2' />
                            </span>}
                            <span>
                                {tab.name}
                            </span> 
                        </>
                        }
                    >
                        <TabList tabInfo={tabInfo} tab={tab}/>
                    </Tab>
                ))}
           
            </Tabs>
    </>
  )
}

export default TabComponent
