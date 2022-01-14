import React from 'react'

const WonderCard = ({wonder, onWonderSelected}) => {
    const handleClick=() => {
        onWonderSelected(wonder)
    }


    return(
        <>
            <h1 onClick={handleClick} >{wonder.name}</h1>

            
        </>
    )
}


export default WonderCard