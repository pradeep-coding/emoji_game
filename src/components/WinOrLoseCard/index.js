import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {score, onClickPlayAgain} = props

  const imageUrl = score > 11 ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = score > 11 ? 'You Won' : 'You Lose'
  const scoreLabel = score > 11 ? 'Best Score' : 'Score'

  return (
    <div className="result">
      <div className="game-result">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="score-heading">{scoreLabel}</p>
        <p className="final-score">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img src={imageUrl} alt="win or lose" className="win-or-lose-image" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
