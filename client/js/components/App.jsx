import React, { Component } from 'react';

import Header from './Header.jsx';
import Logo from './Logo.jsx';
import CharacterContainer from './CharacterContainer.jsx';
import FilmsContainer from './FilmsContainer';

import characters from '../utils/character';
import ajax from '../utils/ajax';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      characters: characters.characters,
      selectedCharacter: {},
      films: [],
      selectedFilm: {}
    };

    this.handleClickCharacter = this.handleClickCharacter.bind(this);
    this.handleClickFilm = this.handleClickFilm.bind(this);
  }

  async handleClickCharacter(event) {
    const character = this.state.characters.filter((character) => {
      return character.name === event.target.getAttribute('name');
    })[0];

    const selectedCharacter = await ajax.getCharInfo(character.url).catch(error => {
      console.error(error);
      this.setState({ hasError: true, films: [], selectedFilm: {} });
    });

    const films = selectedCharacter && await Promise.all(selectedCharacter.films
      .map(async (film) => {
        const filmInfo = await ajax.getFilmInfo(film).catch(error => {
          console.error(error);
          this.setState({ [`${film.title}-hasError`]: true });
        });

        if (filmInfo) {
          this.setState({ [`${film.title}-hasError`]: false });
        }
        return filmInfo;
      })
    );

    // films.sort((a, b) => {
    //   console.log(a.episode_id, b.episode_id);
    //   return a.episode_id > b.episode_id;
    // });
    // console.log(films);

    if (selectedCharacter) {
      this.setState({ selectedCharacter, hasError: false });
    }

    if (films) {
      this.setState({
        films,
        selectedFilm: films[0]
      });
    }

  }

  handleClickFilm(event) {
    const selectedFilm = this.state.films.filter(film => {
      return film.title === event.target.getAttribute('name');
    })[0];

    this.setState({ selectedFilm });
  }

  render() {

    return (

      <div>

        <Header />

        <Logo />

        <CharacterContainer
          characters={this.state.characters}
          character={this.state.selectedCharacter}
          handleClick={this.handleClickCharacter}
          hasError={this.state.hasError}
        />

        <FilmsContainer
          films={this.state.films}
          film={this.state.selectedFilm}
          handleClick={this.handleClickFilm}
        />

      </div>
    );
  }
}