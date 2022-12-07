import './StartScreen.css';

const StartScreen = ({ startGame }) => {
  return (
    <div className="screen">
      <h1>Palavra Misteriosa</h1>

      <p>Clique no botão para começar o jogo</p>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen