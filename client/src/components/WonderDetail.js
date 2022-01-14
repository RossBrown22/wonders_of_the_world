import React from 'react'

const WonderDetail = ({wonder}) => {
    return(
        <>

            <p>Location: {wonder.location}</p>
            <p>Facts: {wonder.facts[0]}</p> 
            <p>Fun Facts: {wonder.funFact}</p>
            
            
        </>
    )
}

export default WonderDetail