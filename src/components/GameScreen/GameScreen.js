// CSS
import './GameScreen.css';

const GameScreen = ({ verifyLetter }) => {
  return (
    <div className="screen">
      <h1>Acerte a palavra!</h1>

      <p>Clique no botão para começar o jogo</p>
      <button onClick={verifyLetter}>Finalizar jogo</button>
    </div>
  )
}

export default GameScreen