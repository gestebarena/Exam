import React, { useState } from 'react';
import './App.css';

function App() {

// Properties

  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);

  const questions = [
    {
      text: "What is 1?",
      image: "11-0.jpg",
      options: [
        { id: 0, text: "lumme", isCorrect: false },
        { id: 1, text: "ulpukka", isCorrect: false },
        { id: 2, text: "paju", isCorrect: true },
        { id: 3, text: "järviruoko", isCorrect: false },
      ],
    },
    {
      text: "What is 2?",
      image: "11-0.jpg",
      options: [
        { id: 0, text: "tervaleppä", isCorrect: true },
        { id: 1, text: "ulpukka", isCorrect: false },
        { id: 2, text: "paju", isCorrect: false },
        { id: 3, text: "järviruoko", isCorrect: false },
      ],
    },
    {
      text: "What is 3?",
      image: "11-0.jpg",
      options: [
        { id: 0, text: "tervaleppä", isCorrect: false },
        { id: 1, text: "ulpukka", isCorrect: false },
        { id: 2, text: "paju", isCorrect: false },
        { id: 3, text: "osmankäämi", isCorrect: true },
      ],
    },
    {
      text: "What is 4?",
      image: "11-0.jpg",
      options: [
        { id: 0, text: "tervaleppä", isCorrect: false },
        { id: 1, text: "ulpukka", isCorrect: false },
        { id: 2, text: "paju", isCorrect: false },
        { id: 3, text: "järviruoko", isCorrect: true },
      ],
    },
    {
      text: "What is 5?",
      image: "11-0.jpg",
      options: [
        { id: 0, text: "kurjenmiekka", isCorrect: true },
        { id: 1, text: "ulpukka", isCorrect: false },
        { id: 2, text: "paju", isCorrect: false },
        { id: 3, text: "järviruoko", isCorrect: false },
      ],
    },
    {
      text: "What is 6?",
      image: "11-0.jpg",
      options: [
        { id: 0, text: "lumme", isCorrect: true },
        { id: 1, text: "ulpukka", isCorrect: false },
        { id: 2, text: "paju", isCorrect: false },
        { id: 3, text: "järviruoko", isCorrect: false },
      ],
    },
    {
      text: "What is 7?",
      image: "11-0.jpg",
      options: [
        { id: 0, text: "lumme", isCorrect: false },
        { id: 1, text: "ulpukka", isCorrect: true },
        { id: 2, text: "paju", isCorrect: false },
        { id: 3, text: "järviruoko", isCorrect: false },
      ],
    },
    {
      text: "What is 8?",
      image: "11-0.jpg",
      options: [
        { id: 0, text: "tervaleppä", isCorrect: false },
        { id: 1, text: "ahvenvita", isCorrect: true },
        { id: 2, text: "paju", isCorrect: false },
        { id: 3, text: "järviruoko", isCorrect: false },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },

    {
      text: "Who was the second president of the US?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];



// Helper functions

  const optionClicked = (isCorrect) => {
    if(!answered){
      setAnswered(true)
      if (isCorrect) {
        setScore(score+1);
      }
    } else {

      if (currentQuestion + 1 < questions.length){
        setCurrentQuestion(currentQuestion + 1);
        setAnswered(false);
      } else {
        setFinalResults(true);
      }
    }
  }

  const restartGame = () =>{
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  }

  return (
    <div className="App">

      {/* 3. Show results or show the question game  */}
      {showFinalResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {Math.round((score / questions.length) * 100)}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2></h2>
         <h2>
           {currentQuestion + 1} of {questions.length}   --   {score} / {currentQuestion} ({currentQuestion > 0 ? (Math.round(score / currentQuestion * 100)) : 0}%)
          </h2>
          <img className='picture' src= {questions[currentQuestion].image}></img>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li 
                  className = {answered && option.isCorrect? 'li_right' : answered ? 'li_wrong' : 'li'}
                  onClick={() => optionClicked(option.isCorrect)}
                  key={option.id}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
