import React from 'react';
import HogwartsSelector from '../components/HogwartsSelector.js';
import HogwartsDetail from '../components/HogwartsDetail.js';

class HogwartsContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            characters: [],
            currentCharacter: null
        };
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
    }

componentDidMount() {
  const url = 'http://hp-api.herokuapp.com/api/characters'

  fetch(url)
  .then(res => res.json())
  .then(characters => this.setState({characters: characters}))
  .catch(err => console.error(err))
}


handleCharacterSelected(index) {
  const selectedCharacter = this.state.characters[index];
  this.setState({currentCharacter: selectedCharacter})
}

render(){
  return(
    <div>
      <h2>Hogwarts Characters</h2>
      <HogwartsSelector characters={this.state.characters} onCharacterSelected={this.handleCharacterSelected} />
      <HogwartsDetail character={this.state.currentCharacter} />
      </div>
    );
  }
}

export default HogwartsContainer;