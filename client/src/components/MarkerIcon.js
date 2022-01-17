import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {Link} from 'react-router-dom'
import Icon_new_wonders1 from '../icons/Icon_new_wonders1.png'
import Icon_natural_wonders1 from '../icons/Icon_natural_wonders1.png'
import Icon_ancient_wonders1 from '../icons/Icon_ancient_wonders1.png'



const MarkerIcon=({wonder,onWonderSelected}) => {
    const handleClick=() => {
        onWonderSelected(wonder)
    }

    return(
        <Marker position={[30.323337, 35.451666]} >
        <Popup>
        Petra <br /> <Link to="/new"><button type="button" onClick={handleClick}>Learn More</button></Link>
        </Popup>
        </Marker>
    )


}

export default MarkerIcon