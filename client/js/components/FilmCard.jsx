import React from 'react';
import PropTypes from 'prop-types';

import { dateFormatter } from '../utils/helperFuncs';

const FilmCard = ({ film, handleClick }) => {
  return (
    <div>

      <div
        className='mt-3 rounded pl-2'
        name={film.title}
        onClick={handleClick}
        style={{ cursor: 'pointer', backgroundColor: '$color-black' }}
      >

        <h3 className='m-0 text-light font-weight-bold'>
          {film.title}
        </h3>

        <text className='m-0 text-secondary'>
          Episode #
        </text>

        <text className='m-0 text-secondary'>
          {film.episode_id}
        </text>

        <br />

        <text className='m-0 text-light font-weight-bold'>
          Release Date:{' '}
        </text>

        <text className='m-0 text-light font-weight-lighter'>
          {dateFormatter(film.release_date)}
        </text>

      </div>

    </div>
  );
};

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default FilmCard;