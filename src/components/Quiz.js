import React from "react"

export default function Quiz(props){
    
    // ready for checking and will show the button
    const checking = props.checking.checking 

    //check if all question is answered
    const validate = props.getQuiz.every(q => q.answered)
 
    //count the correct answer
    const correctAnswer = props.getQuiz.filter(q => { 
        let count = 0
        q.choices.filter( c => {
            if(c.selected && c.choice === q.correct_answer) count = count + 1
        })
        return count
    }).length
 
    const quiz = props.getQuiz.map( (q,index) => {
        return (
            <div 
                className={ checking && !q.answered ? 'error': ''} 
                key={index}>
                <h3 className="relative">
                    <strong>{q.question}</strong>
                </h3>
                <div className='mt-4 choices'>  
                    {   
                        q.choices.map((c,index) => {
                            let choiceClass = !checking
                                            ? c.selected 
                                                ? "selected" 
                                                :"not-selected" 
                                            : validate 
                                                ?  c.selected && c.choice === q.correct_answer
                                                    ? "correct"
                                                    : c.choice === q.correct_answer 
                                                        ? "correct"
                                                        : c.selected
                                                            ? "incorrect"
                                                            : ""
                                                : c.selected 
                                                    ? "selected"
                                                    : ""
                            
                            return (
                                <span 
                                    className=  {choiceClass} 
                                    key= {`x-${index}`}
                                    onClick = {() => props.selectChoice(c.choice,q.id)}
                                >{c.choice}</span>
                            )
                        })
                    }
                </div>
            </div>
        )
    })

    return (
        <div className="quiz-list ">
            <h1 className="text-5xl px-4 pt-5 ">Questions</h1>
            <div className="p-2 list">
                {quiz}
            </div>
            {validate && 
                <div className="flex content-center items-center p-2 ">
                    {
                        checking && 
                        <div className="w-1/2">
                            <p>
                                {`You scored ${correctAnswer}/${props.getQuiz.length} correct answers`}
                            </p>
                        </div>
                    }
                        <div className="absolute right-[40px] bottom-4 " >
                            <button 
                                className='button  '
                                onClick={props.checkAnswer}
                                >{checking ? "Play Again" : "Check Answer"} 
                            </button>
                        </div>
                </div>
            }
        </div>
    )
}

 