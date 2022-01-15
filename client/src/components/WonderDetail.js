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
            
            <p><i onClick={handleClickFact1}><Speech text={wonder.facts[0]} textAsButton={true} displayText="▶️" voice="Google UK English Female" /></i>{wonder.facts[0]}</p>

            <p><i onClick={handleClickFact2}><Speech text={wonder.facts[1]} textAsButton={true} displayText="▶️" voice="Google UK English Female" /></i>{wonder.facts[1]}</p>

            <p><i onClick={handleClickFact3}><Speech text={wonder.facts[2]} textAsButton={true} displayText="▶️" voice="Google UK English Female" /></i>{wonder.facts[2]}</p>
                
            {funFactUnlocked ? <p>Fun Fact: {wonder.funFact}</p> : <p>🔒 Listen to all 3 facts to unlock crazy fact!!</p> }
            
        </div>
    )
}

export default WonderDetail