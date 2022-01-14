import {useState, useEffect} from 'react';
import WondersGrid from '../components/WondersGrid';
import WondersService from '../services/WondersService';


const WondersContainer = () => {
    
    const [wonders, setWonders] = useState([]);

    useEffect(() => {
        WondersService.getWonders()
        .then(wonders => setWonders(wonders))
    }, [])

    return(
        <>
            <WondersGrid wonders={wonders}/>
        </>
    )
}


export default WondersContainer;
