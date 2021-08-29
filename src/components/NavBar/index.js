import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  renderScores = () => {
    const {score, progress, topScore} = this.props

    if (!progress) {
      return null
    }
    return (
      <div className="scores-container">
        <p className="score">Score: {score}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    )
  }

  render() {
    return (
      <nav className="navbar">
        <div className="title-with-score-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="game logo"
              className="game-logo"
            />
            <h1 className="game-name">Emoji Game</h1>
          </div>
          {this.renderScores()}
        </div>
      </nav>
    )
  }
}

export default NavBar
