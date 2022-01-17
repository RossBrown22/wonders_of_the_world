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
        let currentScore = 0
        questions.forEach((question, index) => {
            console.log("HELP");
            if (submittedAnswers && question.answer === submittedAnswers[index]){
                currentScore = score + 1
                console.log(currentScore);
            }
        })
        setScore(currentScore)
    }

    return (
        <div>
            <h1>This is the quiz container!</h1>
            <QuizForm questions={questions} onQuizSubmit={onQuizSubmit}/>
        </div>
    )

}

export default QuizContainer;