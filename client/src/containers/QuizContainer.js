import { useState, useEffect } from 'react'
import QuizForm from '../components/QuizForm'

const QuizContainer = () => {
    const [submittedAnswers, setSubmittedAnswers] = useState([])
    const questions = [{
        question: "Which country is Petra in?",
        choices: ["China", "Brazil", "Jordan"],
        answer: "Jordan"}
    ]

    const onQuizSubmit = (submittedAnswers) => {
        setSubmittedAnswers(submittedAnswers)
    }

    return (
        <div>
            <h1>This is the quiz container!</h1>
            <QuizForm questions={questions} onQuizSubmit={onQuizSubmit}/>
        </div>
    )

}

export default QuizContainer;