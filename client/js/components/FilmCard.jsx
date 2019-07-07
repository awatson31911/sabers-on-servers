import React from 'react';
import PropTypes from 'prop-types';

import { dateFormatter } from '../utils/helperFuncs';

const FilmCard = ({ film, handleClick }) => {
  return (
    <div>

      <div name={film.title} onClick={handleClick}>
        <br />

        <h3 className='m-0 font-weight-bold'>
          {film.title}
        </h3>

        <text className='m-0'>
          Episode #
        </text>

        <text className='m-0'>
          {film.episode_id}
        </text>

        <br />

        <text className='m-0 font-weight-bold'>
          Release Date:{' '}
        </text>

        <text className='m-0 font-weight-lighter'>
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