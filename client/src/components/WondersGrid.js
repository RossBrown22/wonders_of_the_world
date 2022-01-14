import WonderCard from "./WonderCard";
import './WonderGrid.css'

const WondersGrid = ({wonders, onWonderSelected}) => {
    
    return (
        <div className="wonder-wrapper"> 
            {wonders.map(wonder => {
                return (
                    <>
                    <WonderCard key={wonder._id} wonder={wonder} onWonderSelected={onWonderSelected}/> 
                    </> 
                )
            })}
        
        </div>
    )
}

export default WondersGrid;