import { useState } from 'react'

const QuizForm = ({questions, onQuizSubmit}) => {

    const [submittedAnswers, setSubmittedAnswers] = useState([])

    const handleAnswerChange = (evt) => {
        setSubmittedAnswers(evt.target.value)
    }

    const handleQuizSubmit = (evt) => {
        evt.preventDefault()

        onQuizSubmit({
            submittedAnswers: submittedAnswers
        })
    }

    return (
        <div>
            <h1>This is the quiz form!</h1>
            <form onSubmit={handleQuizSubmit}>
                <h3>1. {questions[0].question}</h3>

                <label>{questions[0].choices[0]}</label>
                <input onChange={handleAnswerChange} name="question1" type="radio" value={questions[0].choices[0]}/>

                <label>{questions[0].choices[1]}</label>
                <input onChange={handleAnswerChange} name="question1" type="radio" value={questions[0].choices[1]}/>

                <label>{questions[0].choices[2]}</label>
                <input onChange={handleAnswerChange} name="question1" type="radio" value={questions[0].choices[2]}/>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default QuizForm;