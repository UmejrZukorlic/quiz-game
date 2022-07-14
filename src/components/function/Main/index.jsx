import style from './style.css';
import React, { useState } from 'react';

const Main = (props) => {

    const [showFinalResults, setFinalResults] = useState(false);
    const [score, setScore]= useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        {
          text: "What is the capital of Serbia?",
          options: [
            { id: 0, text: "Novi Sad", isCorrect: false },
            { id: 1, text: "Kraljevo", isCorrect: false },
            { id: 2, text: "Niš", isCorrect: false },
            { id: 3, text: "Beograd", isCorrect: true },
          ],
        },
        {
          text: "What is capital of Bosna and Hercegovina?",
          options: [
            { id: 0, text: "Sarajevo", isCorrect: true },
            { id: 1, text: "Mostar", isCorrect: false },
            { id: 2, text: "Tuzla", isCorrect: false },
            { id: 3, text: "Zenica", isCorrect: false },
          ],
        },
        {
          text: "Who is the president of Serbia?",
          options: [
            { id: 0, text: "Alexandar Vucic", isCorrect: true },
            { id: 1, text: "Ana Brnabic", isCorrect: false },
            { id: 2, text: "Ivica Dacic", isCorrect: false },
            { id: 3, text: "Milos Obrenovic", isCorrect: false },
          ],
        },
        {
          text: "Which is the largest city in Serbia?",
          options: [
            { id: 0, text: "Novi Pazar", isCorrect: false },
            { id: 1, text: "Beograd", isCorrect: true },
            { id: 2, text: "Kraljevo", isCorrect: false },
            { id: 3, text: "Sjenica", isCorrect: false },
          ],
        },
        {
          text: "Which of the following countries DO NOT border the Serbia?",
          options: [
            { id: 0, text: "Croatia", isCorrect: false },
            { id: 1, text: "Russia", isCorrect: true },
            { id: 2, text: "Bosna and Hercegovina", isCorrect: false },
            { id: 3, text: "Makedonia", isCorrect: false },
          ],
        },
      ];

    const optionClicked = (isCorrect) => {
        if(isCorrect){
            setScore(score + 1)
        }
        
        if (currentQuestion + 1 < questions.length){
            setCurrentQuestion(currentQuestion + 1)
        }else{
            setFinalResults(true)
        }
    }

    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setFinalResults(false)
    }




    return <div className='Main'>
        {/* 1.header */}
        <h1>Quiz game</h1>
        {/* 2.Current score */}
        <h2>Current score: {score}</h2>


        {showFinalResults ?

            <div className='final-results'>
                <h1>Final results</h1>
                <h2>{score} out of {questions.length} correct - {(score/questions.length)*100}%</h2>

                <button onClick={restartGame}>Restart game</button>
            </div>
            :
            <div className="question-card">
                <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
                <h3 className='question-text'>{questions[currentQuestion].text}</h3>

                <ul>
                    {questions[currentQuestion].options.map((options)=>{
                        return [
                            <li onClick={() =>{optionClicked(options.isCorrect)}} key={options.id}>{options.text}</li>
                        ]
                    })}
                </ul>


            </div>
        }
        {/* 3.Question card */}

        {/* 4.Final results */}
    </div>
}
export default Main