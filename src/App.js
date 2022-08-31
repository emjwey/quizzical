import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from "react"
import arrayShuffle from 'array-shuffle';
import {nanoid} from 'nanoid'

import Welcome from './components/Welcome'
import Quiz from './components/Quiz'

function App() {

	const [quizStart, setQuizStart] = useState(false)
	const [randomQuestion, setRandomQuestion] = useState([])
	const [checking, setChecking] = useState(false)

	useEffect( ()=> {
		fetch("https://opentdb.com/api.php?amount=5&category=27&difficulty=easy&type=multiple")
			.then(res => res.json())
			.then(data =>  {
				setRandomQuestion(data.results.map( q => {
					const choice = arrayShuffle([...q.incorrect_answers, q.correct_answer])
					const choices = choice.map(c => ({choice:c, selected:false}))
						return {id:nanoid(),question:q.question, correct_answer: q.correct_answer, choices:choices}
					}
				))
			})
	},[])


	const startQuizBtn = () =>{
		setQuizStart(true)
	}

	const selectChoice = (choice,id) =>{
 
		let questions = randomQuestion.map(rq => {
			let updateChoices = rq.choices.map(c => {
				return c.choice === choice && rq.id === id 
				? {...c, selected:!c.selected}
				: {...c, selected:false}
			})
			return rq.id === id 
			? {...rq,choices:updateChoices}
			: {...rq}
		})

		setRandomQuestion(questions)
 		console.log(randomQuestion)
	}

	const checkAnswer = () =>{
		let selectedAnswer = randomQuestion.map( rq => {
			let selected = rq.choices.filter(c => c.selected )
			return {answer: rq.correct_answer, selected}
		})
		console.log(selectedAnswer)
		setChecking(true)
 
	}
	
  return (
    <> 
		{!quizStart && <Welcome startQuizBtn = {startQuizBtn}/>}

		{
			quizStart && 
				<Quiz 
					getQuiz={randomQuestion} 
					selectChoice = {selectChoice}
					checkAnswer = {checkAnswer}
					checking = {checking}
					/>
		}
    </>
  );
}

export default App;
