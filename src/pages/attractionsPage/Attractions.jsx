import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import SearchBar from './SearchBar'
import Title from '../../components/Title'

import ImageGrid2 from '../../components/ImageGrid2'
import AdvertBar from '../../components/AdvertBar'
import SmallSwiper from '../../components/SmallSwiper'

import TabComponent from '../../components/TabComponent'
import InfoPicLeft from '../../components/InfoPicLeft'

const Attractions = () => {

    const array3 = [
        {
            name: 'Cardiff',
            image: 'https://images.pexels.com/photos/1088291/pexels-photo-1088291.jpeg',
            attraction: 'Bay Castle'
        },
        {
            name: 'Manchester',
            image: 'https://images.pexels.com/photos/15023016/pexels-photo-15023016/free-photo-of-aerial-view-of-manchester-town-hall.jpeg',
            attraction: 'History Museum'
        },
        {
            name: 'Newcastle',
            image: 'https://images.pexels.com/photos/2893285/pexels-photo-2893285.jpeg',
            attraction: 'River Tour'
        },
        {
            name: 'Cardiff',
            image: 'https://images.pexels.com/photos/1088291/pexels-photo-1088291.jpeg',
            attraction: 'Bay Castle'
        },
        {
            name: 'Manchester',
            image: 'https://images.pexels.com/photos/15023016/pexels-photo-15023016/free-photo-of-aerial-view-of-manchester-town-hall.jpeg',
            attraction: 'History Museum'
        },
        {
            name: 'Newcastle',
            image: 'https://images.pexels.com/photos/2893285/pexels-photo-2893285.jpeg',
            attraction: 'River Tour'
        }

    ]

    const adverts = [
        {
            icon: 'fa-map-location-dot',
            stat: '',
            title: 'Explore top attractions',
            message: 'Experience the best of your destination, with attractions, tours, activities and more'
        },
        {
            icon: 'fa-calendar-days',
            stat: '',
            title: 'Fast and flexible',
            message: 'Book tickets online in minutes, with free cancellation on many attractions'
        },
        {
            icon: 'fa-phone-volume',
            stat: '',
            title: 'Support when you need it',
            message: `Booking.com's global Customer Service team is here to help 24/7`
        }
    ]

    const array = [
        {
            name: 'Edinburgh',
            image: 'https://images.pexels.com/photos/7813912/pexels-photo-7813912.jpeg',
            places: 1034
        },
        {
            name: 'London',
            image: 'https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg',
            places: 1564
        },
        {
            name: 'Cardiff',
            image: 'https://images.pexels.com/photos/1088291/pexels-photo-1088291.jpeg',
            places: 894
        },
        {
            name: 'Manchester',
            image: 'https://images.pexels.com/photos/15023016/pexels-photo-15023016/free-photo-of-aerial-view-of-manchester-town-hall.jpeg',
            places: 970
        },
        {
            name: 'Newcastle',
            image: 'https://images.pexels.com/photos/2893285/pexels-photo-2893285.jpeg',
            places: 811
        },
        {
            name: 'Glasgow',
            image: 'https://images.pexels.com/photos/11142526/pexels-photo-11142526.jpeg',
            places: 1294
        },
        {
            name: 'York',
            image: 'https://images.pexels.com/photos/18381522/pexels-photo-18381522/free-photo-of-historic-york-minster-in-england.jpeg',
            places: 768
        }
    ]

     const tabInfo ={
        tabs:[
            {
                name:'Sightseeing',
                icon:'fa-eye'

            },
            {
                name:'Museum',
                icon:'fa-landmark'

            },
            {
                name:'Tour',
                icon:'fa-bus'

            },
            {
                name:'Beach',
                icon:'fa-umbrella-beach'
            },
            {
                name:'Park',
                icon:'fa-tree'
            }

        ],
        places:
        [
            { 
                name:'Holyrood',
                location:'Edinburgh',
                address:'123 Baker Street',
                stars: [],
                score: 8.7,
                image:'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg',
                category:'Sightseeing'
            },
            { 
                name:'Edinburgh Castle',
                location:'Edinburgh',
                address:'123 Baker Street',
                stars: [],
                score: 8.7,
                image:'https://images.pexels.com/photos/34223/mont-saint-michel-france-normandy-europe.jpg',
                category:'Sightseeing'
            },
            { 
                name:'Art Gallery',
                location:'Edinburgh',
                address:'123 Baker Street',
                stars: [],
                score: 8.7,
                image:'https://images.pexels.com/photos/20967/pexels-photo.jpg',
                category:'Museum'
            },
            { 
                name:'Open Bus Tour',
                location:'Edinburgh',
                address:'123 Baker Street',
                stars: [],
                score: 8.7,
                image:'https://images.pexels.com/photos/19738719/pexels-photo-19738719/free-photo-of-tourism-bus-on-street-in-san-francisco.jpeg',
                category:'Tour'
            },
            { 
                name:'Leith Beach',
                location:'Edinburgh',
                address:'123 Baker Street',
                stars: [],
                score: 8.7,
                image:'https://images.pexels.com/photos/8567867/pexels-photo-8567867.jpeg',
                category:'Beach'
            },
            { 
                name:'Edinburgh Park',
                location:'Edinburgh',
                address:'123 Baker Street',
                stars: [],
                score: 8.7,
                image:'https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg',
                category:'Park'
            },
            { 
                name:'Dynamic Earth',
                location:'Edinburgh',
                address:'123 Baker Street',
                stars: [],
                score: 8.7,
                image:'https://images.pexels.com/photos/137038/pexels-photo-137038.jpeg',
                category:'Museum'
            }
        ]
    }

       const details = {
        info: `Dynamic Earth, a five star visitor attraction in Edinburgh, gives you the chance to experience the primeval forces of nature as they shaped our planet, to journey through space and time and even go on a 4DVENTURE around the world. You'll be embarking on the interactive adventure of a lifetime - the lifetime of our planet.
        `,
        pic: 'https://images.pexels.com/photos/14551495/pexels-photo-14551495.jpeg'
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Title>
                            <h1>Attractions</h1>
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
                        <ImageGrid2 array3={array3}>
                            <h1>Discover Popular Attractions</h1>
                        </ImageGrid2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AdvertBar adverts={adverts} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                             <TabComponent tabInfo={tabInfo}/>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <SmallSwiper array={array}>
                            <h1>Our Top Picks</h1>
                            <p>Our Picks</p>
                        </SmallSwiper >
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <SmallSwiper array={array}>
                            <h1>High Rated Attractions</h1>
                            <p>Best Attractions On Offer</p>
                        </SmallSwiper >
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <InfoPicLeft details={details}/>
                    </Col>
                </Row>
    
            </Container>

        </>
    )
}

export default Attractions
