import WonderCard from "./WonderCard";

const WondersGrid = ({wonders}) => {
    
    return (
        <div> 
            {wonders.map(wonder => {
                return (
                    <WonderCard key={wonder._id} wonder={wonder}/> 
                    
                )
            })}
        
        </div>
    )
}

export default WondersGrid;