import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import FriendCard from './components/FriendCard';
import friends from "./friends.json";
import './App.css';

let correctGuesses = 0;
let bestScore = 0;
let clickMessage = "Good Luck!"


class App extends Component {

  state = {
    friends,
    correctGuesses,
    bestScore,
    clickMessage
  };

  handleClick = id => {
    const character = this.state.friends;
    const cardClicked = character.filter(char => char.id === id);

    if (cardClicked[0].clicked) {
      correctGuesses = 0;
      clickMessage = "Try again! You already clicked that one!";

      for (let i = 0; i < character.length; i++ ) {
        character[i].clicked = false;
      }

      this.setState({ clickMessage });
      this.setState({ correctGuesses });
      this.setState({ friends });

    } else if (correctGuesses < 11) {
      cardClicked[0].clicked = true;
      correctGuesses++;
    }
  }

  shuffleFriends = id => {

  }

  render() {
    return (
      <div>
        <div>
          <Wrapper >
            <Title 
              clickMessage = {this.state.clickMessage}
              currentScore = {this.state.correctGuesses}
              bestScore = {this.state.bestScore}
            />

            {this.state.friends.map(friend => (
              <FriendCard 
                handleClick = {this.handleClick}
                id = {friend.id}
                key = {friend.id}
                image = {friend.image}
              />
          ))}

          </Wrapper >
        </div>
      </div>
    )
  };
}

export default App;
