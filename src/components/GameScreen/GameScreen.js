// CSS
import './GameScreen.css';

const GameScreen = ({ verifyLetter }) => {
  return (
    <div className="screen">
      <div className="game">
        <p className="points">
          <span>Pontuação: 000</span>
        </p>
        <h1>Adivinhe a palavra:</h1>
        <h3 className="tip">
          Dica sobre a resposta: <span>Dica...</span>
        </h3>
        <div className="word-container">
          <span className="letter">A</span>
          <span className="blank-square"></span>
        </div>
        <div className="letter-container">
          <p>Tente adivinhar uma letra da palavra: </p>
          <form>
            <input type="text" name="letter" maxLength="1" required />
            <button>Checar</button>
          </form>
        </div>
        <div className="wrong-letters">
          <p>Letras já utilizadas</p>
          <span>a, </span>
          <span>b, </span>
        </div>
      </div>
    </div>
  )
}

export default GameScreen