import { useState, useEffect } from 'react'
import QuizForm from '../components/QuizForm'
import './QuizContainer.css'

const QuizContainer = () => {
    const [submittedAnswers, setSubmittedAnswers] = useState(null)
    const [score, setScore] = useState(0)
    const questions = [{
            question: "Which country is Petra in?",
            choices: ["China", "Brazil", "Jordan"],
            answer: "Jordan"},
        {
            question: "Which country is Great Wall in?",
            choices: ["China", "Brazil", "Jordan"],
            answer: "China"},
        {
            question: "Which country is Christ the Redeemer in?",
            choices: ["China", "Brazil", "Jordan"],
            answer: "Brazil"}
    ]

    useEffect(() => {
        compareAnswers()
    }, [submittedAnswers])

    useEffect(() => {
        medalAward()
    }, [score])

    const onQuizSubmit = (submittedAnswers) => {
        setSubmittedAnswers(submittedAnswers)
    }

    const compareAnswers = () => {
        let currentScore = 0
        questions.forEach((question, index) => {
            if (submittedAnswers && question.answer === submittedAnswers[index]){
                currentScore += 1
                console.log(currentScore);
            }
        })
        setScore(currentScore)
    }

    const medalAward = () => {
        let medal;
        if (score >= 3) {
          medal = '🥇';
        } else if (score >= 2) {
          medal = '🥈';
        } else if (score >= 1){
            medal = '🥉';
        } else {
            return "❌ Please try again ❌"
        }
        return `You have won ${medal}`
    }

    return (
        <>
        <div>
            <h1>This is the quiz container!</h1>
            <QuizForm questions={questions} onQuizSubmit={onQuizSubmit}/>
            {submittedAnswers ? <h2>{medalAward()}</h2> : null}
        </div>
        </>
    ) 
}

export default QuizContainer;