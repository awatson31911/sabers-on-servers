import React from 'react';
import PropTypes from 'prop-types';

import CharacterCard from './CharacterCard';


const CharacterContainer = ({ characters, character, handleClick, hasError }) => {

  return (
    <div className='container'>

      <div className="row">

        <p className='mx-auto' >
          Select a Character
        </p>

      </div>

      <div className="row">
        {
          characters.map((character) => {
            return (

              <button
                key={character.name}
                type='button'
                className='col px-0 btn btn-outline-secondary'
                name={character.name}
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
              >
                {character.name}
              </button>
            );
          })
        }
      </div>

      {
        character.hasOwnProperty('name') &&
        <CharacterCard character={character} hasError={hasError} />
      }

    </div>
  );
};

CharacterContainer.propTypes = {
  characters: PropTypes.array.isRequired,
  character: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired
};

export default CharacterContainer;