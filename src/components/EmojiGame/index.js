import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

// Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    selectedEmojisList: [],
    progress: true,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickEmoji = id => {
    const {selectedEmojisList} = this.state
    const {emojisList} = this.props
    const isEmojiPresent = selectedEmojisList.includes(id)
    if (isEmojiPresent) {
      this.setState(prevState => ({
        selectedEmojisList: [],
        progress: !prevState.progress,
      }))
    } else {
      if (emojisList.length - 1 === selectedEmojisList.length) {
        this.setState(prevState => ({
          selectedEmojisList: [],
          progress: !prevState.progress,
        }))
      }
      this.setState(prevState => ({
        selectedEmojisList: [...prevState.selectedEmojisList, id],
        score: prevState.score + 1,
      }))
    }
  }

  onClickPlayAgain = () => {
    const {score, topScore} = this.state
    const newTopScore = score > topScore ? score : topScore
    this.setState(prevState => ({
      score: 0,
      topScore: newTopScore,
      progress: !prevState.progress,
      selectedEmojisList: [],
    }))
  }

  renderScoreCard = () => {
    const {progress, score} = this.state
    return (
      <WinOrLoseCard
        progress={progress}
        onClickPlayAgain={this.onClickPlayAgain}
        score={score}
      />
    )
  }

  renderEmojisList = () => {
    const updatedEmojis = this.shuffledEmojisList()

    return (
      <ul className="emojis">
        {updatedEmojis.map(emojiDetails => (
          <EmojiCard
            emojiDetails={emojiDetails}
            key={emojiDetails.id}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {score, topScore, progress} = this.state

    return (
      <div className="emoji-game-bg-container">
        <NavBar score={score} topScore={topScore} progress={progress} />
        <div className="emoji-game-body">
          {!progress ? this.renderScoreCard() : this.renderEmojisList()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
