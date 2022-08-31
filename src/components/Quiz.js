export default function Quiz(props){
    const quiz = props.getQuiz.map( (q,index) => {

        let validate = q.choices.every(c => !c.selected)
        return (
            <div 
                className={ validate && props.checking? 'error': ''} 
                key={index}>
                <strong>{q.question}</strong>
                <div className='mt-4 choices'>
                    {   
                        q.choices.map((c,index) =>  
                            <span 
                                className={`${c.selected ? 'active': ''}`}
                                key= {`x-${index}`}
                                onClick = {() => props.selectChoice(c.choice,q.id)}
                            >{c.choice}</span>
                        )
                    }
                </div>

            </div>
        )
    })

    return (
        <div className="quiz-list mt-[150px] px-4 pb-3 bg-white w-[600px] mx-auto block box-border relative ">
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