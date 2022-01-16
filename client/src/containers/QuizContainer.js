import { useState, useEffect } from 'react'
import QuizForm from '../components/QuizForm'

const QuizContainer = () => {
    const [submittedAnswers, setSubmittedAnswers] = useState([])

    return (
        <>
        <h1>This is the quiz container!</h1>
        <QuizForm />
        </>
    )

}

export default QuizContainer;