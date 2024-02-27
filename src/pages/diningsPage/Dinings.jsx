import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Title from '../../components/Title'
import SearchBar from './SearchBar'
import ImageBlock2 from '../../components/ImageBlock2'
import TabComponent from '../../components/TabComponent'
import InfoPicRight from '../../components/InfoPicRight'

const Dinings = () => {


    const array2 = [
        {
            location: 'Edinburgh',
            name: 'Some Bar',
            image: 'https://images.pexels.com/photos/941864/pexels-photo-941864.jpeg'
        },
        {
            location: 'London',
            name: 'Burger Joint',
            image: 'https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg'
        }
    ]

    const array3 = [
        {
            location: 'Cardiff',
            name: 'Pizza Slice',
            image: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg'
        },
        {
            location: 'Manchester',
            name: 'Fried Chicken',
            image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg'
        },
        {
            location: 'Newcastle',
            name: 'Chinese Place',
            image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg'
        }
    ]






    const tabInfo = {
        tabs: [
            {
                name: 'Chinese',
                icon: 'CN'

            },
            {
                name: 'Italian',
                icon: 'IT'
            },
            {
                name: 'Indian',
                icon: 'IN'
            },
            {
                name: 'Turkish',
                icon: 'TR'
            },
            {
                name: 'Japanese',
                icon: 'JP'
            },
            {
                name: 'Korean',
                icon: 'KR'
            }

        ],
        places:
            [
                {
                    name: 'The Pearl',
                    location: 'Edinburgh',
                    address: '123 Baker Street',
                    stars: ['fa-star', 'fa-star', 'fa-star'],
                    score: 8.7,
                    image: 'https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg',
                    category: 'Chinese'
                },
                {
                    name: 'Wok Inn',
                    location: 'Edinburgh',
                    address: '123 Baker Street',
                    stars: ['fa-star', 'fa-star'],
                    score: 8.7,
                    image: 'https://images.pexels.com/photos/5409020/pexels-photo-5409020.jpeg',
                    category: 'Chinese'
                },
                {
                    name: 'Little Italy',
                    location: 'Edinburgh',
                    address: '123 Baker Street',
                    stars: ['fa-star', 'fa-star', 'fa-star'],
                    score: 8.7,
                    image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg',
                    category: 'Italian'
                },
                {
                    name: 'Rara Tal',
                    location: 'Edinburgh',
                    address: '123 Baker Street',
                    stars: ['fa-star', 'fa-star', 'fa-star', 'fa-star'],
                    score: 8.7,
                    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
                    category: 'Indian'
                },
                {
                    name: 'Anadolia',
                    location: 'Edinburgh',
                    address: '123 Baker Street',
                    stars: ['fa-star'],
                    score: 8.7,
                    image: 'https://images.pexels.com/photos/15390220/pexels-photo-15390220/free-photo-of-close-up-of-turkish-kebabs-lying-among-raw-ingredients.jpeg',
                    category: 'Turkish'
                },
                {
                    name: 'Mikaku',
                    location: 'Edinburgh',
                    address: '123 Baker Street',
                    stars: ['fa-star', 'fa-star', 'fa-star'],
                    score: 8.7,
                    image: 'https://images.pexels.com/photos/3338537/pexels-photo-3338537.jpeg',
                    category: 'Japanese'
                },
                {
                    name: 'Nanakusa',
                    location: 'Edinburgh',
                    address: '123 Baker Street',
                    stars: ['fa-star', 'fa-star', 'fa-star', 'fa-star', 'fa-star'],
                    score: 8.7,
                    image: 'https://images.pexels.com/photos/2098134/pexels-photo-2098134.jpeg',
                    category: 'Japanese'
                }
            ]
    }

    const details = {
        info: `Welcome to The Social, your ultimate destination for a vibrant late-night experience in the heart of Glasgow city centre. Nestled in the bustling Royal Exchange Square, our stylish cocktail bar and restaurant boasts one of the best outdoor terraces in the city, offering breathtaking views and a perfect spot to unwind.
        `,
        pic: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg'
    }



    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Title>
                            <h1>Food</h1>
                            <p>Find something</p>
                        </Title>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SearchBar />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <ImageBlock2 array2={array2} array3={array3} >
                            <h1>Popular Dining</h1>
                            <p>Explorers Loving These Areas</p>
                        </ImageBlock2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TabComponent tabInfo={tabInfo} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <InfoPicRight details={details} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dinings
