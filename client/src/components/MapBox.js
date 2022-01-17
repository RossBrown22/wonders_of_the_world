import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {Link} from 'react-router-dom'
import L from 'leaflet'
import Icon_new_wonders1 from '../icons/Icon_new_wonders1.png'
import Icon_natural_wonders1 from '../icons/Icon_natural_wonders1.png'
import Icon_ancient_wonders1 from '../icons/Icon_ancient_wonders1.png'


const MapBox = () => {




const icon_new = L.icon({
    iconUrl: Icon_new_wonders1,
    iconSize: [35, 35],
});


const icon_ancient = L.icon({
    iconUrl: Icon_ancient_wonders1,
    iconSize: [35, 35],
});

const icon_natural = L.icon({
    iconUrl: Icon_natural_wonders1,
    iconSize: [35, 35],
});


return(

<MapContainer center={[10.000, 0.00]} zoom={2} scrollWheelZoom={true} minZoom={2} maxZoom={14} maxBoundsViscosity={1}

>


    <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        
    />
    


{/* NEW  */}

    <Marker position={[30.323337, 35.451666]} icon={icon_new}>
        <Popup>
        Petra <br /> <Link to="/new"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>


    <Marker position={[40.4319077,116.5681862]} icon={icon_new}>
        <Popup>
        Great Wall <br /> <Link to="/new"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>


    <Marker position={[-22.951916, -43.2126759]} icon={icon_new}>
        <Popup>
        Christ the Redeemer <br /> <Link to="/new"><button type="button">Learn More</button></Link>
        {/* <button><a href="/new">Learn More</a></button>. */}
        </Popup>
    </Marker>

    <Marker position={[41.8902821,12.4878589]} icon={icon_new}>
        <Popup>
        Colosseum <br /> <Link to="/new"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[-13.1631412,-72.5471516]} icon={icon_new}>
        <Popup>
        Machu Pichu <br /> <Link to="/new"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[20.6787816,-88.5706656]} icon={icon_new}>
        <Popup>
        Chichen Itza <br /> <Link to="/new"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[27.1751448,78.0399535]} icon={icon_new}>
        <Popup>
        Taj Mahal <br /> <Link to="/new"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>


{/* ANCIENT  */}

<Marker position={[29.9792345,31.1320132]} icon={icon_ancient}>
        <Popup>
        Great Pyramid of Giza <br /> <Link to="/ancient"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[32.4912413,44.435228]} icon={icon_ancient}>
        <Popup>
        Hanging Gardens of Babylon <br /> <Link to="/ancient"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[37.9493601,27.3627619]} icon={icon_ancient}>
        <Popup>
        Temple of Artemis <br /> <Link to="/ancient"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[37.8022947,22.1210547]} icon={icon_ancient}>
        <Popup>
        Statue of Zeus <br /> <Link to="/ancient"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[37.0378874,27.4219277]} icon={icon_ancient}>
        <Popup>
        Mausoleum At Halicarnassus  <br /> <Link to="/ancient"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[36.4509959,28.2236147]} icon={icon_ancient}>
        <Popup>
        Colossus of Rhodes <br /> <Link to="/ancient"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[31.2124397,29.887799]} icon={icon_ancient}>
        <Popup>
        Lighthouse of Alexandria <br /> <Link to="/ancient"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>


{/* NATURAL */}

<Marker position={[63.8793171,-22.4517288]}icon={icon_natural}>
        <Popup>
        Aurora Borealis <br /> <Link to="/natural"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[36.0997623,-112.1212394]} icon={icon_natural}>
        <Popup>
        Grand Canyon <br /> <Link to="/natural"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[-19.3401041,145.40679]} icon={icon_natural}>
        <Popup>
        Great Barrier Reef <br /> <Link to="/natural"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[-22.8197641,-43.2922626]} icon={icon_natural}>
        <Popup>
        Harbor of Rio de Janeiro  <br /> <Link to="/natural"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[27.9881199,86.9162203]} icon={icon_natural}>
        <Popup>
        Mount Everest <br /> <Link to="/natural"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[19.4933462,-102.2601524]} icon={icon_natural}>
        <Popup>
        Paricutin Volcano <br /> <Link to="/natural"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[-17.9270587,25.8437687]} icon={icon_natural}>
        <Popup>
        Victoria Falls <br /> <Link to="/natural"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>



</MapContainer>
)
}

export default MapBox;