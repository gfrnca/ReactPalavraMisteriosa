// CSS
import './App.css';

// React 
import { useCallback, useEffect, useState } from 'react';

// Data
import { wordsList } from './data/words';

// Components
import StartScreen from './components/StartScreen/StartScreen';
import GameScreen from './components/GameScreen/GameScreen';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);

  return (
    <div className="App">
      { gameStage === "start" && <StartScreen />}
      { gameStage === "game" && <GameScreen />}
      { gameStage === "end" && <StartScreen />}
    </div>
  );
}

export default App;
