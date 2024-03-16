import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

const MenuSquares = ({ children, myData }) => {

    const [myMenu, setMyMenu] = useState(null)
    const [loading, setLoading] = useState(true)

    const params = useParams()
    const storage = getStorage();
    const navigate = useNavigate()

    // useEffect(() => {
    //     const fetchData = () => {
    //         let webLinks = []
    //         let path = params.id
    //         let filename = 'testMenu.pdf'
    //         let pathReference = ref(storage, path + '/' + filename);
    //         console.log(pathReference)
    //         getDownloadURL(pathReference)
    //             .then((url) => {
    //                 webLinks.push(url)
    //                 // const xhr = new XMLHttpRequest();
    //                 // xhr.responseType = 'blob';
    //                 // xhr.onload = (event) => {
    //                 //     const blob = xhr.response;
    //                 // };
    //                 // xhr.open('GET', url);
    //                 // xhr.send();
    //             })
    //             .catch((error) => {
    //                 // Handle any errors
    //             });

    //         setMyMenu(webLinks)
    //     }
    //     fetchData()
    // }, [])

    // useEffect(() => {
    //     const fetchData = () => {
    //         let webLinks = []
    //         let listRef = ref(storage, params.id + '/');
    //         console.log(listRef)
    //         listAll(listRef)
    //             .then((res) => {

    //                 res.items.forEach((itemRef) => {
    //                     // All the items under listRef.
    //                     console.log(itemRef)
    //                     console.log('//https:' + itemRef.bucket + '/' + itemRef.fullPath)
    //                 });
    //             })
    //             .catch((error) => {
    //                 // Handle any errors
    //             });

    //         setMyMenu(webLinks)
    //     }
    //     fetchData()
    // }, [])

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

    console.log(myMenu)
    console.log(myData)
    return (
        <>
            {!loading && < Container >
                <Row className='text-center text-md-start py-3'>
                    {children}
                    {myData.menus.map((item, index) => (
                        <>
                            <Col className='col-md-4 col-sm-6 col-12 text-center d-flex flex-column flex-md-row  mb-2'>

                                <Link className='btn btn-outline-primary w-100 p-3 fw-5' to='' target='_blank' id={`myHREF${index}`}>{item.name}</Link>
                                {/* <a className='' noReferer target='_blank' href='hi'></a> */}

                            </Col>
                        </>
                    ))}
                </Row>
            </Container >}
        </>
    )
}

export default MenuSquares
