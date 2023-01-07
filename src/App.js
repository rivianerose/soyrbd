import React, {useState} from "react"
import './App.css';

function App() {

//propriedades

const [showFinalResults, setFinalResults] = useState(false);
const [score, setScore] = useState(0);
const [currentQuestion, setCurrentQuestion] = useState(0);

const questions = [
  {
    text: "What is the capital of America?",
    options: [
      { id: 0, text: "New York City", isCorrect: false },
      { id: 1, text: "Boston", isCorrect: false },
      { id: 2, text: "Santa Fe", isCorrect: false },
      { id: 3, text: "Washington DC", isCorrect: true },
    ],
  }, ]

  const restartGame =() => {
    setScore(0); 
    setCurrentQuestion(0);
    setFinalResults(false)
      }

      const optionClicked = (isCorrect) => {
        if (isCorrect){
          setScore(score +  1)
        }
      
        if (currentQuestion + 1 < questions.length){setCurrentQuestion(currentQuestion + 1)
        } else {
          setFinalResults(true)
        }
        
      }

  return (
    <div className="App">


 <h1>Quiz RBD</h1>



 <h2> Current Score: {score} </h2>


  
 {showFinalResults ? (
     
     <div className ='final-results'>
    <h1>Final Results</h1>
    <h2> {score} out of  {questions.length} correct - ({(score/questions.length) *100}%) </h2>
    <button onClick={() => restartGame()}> Restart Game
    </button>

     </div> ) :  (
     <div className='question-card'>
      <h2> Question {currentQuestion + 1} out of {questions.length} </h2>
      <h3 className='question-text'> {questions[currentQuestion].text}</h3>

      <ul>
     {questions[currentQuestion].options.map((option) => {
      return (
        <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
      )
     })}
      </ul>

     </div> ) }
     
    </div>
  );
}


export default App;
