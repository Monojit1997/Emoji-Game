// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachItem, selectedEmoji} = props
  const {id, emojiName, emojiUrl} = eachItem

  const clickedEmoji = () => {
    selectedEmoji(id)
  }

  return (
    <li className="list-container">
      <button type="button" className="button" onClick={clickedEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
