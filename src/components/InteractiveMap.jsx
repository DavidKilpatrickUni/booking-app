import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MapPopup from './MapPopup';
import MapIconBar from './MapIconBar';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import * as L from "leaflet";
import Shadow from '../leaflet-color-markers-master/img/marker-shadow.png'

import HotelSVG from '../images/hotel-solid.svg'
import BinocularsSVG from '../images/binoculars-solid.svg'
import MartiniSVG from '../images/martini-glass-solid.svg'
import UtensilsSVG from '../images/utensils-solid.svg'
import CoffeeSVG from '../images/mug-saucer-solid.svg'



const InteractiveMap = ({ featured }) => {

    console.log(featured)
    const hotelIcon = new L.Icon({
        iconUrl: HotelSVG,
        shadowUrl: Shadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });


    const binocularIcon = new L.Icon({
        iconUrl: BinocularsSVG,
        shadowUrl: Shadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });


    const martiniIcon = new L.Icon({
        iconUrl: MartiniSVG,
        shadowUrl: Shadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });


    const utensilsIcon = new L.Icon({
        iconUrl: UtensilsSVG,
        shadowUrl: Shadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });


    const coffeeIcon = new L.Icon({
        iconUrl: CoffeeSVG,
        shadowUrl: Shadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });



    return (
        <>
            <Container>
                <Row>
                    <Col style={{ height: '400px', width: '100%', overflowX: 'hidden' }}>

                        <MapContainer
                            style={{ height: '100%', width: '100%' }}
                            center={[featured.geoLocation.lat, featured.geoLocation.lng]}
                            zoom={13}
                            scrollWheelZoom={false}
                        >
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
                            />


                            <Marker position={[featured.geoLocation.lat, featured.geoLocation.lng]} >
                                <Popup>
                                    You Are Here
                                </Popup>
                            </Marker>

                            {featured.stayMarkers.map((mark) => (
                                <Marker position={[mark.geoLocation.lat, mark.geoLocation.lng]} icon={hotelIcon} >
                                    <Popup>
                                        <MapPopup mark={mark} />
                                    </Popup>
                                </Marker>
                            ))}

                            {featured.attractionMarkers.map((mark) => (
                                <Marker position={[mark.geoLocation.lat, mark.geoLocation.lng]} icon={binocularIcon}>
                                    <Popup>
                                        <MapPopup mark={mark} />
                                    </Popup>
                                </Marker>
                            ))}

                            {featured.restaurantMarkers.map((mark) => (
                                <Marker position={[mark.geoLocation.lat, mark.geoLocation.lng]} icon={utensilsIcon} >
                                    <Popup>
                                        <MapPopup mark={mark} />
                                    </Popup>
                                </Marker>
                            ))}

                            {featured.barMarkers.map((mark) => (
                                <Marker position={[mark.geoLocation.lat, mark.geoLocation.lng]} icon={martiniIcon} >
                                    <Popup>
                                        <MapPopup mark={mark} />
                                    </Popup>
                                </Marker>
                            ))}

                            {featured.coffeeMarkers.map((mark) => (
                                <Marker position={[mark.geoLocation.lat, mark.geoLocation.lng]} icon={coffeeIcon} >
                                    <Popup>
                                        <MapPopup mark={mark} />
                                    </Popup>
                                </Marker>
                            ))}


                        </MapContainer>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <MapIconBar />
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default InteractiveMap
