import {useState, useEffect} from 'react';
import WondersGrid from '../components/WondersGrid';
import WondersService from '../services/WondersService';
import WonderDetail from '../components/WonderDetail';
import './WondersContainer.css'


const WondersContainer = () => {
    
    const [wonders, setWonders] = useState([]);
    const [selectedWonder, setSelectedWonder] = useState(null);
    const [filteredWonders, setFilteredWonders] = useState([])

    useEffect(() => {
        WondersService.getWonders()
        .then(wonders => setWonders(wonders))
    }, [])

    useEffect(() => {
        filterWonders()
    }, [wonders])

    const onWonderSelected=(wonder) => {
        setSelectedWonder(wonder) 
    }

    const filterWonders = () => {
        const result = wonders.filter(wonder => wonder.collection ==="ancient")
        setFilteredWonders(result)
    }

    return(
        <div className="main-container">
            
                <WondersGrid wonders={wonders} onWonderSelected={onWonderSelected}/>
            
                {selectedWonder ?<WonderDetail wonder={selectedWonder} /> : null}
            
        </div>
    )
}


export default WondersContainer;
