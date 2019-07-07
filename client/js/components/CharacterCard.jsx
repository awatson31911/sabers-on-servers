import React from 'react';
import PropTypes from 'prop-types';

import characterImg from '../utils/characterImg';

const CharacterCard = ({ character }) => {

  return (
    <div className='container'>

      <div className="row mx-auto w-50">

        <div className="col-6 p-0 mr-4">
          <img className='img-fluid' src={characterImg[character.name]} alt={character.name} />
        </div>

        <div className="col px-0 py-4">

          <div className="vertial-align">
            {
              Object.keys(character).slice(0, 8).map((attr) => {
                return (
                  <div key={attr}>

                    <text className='m-0 text-uppercase font-weight-bold'>
                      {`${attr}: `}
                    </text>
                    <text className='m-0 font-weight-light'>
                      {character[attr]}
                    </text>

                  </div>
                );
              })
            }
          </div>

        </div>

      </div>

    </div>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired
};

export default CharacterCard;