import Speech from 'react-speech'
import './WonderCard.css'

const WonderCard = ({wonder, onWonderSelected}) => {
    const handleClick=() => {
        onWonderSelected(wonder)
    }


    return(
        <div className="wonder-card">            
            <h1 onClick={handleClick} >{wonder.name}</h1>
            
                <Speech text={wonder.name} textAsButton={true} displayText="▶️" voice="Google UK English Female" />

        </div>
    )
}


export default WonderCard