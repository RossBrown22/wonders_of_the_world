import React from 'react'
import Speech from 'react-speech'

const WonderDetail = ({wonder}) => {
    return(
        <div className='wonder-detail'>
            <h2>{wonder.name}</h2>
            <Speech text={wonder.name} textAsButton={true} displayText="▶️" voice="Google UK English Female" />
            <p>Location: {wonder.location}</p>
            <p>Facts: {wonder.facts[0]}</p> 
            <p>Fun Facts: {wonder.funFact}</p>
            
            
        </div>
    )
}

export default WonderDetail