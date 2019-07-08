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

              <div
                key={character.name}
                className='col mb-3 px-0 text-center character-name'
                name={character.name}
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
              >
                {character.name}
              </div>
            );
          })
        }
      </div>

      <CharacterCard character={character} hasError={hasError} />

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