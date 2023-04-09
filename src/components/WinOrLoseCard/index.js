// Write your code here.
import './index.css'

const Results = props => {
  const {score} = props

  return (
    <div className="results-bg-container">
      <div className="results-score-container">
        <h1 className="results-heading">
          {score < 11 ? 'You Lose' : 'You Won'}
        </h1>
        <p className="results-heading">Best Score</p>
        <p className="score-paragraph">{`${score}/12`}</p>
        <button className="play-button" type="button">
          Play Again
        </button>
      </div>
      <div>
        <img
          src={
            score < 12
              ? 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
          }
          alt="results"
          className="results-image"
        />
      </div>
    </div>
  )
}

export default Results
