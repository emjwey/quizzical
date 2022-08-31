export default function Welcome({startQuizBtn}){
    return(
       <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mx-auto w-96 bg-orange-100 flex flex-col flex-wrap content-center justify-center text-center min-h-[400px]">
            <h1 className="font-bold text-5xl text-rose-600">Quizzical</h1>

            <p className="py-4">Some Description if needed</p>
            <button 
                className="button"
                onClick={startQuizBtn}
            >Start Quiz</button>
       </div>
    )
}