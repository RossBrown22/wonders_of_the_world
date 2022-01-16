import './WonderButton.css'

const WonderButton = ({wonder, onWonderSelected}) => {
    const handleClick=() => {
        onWonderSelected(wonder)
    }

    return(
        <div className="wonder-button">            
            <p onClick={handleClick} >{wonder.name}</p>
        </div>
    )
}

export default WonderButton;