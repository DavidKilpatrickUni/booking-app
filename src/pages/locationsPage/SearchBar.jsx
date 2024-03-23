import React, { useEffect, useState } from 'react'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

import { doc, getDoc, updateDoc, collection, getDocs, query, where, orderBy, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'

const SearchBar = ({ locations }) => {

    const [locationList, setLocationList] = useState([])

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

            setLocationList(locations)
            setFormData({
                location: locations[0].location,
                refID: locations[0].refID
            })

            setLoading(false)
        }
        fetchData()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate(`/${formData.location}/location/${formData.location}/${formData.refID}`)
        console.log(formData)
    }

    const handleChange = (e) => {
        console.log(e.target.value)

        const filter = locations.filter((item) => (
            item.location === e.target.value
        ))

        console.log(filter)

        setFormData(
            {
                location: filter[0].location,
                refID: filter[0].refID
            }
        )
        console.log(formData)
    }


    return (
        <form onSubmit={handleSubmit}>
            {!loading && <Container>
                <Row className='d-flex flex-column flex-md-row justify-content-center'>
                    <Col className='col-md-5 py-1'>
                        <select className="form-select" onChange={handleChange}>

                            {locationList.map((loc) => (
                                <option value={loc.location} id={loc.refID}>
                                    {loc.location}
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
