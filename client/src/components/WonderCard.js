import Speech from 'react-speech'

const WonderCard = ({wonder, onWonderSelected}) => {
    const handleClick=() => {
        onWonderSelected(wonder)
    }


    return(
        <>            
            <h1 onClick={handleClick} >{wonder.name}</h1>
            
                <Speech text={wonder.name} textAsButton={true} displayText="▶️" voice="Google UK English Female" />

        </>
    )
}


export default WonderCard