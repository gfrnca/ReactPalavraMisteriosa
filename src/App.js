// CSS
import './App.css';

// React 
import { useCallback, useEffect, useState } from 'react';

// Data
import { wordsList } from './data/words';

// Components
import StartScreen from './components/StartScreen/StartScreen';
import GameScreen from './components/GameScreen/GameScreen';
import GameOverScreen from './components/GameOverScreen/GameOverScreen';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState('');
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    // Pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    console.log(category)

    // Pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    console.log(word)

    return { word, category }
  }
 
  // Handle starting game
  const startGame = () => {
    // Pick word and category
    const { word, category } = pickWordAndCategory();

    // Create an array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());  
  
    console.log(word, category)
    console.log(wordLetters)

    // Fill states 
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters)

    setGameStage(stages[1].name);
  };

  // Handle the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // Is letter been utilized?
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    // Push guessed letter or remove a guess
    if(letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ]);
    }
  }

  
  console.log(guessedLetters);
  console.log(wrongLetters);


  // Retry game 
  const retry = () => {
    setGameStage(stages[1].name);
  }

  return (
    <div className="App">
      { gameStage === "start" && <StartScreen startGame={startGame}/>}

      { gameStage === "game" && (
        <GameScreen 
          verifyLetter={verifyLetter} 
          pickedWord={pickedWord} 
          pickedCategory={pickedCategory} 
          letters={letters} 
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />  
      )}

      { gameStage === "end" && <GameOverScreen retry={retry} />}
    </div>
  );
}

export default App;
