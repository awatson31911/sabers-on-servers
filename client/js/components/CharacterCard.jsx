import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = ({ character }) => {
  return (
    <div>

      {
        Object.keys(character).slice(0, 8).map((attr) => {
          return (
            <p key={attr}>
              {`${attr}: ${character[attr]}`}
            </p>
          );
        })
      }

    </div>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired
};

export default CharacterCard;