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
            question: "When did the Taj Mahal become one of the 7 wonders?",
            choices: ["2000", "2007", "1995"],
            answer: "2007"},
        {
            question: "How many people visit the Colosseum each year?",
            choices: ["6 Million", "50 Million", "100 Thousand"],
            answer: "6 Million"},
        {
            question: "How old is the Great Pyramid of Giza?",
            choices: ["2 Weeks", "1000 Years", "5000 Years"],
            answer: "5000 Years"},
        {
            question: "Zeus was the god of...what?",
            choices: ["Sky and Thunder", "Wheat and Dairy", "Wonders of the World"],
            answer: "Sky and Thunder"},
        {
            question: "How high were the Hanging Gardens of Babylon?",
            choices: ["200 Feet", "10 Feet", "75 Feet"],
            answer: "75 Feet"},
        {
            question: "Mount Everest was first named...what?",
            choices: ["Big Tall Icey", "Peak 15", "The Giant Peak"],
            answer: "Peak 15"},
        {
            question: "In some areas, how deep is the Grand Canyon?",
            choices: ["Really Deep", "1 Mile Deep", "10 Miles Deep"],
            answer: "1 Mile Deep"},
        {
            question: "Aurora Borealis is also known as...what?",
            choices: ["The Northern Lights", "Green Skies", "The Southern Lights"],
            answer: "The Northern Lights"},
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
        if (score >= 9) {
          medal = '🥇';
        } else if (score >= 6) {
          medal = '🥈';
        } else if (score >= 3){
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
            {submittedAnswers ? <>
            <h2>{medalAward()}</h2>
            <h3>{score}/9</h3>
            </> : null}
        </div>
        </>
    ) 
}

export default QuizContainer;