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

  // Handle starting game
  const startGame = () => {
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
