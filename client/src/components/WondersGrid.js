import WonderCard from "./WonderCard";
import WonderDetail from '../components/WonderDetail';

const WondersGrid = ({wonders, selectedWonder, onWonderSelected}) => {
    
    return (
        <div className="wonder-wrapper"> 
            {wonders.map(wonder => {
                return (
                    <>
                    <WonderCard key={wonder._id} wonder={wonder} onWonderSelected={onWonderSelected}/> 
                    {selectedWonder ?<WonderDetail wonder={selectedWonder} /> : null}
                    </>   
                )
            })}
        
        </div>
    )
}

export default WondersGrid;