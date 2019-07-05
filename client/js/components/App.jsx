import React, { Component } from 'react';
import FilmsContainer from './FilmsContainer';
import CharacterCard from './CharacterCard';

import characters from '../utils/character';
import ajax from '../utils/ajax';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: characters.characters,
      selectedCharacter: {},
      selectedCharacterName: 'Select a Character',
      films: []
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  async handleSelect(event) {
    const character = this.state.characters.filter((character) => {
      return character.name === event.target.value;
    })[0];
    const selectedCharacter = await ajax.getCharInfo(character.url)

    if (selectedCharacter.films) {
      const films = await Promise.all(selectedCharacter.films.map(async (film) => {
        const filmInfo = await ajax.getFilmInfo(film);
        return filmInfo;
      }));
      this.setState({
        selectedCharacter,
        selectedCharacterName: selectedCharacter.name,
        films
      });
    }
  }

  render() {
    return (
      <div>

        <select
          value={this.state.selectedCharacterName}
          name={this.state.selectedCharacterName}
          onChange={this.handleSelect}
        >
          {
            this.state.characters.map((character) => {
              return (
                <option
                  key={character.name}
                  value={character.name}
                >
                  {character.name}
                </option>
              );
            })
          }
        </select>

        <CharacterCard character={this.state.selectedCharacter} />
        <FilmsContainer films={this.state.films} />

      </div>
    );
  }
}