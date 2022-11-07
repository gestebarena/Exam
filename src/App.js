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
      text: "What is A?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "selkäevät", isCorrect: false },
        { id: 1, text: "uimarakko", isCorrect: false },
        { id: 2, text: "selkäranka", isCorrect: true },
        { id: 3, text: "kidukset", isCorrect: false },
      ],
    },

    {
      text: "What is C?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "selkäevät", isCorrect: true },
        { id: 1, text: "pyrstöevä", isCorrect: false },
        { id: 2, text: "selkäranka", isCorrect: false },
        { id: 3, text: "peräevä", isCorrect: false },
      ],
    },

    {
      text: "What is B?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "selkäevät", isCorrect: false },
        { id: 1, text: "pyrstöevä", isCorrect: true },
        { id: 2, text: "selkäranka", isCorrect: false },
        { id: 3, text: "peräevä", isCorrect: false },
      ],
    },

    {
      text: "What is D?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "selkäevät", isCorrect: false },
        { id: 1, text: "pyrstöviiva", isCorrect: false },
        { id: 2, text: "kylkiviiva", isCorrect: true },
        { id: 3, text: "peräevä", isCorrect: false },
      ],
    },

    {
      text: "What is E?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "selkäevät", isCorrect: false },
        { id: 1, text: "pyrstöevä", isCorrect: false },
        { id: 2, text: "uimaevä", isCorrect: false },
        { id: 3, text: "peräevä", isCorrect: true },
      ],
    },

    {
      text: "What is F?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "selkäevät", isCorrect: false },
        { id: 1, text: "uimarakko", isCorrect: true },
        { id: 2, text: "mätipussi", isCorrect: false },
        { id: 3, text: "peräevä", isCorrect: false },
      ],
    },

    {
      text: "What is G?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "mätipussi", isCorrect: true },
        { id: 1, text: "pyrstöevä", isCorrect: false },
        { id: 2, text: "selkäranka", isCorrect: false },
        { id: 3, text: "peräevä", isCorrect: false },
      ],
    },

    {
      text: "What is H?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "vatsaevä", isCorrect: true },
        { id: 1, text: "pyrstöevä", isCorrect: false },
        { id: 2, text: "uimaevä", isCorrect: false },
        { id: 3, text: "peräevä", isCorrect: false },
      ],
    },

    {
      text: "What is I?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "sydän", isCorrect: false },
        { id: 1, text: "suoli", isCorrect: true },
        { id: 2, text: "silma", isCorrect: false },
        { id: 3, text: "suomuja", isCorrect: false },
      ],
    },

    {
      text: "What is J?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "sydän", isCorrect: false },
        { id: 1, text: "suoli", isCorrect: false },
        { id: 2, text: "maha", isCorrect: true },
        { id: 3, text: "suomuja", isCorrect: false },
      ],
    },

    {
      text: "What is K?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "sydän", isCorrect: true },
        { id: 1, text: "suoli", isCorrect: false },
        { id: 2, text: "silma", isCorrect: false },
        { id: 3, text: "suomuja", isCorrect: false },
      ],
    },

    {
      text: "What is L?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "sydän", isCorrect: false },
        { id: 1, text: "suoli", isCorrect: false },
        { id: 2, text: "silma", isCorrect: true },
        { id: 3, text: "suomuja", isCorrect: false },
      ],
    },

    {
      text: "What is M?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "selkäevät", isCorrect: false },
        { id: 1, text: "uimarakko", isCorrect: false },
        { id: 2, text: "selkäranka", isCorrect: false },
        { id: 3, text: "kidukset", isCorrect: true },
      ],
    },

    {
      text: "What is N?",
      image: "kala.jpg",
      options: [
        { id: 0, text: "sydän", isCorrect: false },
        { id: 1, text: "suoli", isCorrect: false },
        { id: 2, text: "silma", isCorrect: false },
        { id: 3, text: "suomuja", isCorrect: true },
      ],
    },

    {
      text: "Which plant is this?",
      image: "11-1.jpeg",
      options: [
        { id: 0, text: "tervaleppä", isCorrect: true },
        { id: 1, text: "ulpukka", isCorrect: false },
        { id: 2, text: "paju", isCorrect: false },
        { id: 3, text: "osmankäämi", isCorrect: false },
      ],
    },

    {
      text: "Which plant is this?",
      image: "11-2.jpeg",
      options: [
        { id: 0, text: "tervaleppä", isCorrect: false },
        { id: 1, text: "ulpukka", isCorrect: false },
        { id: 2, text: "paju", isCorrect: true },
        { id: 3, text: "osmankäämi", isCorrect: false },
      ],
    },

    {
      text: "Which plant is this?",
      image: "11-3.jpeg",
      options: [
        { id: 0, text: "järviruoko", isCorrect: true },
        { id: 1, text: "ulpukka", isCorrect: false },
        { id: 2, text: "paju", isCorrect: false },
        { id: 3, text: "järvirutto", isCorrect: false },
      ],
    },

    {
      text: "Which plant is this?",
      image: "11-4.jpeg",
      options: [
        { id: 0, text: "tervaleppä", isCorrect: false },
        { id: 1, text: "ulpukka", isCorrect: false },
        { id: 2, text: "paju", isCorrect: false },
        { id: 3, text: "osmankäämi", isCorrect: true },
      ],
    },

    {
      text: "Which plant is this?",
      image: "11-5.jpeg",
      options: [
        { id: 0, text: "lumme", isCorrect: true },
        { id: 1, text: "ulpukka", isCorrect: false },
        { id: 2, text: "paju", isCorrect: false },
        { id: 3, text: "järviruoko", isCorrect: false },
      ],
    },

    {
      text: "Which plant is this?",
      image: "11-6.jpeg",
      options: [
        { id: 0, text: "lumme", isCorrect: false },
        { id: 1, text: "ulpukka", isCorrect: true },
        { id: 2, text: "paju", isCorrect: false },
        { id: 3, text: "järviruoko", isCorrect: false },
      ],
    },

    {
      text: "Which plant is this?",
      image: "11-7.jpeg",
      options: [
        { id: 0, text: "tervaleppä", isCorrect: false },
        { id: 1, text: "ahvenvita", isCorrect: true },
        { id: 2, text: "vesirutto", isCorrect: false },
        { id: 3, text: "vesiruoko", isCorrect: false },
      ],
    },

    {
      text: "Which plant is this?",
      image: "11-8.jpeg",
      options: [
        { id: 0, text: "tervaleppä", isCorrect: false },
        { id: 1, text: "ahvenvita", isCorrect: false },
        { id: 2, text: "vesirutto", isCorrect: true },
        { id: 3, text: "vesiruoko", isCorrect: false },
      ],
    },

    {
      text: "Which fish is this?",
      image: "12-1.jpeg",
      options: [
        { id: 0, text: "hauki", isCorrect: true },
        { id: 1, text: "muikku", isCorrect: false },
        { id: 2, text: "silakka", isCorrect: false },
        { id: 3, text: "siika", isCorrect: false },
      ],
    },

    {
      text: "Which fish is this?",
      image: "12-2.jpeg",
      options: [
        { id: 0, text: "made", isCorrect: false },
        { id: 1, text: "lohi", isCorrect: false },
        { id: 2, text: "särki", isCorrect: false },
        { id: 3, text: "ahven", isCorrect: true },
      ],
    },

    {
      text: "Which fish is this?",
      image: "12-3.jpeg",
      options: [
        { id: 0, text: "made", isCorrect: false },
        { id: 1, text: "lohi", isCorrect: false },
        { id: 2, text: "särki", isCorrect: true },
        { id: 3, text: "ahven", isCorrect: false },
      ],
    },

    {
      text: "Which fish is this?",
      image: "12-4.jpeg",
      options: [
        { id: 0, text: "made", isCorrect: false },
        { id: 1, text: "lohi", isCorrect: true },
        { id: 2, text: "särki", isCorrect: false },
        { id: 3, text: "ahven", isCorrect: false },
      ],
    },

    {
      text: "Which fish is this?",
      image: "12-5.jpeg",
      options: [
        { id: 0, text: "hauki", isCorrect: false },
        { id: 1, text: "muikku", isCorrect: true },
        { id: 2, text: "silakka", isCorrect: false },
        { id: 3, text: "siika", isCorrect: false },
      ],
    },

    {
      text: "Which fish is this?",
      image: "12-6.jpeg",
      options: [
        { id: 0, text: "siika", isCorrect: true },
        { id: 1, text: "muikku", isCorrect: false },
        { id: 2, text: "silakka", isCorrect: false },
        { id: 3, text: "särki", isCorrect: false },
      ],
    },

    {
      text: "Which fish is this?",
      image: "12-7.jpeg",
      options: [
        { id: 0, text: "hauki", isCorrect: false },
        { id: 1, text: "muikku", isCorrect: false },
        { id: 2, text: "silakka", isCorrect: true },
        { id: 3, text: "siika", isCorrect: false },
      ],
    },

    {
      text: "Which fish is this?",
      image: "12-8.jpeg",
      options: [
        { id: 0, text: "made", isCorrect: true },
        { id: 1, text: "lohi", isCorrect: false },
        { id: 2, text: "särki", isCorrect: false },
        { id: 3, text: "ahven", isCorrect: false },
      ],
    },

    {
      text: "Which bird is this?",
      image: "13-1.jpeg",
      options: [
        { id: 0, text: "sinisorsa", isCorrect: true },
        { id: 1, text: "haahka", isCorrect: false },
        { id: 2, text: "telkkä", isCorrect: false },
        { id: 3, text: "naurulokki", isCorrect: false },
      ],
    },

    {
      text: "Which bird is this?",
      image: "13-2.jpeg",
      options: [
        { id: 0, text: "sinisorsa", isCorrect: false },
        { id: 1, text: "haahka", isCorrect: false },
        { id: 2, text: "laulujuotsen", isCorrect: true },
        { id: 3, text: "naurulokki", isCorrect: false },
      ],
    },

    {
      text: "Which bird is this?",
      image: "13-3.jpeg",
      options: [
        { id: 0, text: "laulujuotsen", isCorrect: false },
        { id: 1, text: "telkkä", isCorrect: false },
        { id: 2, text: "kuovi", isCorrect: false },
        { id: 3, text: "silkkiuikku", isCorrect: true },
      ],
    },

    {
      text: "Which bird is this?",
      image: "13-4.jpeg",
      options: [
        { id: 0, text: "sinisorsa", isCorrect: false },
        { id: 1, text: "haahka", isCorrect: false },
        { id: 2, text: "telkkä", isCorrect: true },
        { id: 3, text: "naurulokki", isCorrect: false },
      ],
    },

    {
      text: "Which bird is this?",
      image: "13-5.jpeg",
      options: [
        { id: 0, text: "sinisorsa", isCorrect: false },
        { id: 1, text: "haahka", isCorrect: true },
        { id: 2, text: "telkkä", isCorrect: false },
        { id: 3, text: "naurulokki", isCorrect: false },
      ],
    },

    {
      text: "Which bird is this?",
      image: "13-6.jpeg",
      options: [
        { id: 0, text: "naurulokki", isCorrect: true },
        { id: 1, text: "kurki", isCorrect: false },
        { id: 2, text: "kuovi", isCorrect: false },
        { id: 3, text: "silkkiuikku", isCorrect: false },
      ],
    },

    {
      text: "Which bird is this?",
      image: "13-7.jpeg",
      options: [
        { id: 0, text: "naurulokki", isCorrect: false },
        { id: 1, text: "kurki", isCorrect: false },
        { id: 2, text: "kuovi", isCorrect: true },
        { id: 3, text: "silkkiuikku", isCorrect: false },
      ],
    },

    {
      text: "Which bird is this?",
      image: "13-8.jpeg",
      options: [
        { id: 0, text: "naurulokki", isCorrect: false },
        { id: 1, text: "kurki", isCorrect: true },
        { id: 2, text: "kuovi", isCorrect: false },
        { id: 3, text: "silkkiuikku", isCorrect: false },
      ],
    },

    {
      text: "Which animal is this?",
      image: "14-1.jpeg",
      options: [
        { id: 0, text: "majava", isCorrect: true },
        { id: 1, text: "saukko", isCorrect: false },
        { id: 2, text: "piisami", isCorrect: false },
        { id: 3, text: "vesimyyrä", isCorrect: false },
      ],
    },

    {
      text: "Which animal is this?",
      image: "14-2.jpeg",
      options: [
        { id: 0, text: "majava", isCorrect: false },
        { id: 1, text: "saukko", isCorrect: false },
        { id: 2, text: "piisami", isCorrect: false },
        { id: 3, text: "vesimyyrä", isCorrect: true },
      ],
    },

    {
      text: "Which animal is this?",
      image: "14-3.jpeg",
      options: [
        { id: 0, text: "saimaannorppa", isCorrect: true },
        { id: 1, text: "harmaahylje", isCorrect: false },
        { id: 2, text: "piisami", isCorrect: false },
        { id: 3, text: "vesimyyrä", isCorrect: false },
      ],
    },

    {
      text: "Which animal is this?",
      image: "14-4.jpeg",
      options: [
        { id: 0, text: "majava", isCorrect: false },
        { id: 1, text: "saukko", isCorrect: false },
        { id: 2, text: "piisami", isCorrect: true },
        { id: 3, text: "vesimyyrä", isCorrect: false },
      ],
    },

    {
      text: "Which animal is this?",
      image: "14-5.jpeg",
      options: [
        { id: 0, text: "majava", isCorrect: false },
        { id: 1, text: "saukko", isCorrect: true },
        { id: 2, text: "piisami", isCorrect: false },
        { id: 3, text: "vesimyyrä", isCorrect: false },
      ],
    },

    {
      text: "Which animal is this?",
      image: "14-6.jpeg",
      options: [
        { id: 0, text: "saimaannorppa", isCorrect: false },
        { id: 1, text: "harmaahylje", isCorrect: true },
        { id: 2, text: "piisami", isCorrect: false },
        { id: 3, text: "vesimyyrä", isCorrect: false },
      ],
    },

    {
      text: "Which animal is this?",
      image: "15-1.jpeg",
      options: [
        { id: 0, text: "hevosjuotikas", isCorrect: false },
        { id: 1, text: "sinisimpukka", isCorrect: false },
        { id: 2, text: "rapu", isCorrect: true },
        { id: 3, text: "järvisimpukka", isCorrect: false },
      ],
    },

    {
      text: "Which animal is this?",
      image: "15-2.jpeg",
      options: [
        { id: 0, text: "hevosjuotikas", isCorrect: false },
        { id: 1, text: "sinisimpukka", isCorrect: false },
        { id: 2, text: "sudenkorento", isCorrect: false },
        { id: 3, text: "järvisimpukka", isCorrect: true },
      ],
    },

    {
      text: "Which animal is this?",
      image: "15-3.jpeg",
      options: [
        { id: 0, text: "hevosjuotikas", isCorrect: false },
        { id: 1, text: "sinisimpukka", isCorrect: true },
        { id: 2, text: "sudenkorento", isCorrect: false },
        { id: 3, text: "järvisimpukka", isCorrect: false },
      ],
    },

    {
      text: "Which animal is this?",
      image: "15-4.jpeg",
      options: [
        { id: 0, text: "hevosjuotikas", isCorrect: false },
        { id: 1, text: "sudenkorento", isCorrect: false },
        { id: 2, text: "rantahämähäkki", isCorrect: false },
        { id: 3, text: "liejukotilo", isCorrect: true },
      ],
    },

    {
      text: "Which animal is this?",
      image: "15-5.jpeg",
      options: [
        { id: 0, text: "hevosjuotikas", isCorrect: false },
        { id: 1, text: "sudenkorento", isCorrect: false },
        { id: 2, text: "rantahämähäkki", isCorrect: true },
        { id: 3, text: "vesimittari", isCorrect: false },,
      ],
    },

    {
      text: "Which animal is this?",
      image: "15-6.jpeg",
      options: [
        { id: 0, text: "hevosjuotikas", isCorrect: true },
        { id: 1, text: "sudenkorento", isCorrect: false },
        { id: 2, text: "rantahämähäkki", isCorrect: false },
        { id: 3, text: "vesimittari", isCorrect: false },
      ],
    },

    {
      text: "Which animal is this?",
      image: "15-7.jpeg",
      options: [
        { id: 0, text: "hevosjuotikas", isCorrect: false },
        { id: 1, text: "sudenkorento", isCorrect: true },
        { id: 2, text: "rantahämähäkki", isCorrect: false },
        { id: 3, text: "vesimittari", isCorrect: false },
      ],
    },

    {
      text: "Which animal is this?",
      image: "15-8.jpeg",
      options: [
        { id: 0, text: "hevosjuotikas", isCorrect: false },
        { id: 1, text: "sudenkorento", isCorrect: false },
        { id: 2, text: "rantahämähäkki", isCorrect: false },
        { id: 3, text: "vesimittari", isCorrect: true },
      ],
    }

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
