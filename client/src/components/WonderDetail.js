import React from 'react'
import Speech from 'react-speech'
import './WonderDetail.css'


const WonderDetail = ({wonder}) => {
    return(
        <div className='wonder-detail'>
            <h2>{wonder.name}</h2>
            <Speech text={wonder.name} textAsButton={true} displayText="▶️" voice="Google UK English Female" />
            <p>Location: {wonder.location}</p>

            <img src={`/img/${wonder.image}`} alt={wonder.name} />
            
            <p>{wonder.facts[0]}</p>
            <Speech text={wonder.facts[0]} textAsButton={true} displayText="▶️" voice="Google UK English Female" />
            <p>{wonder.facts[1]}</p>
            <Speech text={wonder.facts[1]} textAsButton={true} displayText="▶️" voice="Google UK English Female" />
            <p>{wonder.facts[2]}</p>
            <Speech text={wonder.facts[2]} textAsButton={true} displayText="▶️" voice="Google UK English Female" />

            <p>Fun Facts: {wonder.funFact}</p>
            
            
        </div>
    )
}

export default WonderDetail