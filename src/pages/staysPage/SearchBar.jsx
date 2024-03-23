import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

import { doc, getDoc, updateDoc, collection, getDocs, query, where, orderBy, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'

const SearchBar = ({ locations, stays }) => {



    const [locationList, setLocationList] = useState([])
    const [stayList, setStayList] = useState([])

    const [formData, setFormData] = useState(null)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {

        const fetchData = async () => {

            const locationRef = collection(db, 'locationTabs')

            const locationSnap = await getDocs(locationRef)

            let locations = []

            locationSnap.forEach((doc) => {
                return locations.push(
                    doc.data()
                )
            })

            const stayRef = collection(db, 'stayTabs')

            const staysSnap = await getDocs(stayRef)

            let stays = []

            staysSnap.forEach((doc) => {
                return stays.push(doc.data()
                )
            })

            setLocationList(locations)
            setStayList(stays)
            setFormData({
                location: locations[0].location,
                refID: locations[0].refID,
                type: stays[0].type
            })
        }

        fetchData()
        setLoading(false)
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate(`/search/${formData.location}/${formData.type}`)
        console.log(formData)
    }

    const handleChange = (e) => {
        console.log(e.target.value)

        const filter = locations.filter((item) => (
            item.location === e.target.value
        ))

        console.log(filter)

        setFormData((prev) => (
            {
                ...prev,
                location: filter[0].location,
                refID: filter[0].refID,

            }
        ))
        console.log(formData)
    }

    const handleChange2 = (e) => {
        console.log(e.target.value)
        setFormData((prev) => (
            {
                ...prev,
                type: e.target.value
            }
        ))
        console.log(formData)
    }

    return (

        <form onSubmit={handleSubmit}>

            {!loading && <Container>
                <Row className='d-flex flex-column flex-md-row'>
                    <Col className='col-md-5 py-1'>
                        <select className="form-select"
                            onChange={handleChange}>
                            {locationList.map((loc, index) => (
                                <option value={loc.location} key={index}>
                                    {loc.location}
                                </option>
                            ))}
                        </select>
                    </Col>
                    <Col className='col-md-5 py-1'>
                        <select className="form-select"
                            onChange={handleChange2}>
                            {stayList.map((stay, index) => (
                                <option value={stay.type} key={index}>
                                    {stay.type}
                                </option>
                            ))}
                        </select>
                    </Col>

                    <Col className='col-md-2 d-grid py-1'>
                        <Button variant="primary" type='submit' className="text-white">
                            Submit
                        </Button>
                    </Col>

                </Row>
            </Container>}

        </form>


    )
}

export default SearchBar
