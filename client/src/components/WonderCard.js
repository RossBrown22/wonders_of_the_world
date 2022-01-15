import './WonderCard.css'

const WonderCard = ({wonder, onWonderSelected}) => {
    const handleClick=() => {
        onWonderSelected(wonder)
    }


    return(
        <div className="wonder-card">            
            <h1 onClick={handleClick} >{wonder.name}</h1>
        </div>
    )
}


export default WonderCard