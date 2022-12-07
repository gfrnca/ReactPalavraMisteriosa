// CSS
import './GameOverScreen.css';

const GameOverScreen = ({ retry }) => {
  return (
    <div className="screen">
    <h1>Você perdeu!</h1>
    <h2>Mais sorte na próxima vez</h2>

    <p>Clique no botão para começar o jogo</p>
    <button onClick={retry}>Tentar novamente</button>
  </div>
  )
}

export default GameOverScreen