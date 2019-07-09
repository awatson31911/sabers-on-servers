import React from 'react';
import PropTypes from 'prop-types';

import { dateFormatter } from '../utils/helperFuncs';

const FilmCard = ({ film, handleClick, hasError }) => {

  if (hasError) {
    return (<p4 className='text-danger font-weight-bold'>
      Oh No! Something went wrong... Try another Film!
    </p4>);
  }

  return (

    <button
      className='mb-3 btn btn-outline-dark px-2'
      name={film.title}
      onClick={handleClick}
      type='button'
    >

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

    </button>

  );
};

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired
};

export default FilmCard;