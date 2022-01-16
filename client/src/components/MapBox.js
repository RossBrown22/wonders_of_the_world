import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {Link} from 'react-router-dom'

const MapBox = () => {

return(
<MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={true}>
    <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
        <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
    </Marker>


    <Marker position={[50.505, -0.59]}>
        <Popup>
        My test popup. <br /> Easily customizable.
        </Popup>
    </Marker>


    <Marker position={[-22.951916, -43.2126759]}>
        <Popup>
        Cristo Redentor. <br /> <Link to="/new"><button type="button">Learn More</button></Link>
        {/* <button><a href="/new">Learn More</a></button>. */}
        </Popup>
    </Marker>



</MapContainer>
)
}

export default MapBox;