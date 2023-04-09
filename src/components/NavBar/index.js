// Write your code here.
import './index.css'

const Navbar = props => {
  const {score, topScore, gameover} = props
  return (
    <nav className="navbar-container">
      <div className="navbar-logo-heading-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-game-logo"
        />
        <h1 className="navbar-heading">Emoji Game</h1>
      </div>
      <div
        className={
          gameover ? 'hide-container' : 'navbar-logo-heading-container'
        }
      >
        <p className="paragraph">{`Score: ${score}`}</p>
        <p className="paragraph">{`Top Score: ${topScore}`}</p>
      </div>
    </nav>
  )
}

export default Navbar
