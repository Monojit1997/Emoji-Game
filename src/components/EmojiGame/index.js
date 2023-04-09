import {Component} from 'react'

import './index.css'

import EmojiCard from '../EmojiCard'

import Navbar from '../NavBar'

import Results from '../WinOrLoseCard'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    selectedEmojilist: [],
    gameover: false,
    emojiListui: [],
  }

  getFinalEmoji = emojisList => {
    const {emojiListui} = this.state
    this.setState(prevState => ({
      emojiListui: [...prevState.emojiListui, emojisList],
    }))
  }

  selectedEmoji = id => {
    const {selectedEmojilist, score, topScore, gameover} = this.state

    const clickedEmoji = id

    if (selectedEmojilist.length > 11) {
      this.setState(prevState => ({gameover: !prevState.gameover}))
    } else if (selectedEmojilist.includes(clickedEmoji)) {
      this.setState(prevState => ({
        topScore: score,
        selectedEmojilist: [],
        gameover: !prevState.gameover,
      }))
    } else {
      this.setState(prevState => ({
        selectedEmojilist: [...prevState.selectedEmojilist, clickedEmoji],
        score: prevState.score + 1,
      }))
    }
  }

  render() {
    const {emojisList} = this.props
    const getFinalEmojiList = this.getFinalEmoji
    const {
      score,
      topScore,
      selectedEmojilist,
      gameover,
      emojiListui,
    } = this.state
    console.log(emojiListui)
    return (
      <div className="bg-container">
        <Navbar score={score} topScore={topScore} gameover={gameover} />
        <div className="card-container">
          {gameover ? (
            <Results score={score} emojisList={emojisList} />
          ) : (
            <ul className="unorder-list-container">
              {emojiListui.map(eachItem => (
                <EmojiCard
                  eachItem={eachItem}
                  key={eachItem.id}
                  selectedEmoji={this.selectedEmoji}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
