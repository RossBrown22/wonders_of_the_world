import {useState, useEffect} from 'react';
import WondersGrid from '../components/WondersGrid';
import WondersService from '../services/WondersService';
import WonderDetail from '../components/WonderDetail';
import './WondersContainer.css'


const WondersContainer = () => {
    
    const [wonders, setWonders] = useState([]);
    const [selectedWonder, setSelectedWonder] = useState(null);


    useEffect(() => {
            WondersService.getWonders()
        .then(wonders => setWonders(wonders))
    }, [])

    const onWonderSelected=(wonder) => {
        setSelectedWonder(wonder) 
    }

    return(
        <div className="main-container">
            
                <WondersGrid wonders={wonders} onWonderSelected={onWonderSelected}/>
            
                {selectedWonder ?<WonderDetail wonder={selectedWonder} /> : null}
            
        </div>
    )
}


export default WondersContainer;
