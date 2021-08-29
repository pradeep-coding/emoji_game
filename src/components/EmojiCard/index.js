import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onSelectEmoji = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-card" onClick={onSelectEmoji}>
      <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
    </li>
  )
}

export default EmojiCard
