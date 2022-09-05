export default function Welcome({startQuizBtn}){
    return(
       <div className="welcome">
            <h1 className="font-bold text-5xl text-rose-600">Quizzical</h1>

            <p className="py-4">Some Description if needed</p>
            <button 
                className="button"
                onClick={startQuizBtn}
            >Start Quiz</button>
       </div>
    )
}