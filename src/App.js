import React, {useState} from "react"
import './App.css';

function App() {

//propriedades

const [showFinalResults, setFinalResults] = useState(false);
const [score, setScore] = useState(0);
const [currentQuestion, setCurrentQuestion] = useState(0);

const questions = [
  {
    text: "Quem deu a ideia do nome da banda?", 
    options: [
      { id: 0, text: "Roberta e Diego", isCorrect: false },
      { id: 1, text: "Geovanne e Roberta", isCorrect: false },
      { id: 2, text: "Lupita e Geovanne", isCorrect: false },
      { id: 3, text: "Miguel e Lupita", isCorrect: true },
    ],
  }, 

  {
    text: "Qual a música que Roberta cantou para entrar na banda?",
    options: [
      { id: 0, text: "Tenerte y Quererte", isCorrect: false },
      { id: 1, text: "Fuego", isCorrect: true },
      { id: 2, text: "Ensiname", isCorrect: false },
      { id: 3, text: "No Pares", isCorrect: false },
    ],
  },
  {
    text: "Em que ano a novela começou a ser exibida no SBT?",
    options: [
      { id: 0, text: "2008", isCorrect: false },
      { id: 1, text: "2006", isCorrect: false },
      { id: 2, text: "2007", isCorrect: false },
      { id: 3, text: "2005", isCorrect: true },
    ],
  },
  {
    text: "Como se chama a mãe da mia?",
    options: [
      { id: 0, text: "Marina", isCorrect: true },
      { id: 1, text: "Valéria", isCorrect: false },
      { id: 2, text: "Vitória", isCorrect: false },
      { id: 3, text: "Isabel", isCorrect: false },
    ],
  },
  {
    text: "Qual ilha os alunos do Elite Way School foram passar as férias?",
    options: [
      { id: 0, text: "Cozumel", isCorrect: true },
      { id: 1, text: "Ilhas Fiji", isCorrect: false },
      { id: 2, text: "Hawaii", isCorrect: false },
      { id: 3, text: "Bahamas", isCorrect: false },
    ],
  },

  {
    text: "Qual é o dia mundial do RBD?",
    options: [
      { id: 0, text: "4 de outubro", isCorrect: true },
      { id: 1, text: "21 de julho", isCorrect: false },
      { id: 2, text: "30 de agosto", isCorrect: false },
      { id: 3, text: "2 de janeiro", isCorrect: false },
    ],
  },


  {
    text: "Quantas temporadas Rebelde teve?",
    options: [
      { id: 0, text: "6", isCorrect: false },
      { id: 1, text: "4", isCorrect: false },
      { id: 2, text: "5", isCorrect: false },
      { id: 3, text: "3", isCorrect: true },
    ],
  },




  {
    text: "O que Roberta derramou em cima de Mia no primeiro capítulo?",
    options: [
      { id: 0, text: "Tinta", isCorrect: false },
      { id: 1, text: "Refrigerante", isCorrect: false },
      { id: 2, text: "Água", isCorrect: false },
      { id: 3, text: "Energético", isCorrect: true },
    ],
  },




  {
    text: "Quantos integrantes eram no início da banda?",
    options: [
      { id: 0, text: "3 - Lupita, Miguel e Diego", isCorrect: false },
      { id: 1, text: "3 - Mia, Miguel e Diego", isCorrect: false },
      { id: 2, text: "4 - Celina, Roberta, Miguel e Diego", isCorrect: false },
      { id: 3, text:"4 - Mia, Roberta, Diego e Miguel", isCorrect: true },
    ],
  },




  {
    text: "Qual o apelido que Roberta deu a Mia?",
    options: [
      { id: 0, text: "Mimada", isCorrect: false },
      { id: 1, text: "Colucci", isCorrect: false },
      { id: 2, text: "Barbie", isCorrect: true },
      { id: 3, text: "Patricinha", isCorrect: false },
    ],
  },

]

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


          <h1 id="um">Quiz Rebelde</h1>



 <h2 id="dois"> Pontuação: {score} </h2>


  
 {showFinalResults ? (
     
     <div className ='final-results'>
    <h1>Quantas acertei ?</h1>
    <h2> {score} de  {questions.length}  ({(score/questions.length) *100}%) </h2>
    <button onClick={() => restartGame()}> Recomeçar
    </button>

     </div> ) :  (
     <div className='question-card'>
      <h2> Pergunta {currentQuestion + 1} de {questions.length} </h2>
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
