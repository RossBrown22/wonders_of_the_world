import { useState } from 'react'
import Question from './Question'

const QuizForm = ({questions, onQuizSubmit}) => {

    const [submittedAnswers, setSubmittedAnswers] = useState([])

    const handleAnswerChange = (evt) => {
        const currentAnswer = evt.target.value
        setSubmittedAnswers([...submittedAnswers, currentAnswer])
    }

    const handleQuizSubmit = (evt) => {
        evt.preventDefault()

        onQuizSubmit(submittedAnswers)
        setSubmittedAnswers([])
    }

    return (
        <div>
            <h1>This is the quiz form!</h1>
            <form onSubmit={handleQuizSubmit}>
                
            <div>
                {questions.map((question, index) => {
                    return (
                    <div key={index}>
                         <Question question={question} index={index} handleAnswerChange={handleAnswerChange}/>
                    </div> 
                    )
                })}
            </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default QuizForm;