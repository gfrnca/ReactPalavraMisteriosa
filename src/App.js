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
    setLetters(letters)

    setGameStage(stages[1].name);
  };

  // Handle the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  // Retry game 
  const retry = () => {
    setGameStage(stages[1].name);
  }

  return (
    <div className="App">
      { gameStage === "start" && <StartScreen startGame={startGame}/>}
      { gameStage === "game" && <GameScreen verifyLetter={verifyLetter} />}
      { gameStage === "end" && <GameOverScreen retry={retry} />}
    </div>
  );
}

export default App;
