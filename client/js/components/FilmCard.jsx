import React from 'react';
import PropTypes from 'prop-types';

import { dateFormatter } from '../utils/helperFuncs';

const FilmCard = ({ film }) => {
  return (
    <div>
      <h2>
        Title: {film.title}
      </h2>
      <p>
        Episode #{film.episode_id}
      </p>
      <p>
        Release Date: {dateFormatter(film.release_date)}
      </p>
      {/* <img>
      Movie Poster Will Go Here
      </img> */}
    </div>
  );
};

FilmCard.propTypes = {
  film: PropTypes.object.isRequired
};

export default FilmCard;