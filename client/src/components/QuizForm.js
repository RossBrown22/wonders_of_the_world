import { useState } from 'react'
import Question from './Question'
import Confetti from 'react-confetti'

const QuizForm = ({ questions, onQuizSubmit }) => {

    const [submittedAnswers, setSubmittedAnswers] = useState([])
    const [confettiOn, setConfettiOn] = useState(false)

    const handleAnswerChange = (evt) => {
        const currentAnswer = evt.target.value
        setSubmittedAnswers([...submittedAnswers, currentAnswer])
    }

    const handleQuizSubmit = (evt) => {
        evt.preventDefault()

        onQuizSubmit(submittedAnswers)
        setSubmittedAnswers([])
    }

    const handleConfetti = () => {
        setConfettiOn(true)
    }

    return (
        <div>
            {confettiOn ? <Confetti width={1750} height={920} /> : null}
            <h1>This is the quiz form!</h1>
            <form onSubmit={handleQuizSubmit}>

                <div>
                    {questions.map((question, index) => {
                        return (
                            <div key={index}>
                                <Question question={question} index={index} handleAnswerChange={handleAnswerChange} />
                            </div>
                        )
                    })}
                </div>
                <button onClick={handleConfetti} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default QuizForm;