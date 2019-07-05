// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

import FilmCard from './FilmCard';

const Films = ({ films }) => {
  return (
    <div>
      {
        films.map((film) => {
          return (
            <FilmCard key={film.episode_id} film={film} />
          );
        })
      }
    </div>
  );
};

Films.propTypes = {
  films: PropTypes.array.isrequired
};

export default Films;