import {useState, useEffect} from 'react';
import WondersGrid from '../components/WondersGrid';
import WondersService from '../services/WondersService';
import WonderDetail from '../components/WonderDetail';


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
        <>
            
            <WondersGrid wonders={wonders} onWonderSelected={onWonderSelected}/>
            {selectedWonder ?<WonderDetail wonder={selectedWonder} /> : null}
                    
        </>
    )
}


export default WondersContainer;
