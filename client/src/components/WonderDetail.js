import React, { useState, useEffect } from 'react'
import Speech from 'react-speech'
import './WonderDetail.css'


const WonderDetail = ({wonder}) => {
    
    const [factsListenedTo, setFactsListenedTo] = useState([]);
    const [funFactUnlocked, setFunFactUnlocked] = useState(false)
    
    useEffect(() => {
        checkAllFactsListened();
      }, [factsListenedTo])

    const handleClickFact1=() => {
        const updatedFactsListenedTo = [...factsListenedTo, "fact 1"];
        setFactsListenedTo(updatedFactsListenedTo);        
    }

    const handleClickFact2=() => {
        const updatedFactsListenedTo = [...factsListenedTo, "fact 2"];
        setFactsListenedTo(updatedFactsListenedTo);
    }

    const handleClickFact3=() => {
        const updatedFactsListenedTo = [...factsListenedTo, "fact 3"];
        setFactsListenedTo(updatedFactsListenedTo);
    }
    
    const checkAllFactsListened = () => {
        const allFacts = ["fact 1", "fact 2", "fact 3"]
        if (allFacts.every(item => factsListenedTo.includes(item))){
            setFunFactUnlocked(true);
        }
    }


     return(
        <div className='wonder-detail'>
            <h2>{wonder.name}</h2>
                <Speech text={wonder.name} textAsButton={true} displayText="▶️" voice="Google UK English Female" />
            <img src={`/img/${wonder.image}`} alt={wonder.name} />
            
            <p>{wonder.facts[0]}</p>
                <div onClick={handleClickFact1}><Speech text={wonder.facts[0]} textAsButton={true} displayText="▶️" voice="Google UK English Female" /></div>
            <p>{wonder.facts[1]}</p>
                <div onClick={handleClickFact2}><Speech text={wonder.facts[1]} textAsButton={true} displayText="▶️" voice="Google UK English Female" /></div>
            <p>{wonder.facts[2]}</p>
                <div onClick={handleClickFact3}><Speech text={wonder.facts[2]} textAsButton={true} displayText="▶️" voice="Google UK English Female" /></div>
            {funFactUnlocked ? <p>Fun Fact: {wonder.funFact}</p> : null }
            
        </div>
    )
}

export default WonderDetail