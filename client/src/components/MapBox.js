import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {Link} from 'react-router-dom'
import L from 'leaflet'
import Icon_new_wonders from '../icons/Icon_new_wonders.png'


const MapBox = () => {


// const icon_new='🕌'

// const icon_new = L.icon({
//     iconUrl: {Icon_new_wonders},
//     iconSize: [38, 38],
// });

// console.log(Icon_new_wonders);

// return(
//     <div>
//     <img src='../icons/Icon_new_wonders.png'/>
//     </div>
// )

return(

<MapContainer center={[10.000, 0.00]} zoom={2} scrollWheelZoom={true}>
    <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    


{/* NEW  */}

    <Marker position={[30.323337, 35.451666]} >
        <Popup>
        Petra <br /> <Link to="/new"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>


    <Marker position={[40.4319077,116.5681862]}>
        <Popup>
        Great Wall <br /> <Link to="/new"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>


    <Marker position={[-22.951916, -43.2126759]}>
        <Popup>
        Christ the Redeemer <br /> <Link to="/new"><button type="button">Learn More</button></Link>
        {/* <button><a href="/new">Learn More</a></button>. */}
        </Popup>
    </Marker>

    <Marker position={[41.8902821,12.4878589]}>
        <Popup>
        Colosseum <br /> <Link to="/new"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[-13.1631412,-72.5471516]}>
        <Popup>
        Machu Pichu <br /> <Link to="/new"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[20.6787816,-88.5706656]}>
        <Popup>
        Chichen Itza <br /> <Link to="/new"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[27.1751448,78.0399535]}>
        <Popup>
        Taj Mahal <br /> <Link to="/new"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>


{/* ANCIENT  */}

<Marker position={[29.9792345,31.1320132]}>
        <Popup>
        Great Pyramid of Giza <br /> <Link to="/ancient"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[32.4912413,44.435228]}>
        <Popup>
        Hanging Gardens of Babylon <br /> <Link to="/ancient"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[37.9493601,27.3627619]}>
        <Popup>
        Temple of Artemis <br /> <Link to="/ancient"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[37.8022947,22.1210547]}>
        <Popup>
        Statue of Zeus <br /> <Link to="/ancient"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[37.0378874,27.4219277]}>
        <Popup>
        Mausoleum At Halicarnassus  <br /> <Link to="/ancient"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[36.4509959,28.2236147]}>
        <Popup>
        Colossus of Rhodes <br /> <Link to="/ancient"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[31.2124397,29.887799]}>
        <Popup>
        Lighthouse of Alexandria <br /> <Link to="/ancient"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>


{/* NATURAL */}

<Marker position={[63.8793171,-22.4517288]}>
        <Popup>
        Aurora Borealis <br /> <Link to="/natural"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[36.0997623,-112.1212394]}>
        <Popup>
        Grand Canyon <br /> <Link to="/natural"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[-19.3401041,145.40679]}>
        <Popup>
        Great Barrier Reef <br /> <Link to="/natural"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[-22.8197641,-43.2922626]}>
        <Popup>
        Harbor of Rio de Janeiro  <br /> <Link to="/natural"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[27.9881199,86.9162203]}>
        <Popup>
        Mount Everest <br /> <Link to="/natural"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[19.4933462,-102.2601524]}>
        <Popup>
        Paricutin Volcano <br /> <Link to="/natural"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>

    <Marker position={[-17.9270587,25.8437687]}>
        <Popup>
        Victoria Falls <br /> <Link to="/natural"><button type="button">Learn More</button></Link>
        </Popup>
    </Marker>



</MapContainer>
)
}

export default MapBox;