import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { getStorage, ref, getDownloadURL } from "firebase/storage";

const MenuSquares = ({ children, myData }) => {

    const [loading, setLoading] = useState(true)

    const params = useParams()
    const storage = getStorage();

    useEffect(() => {

        const getData = () => {

            myData.menus.forEach((item, index) => {

                let fileRef = ref(storage, params.id + '/' + item.file);

                console.log(fileRef)
                getDownloadURL(fileRef)
                    .then((url) => {
                        console.log(url)

                        const myValue = document.getElementById('myHREF' + index);
                        myValue.setAttribute('to', url);
                        myValue.setAttribute('href', url);
                    })
                    .catch((error) => {
                        // Handle any errors
                    });
            })
        }
        getData()
        setLoading(false)

    }, [myData])

    console.log(myData)

    return (
        <>
            {!loading &&
                < Container >
                    <Row className='text-center text-md-start py-3'>
                        {children}
                        {myData.menus.map((item, index) => (
                            <>
                                <Col
                                    className='col-md-4 col-sm-6 col-12 text-center d-flex flex-column flex-md-row  mb-2'
                                    key={`Menu-${item.name}`}
                                >

                                    <Link
                                        className='btn btn-outline-primary w-100 p-3 fw-5'
                                        to=''
                                        target='_blank'
                                        id={`myHREF${index}`}>{item.name}
                                    </Link>
                                </Col>
                            </>
                        ))}
                    </Row>
                </Container >
            }
        </>
    )
}

export default MenuSquares
