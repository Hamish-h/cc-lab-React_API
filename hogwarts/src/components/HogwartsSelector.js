import React from 'react';

const HogwartsSelector = (props) => {
  const options = props.characters.map((character, index) => {
    return <option value={index} key={index}>{character.name}</option>
  })

  function handleChange(event) {
    const selectedIndex = event.target.value;
    props.onCharacterSelected(selectedIndex);
  }

  return (
    <select id="character-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a character from Harry Potter world...</option>
      {options}
    </select>
  )
}

export default HogwartsSelector;
