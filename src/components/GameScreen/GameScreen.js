// CSS
import { useState, useRef } from 'react';
import './GameScreen.css';

const GameScreen = ({ 
  verifyLetter, 
  pickedWords, 
  pickedCategory, 
  letters, 
  guessedLetters, 
  wrongLetters,
  guesses, 
  score 
}) => {

  const [letter, setLetter] = useState('');
  const letterInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    verifyLetter(letter);

    setLetter('');

    letterInputRef.current.focus();
  }

  return (
    <div className="screen">
      <div className="game">
        <p className="points">
          <span>Pontuação: {score}</span>
        </p>
        <h1>Adivinhe a palavra:</h1>
        <h3 className="tip">
          Dica sobre a resposta: <span>{pickedCategory}</span>
        </h3>
        <p>Você ainda tem {guesses} tentativas</p>
        <div className="word-container">
          {letters.map((letter, i) => 
            guessedLetters.includes(letter) ? (
              <span key={i} className="letter">{letter}</span>
            ) : (
              <span key={i} className="blank-square"></span>
            )
          )}
        </div>
        <div className="letter-container">
          <p>Tente adivinhar uma letra da palavra: </p>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="letter" 
              maxLength="1" 
              onChange={(e) => setLetter(e.target.value)} 
              value={letter}
              ref={letterInputRef}
              required 
            />
            <button>Checar</button>
          </form>
        </div>
        <div className="wrong-letters">
          <p>Letras já utilizadas</p>
          {wrongLetters}
        </div>
      </div>
    </div>
  )
}

export default GameScreen