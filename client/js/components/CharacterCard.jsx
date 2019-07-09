import React from 'react';
import PropTypes from 'prop-types';

import characterImg from '../utils/characterImg';

const CharacterCard = ({ character, hasError }) => {

  if (hasError) {
    return (
      <p4 className='text-danger font-weight-bold'>
        Oh No! Something went wrong... Try another Character!
      </p4>
    );
  }

  return (

    <div className='container'>

      <div className="row mx-auto mt-3 w-50 max-h-sm shadow border rounded">

        <div className="col-6 p-0 mr-4 mh-100">
          <img className='img-fluid rounded' src={characterImg[character.name]} alt={character.name} />
        </div>

        <div className="col px-0 mh-100">
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
  );
};

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
  hasError: PropTypes.bool.isRequired
};

export default CharacterCard;