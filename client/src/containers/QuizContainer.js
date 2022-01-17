import { useState, useEffect } from 'react'
import QuizForm from '../components/QuizForm'

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

    const onQuizSubmit = (submittedAnswers) => {
        setSubmittedAnswers(submittedAnswers)
    }

    const compareAnswers = () => {
        questions.forEach((question, index) => {
            if (submittedAnswers && question.answer === submittedAnswers[index]){
                const currentScore = score + 1
                setScore(currentScore)
            }
        })
    }

    return (
        <div>
            <h1>This is the quiz container!</h1>
            <QuizForm questions={questions} onQuizSubmit={onQuizSubmit}/>
        </div>
    )

}

export default QuizContainer;