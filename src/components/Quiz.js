import React from "react"

export default function Quiz(props){
    
    const checking = props.checking.checking 
    const validate = props.getQuiz.every(q => q.answered)
    console.log(`validate: ${validate}`)
    console.log(`checking: ${checking}`) 

    const quiz = props.getQuiz.map( (q,index) => {
         
        return (
            <div 
                className={ checking && !q.answered ? 'error': ''} 
                key={index}>
                <h3 className="relative">
                    <strong>{q.question}</strong> <small>{q.correct_answer}</small>
                    <span className="font-mono absolute right-0 top-0 ">x</span>
                </h3>
                <div className='mt-4 choices'>
                    {   
                        q.choices.map((c,index) => {
                            let choiceClass
                           
                            choiceClass = 
                                !checking
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
                            
                            

                            //choiceClass = (c.selected) ? "selected" : ""
                            //choiceClass = (props.checking && !validate) ? c.choice === q.correct_answer ? "correct" : c.selected ? "selected incorrect" : "" : c.selected ? "selected" : ""


                            //${!validate && props.checking && c.choice === q.correct_answer? 'correct':'incorrect' }`
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
            <div className="p-2">
                {quiz}
            </div>
            <button 
                className='button mx-auto mt-3  block'
                onClick={props.checkAnswer}
                >Check Answer</button>
        </div>
    )
}

 