import WonderButton from "./WonderButton";
import './WondersBar.css';

const WondersBar = ({wonders, onWonderSelected}) => {
    
    return (
        <div className="wonder-bar"> 
            {wonders.map(wonder => {
                return (
                    <div key={wonder._id}>
                    <WonderButton wonder={wonder} onWonderSelected={onWonderSelected}/> 
                    </div> 
                )
            })}
        </div>
    )
}

export default WondersBar;