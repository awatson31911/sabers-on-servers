// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

import FilmCard from './FilmCard';

import filmImg from '../utils/filmImg';

const Films = ({ film, films, handleClick }) => {
  return (

    <div>

      <div className="row m-auto">

        <div className="col-6">
          <img src={film && filmImg[film.title]} alt={film && film.title} />
        </div>

        <div className="col-6">
          {
            films.map((film) => {
              return (
                <FilmCard
                  key={film.episode_id}
                  film={film}
                  handleClick={handleClick}
                />
              );
            })
          }
        </div>

      </div>

    </div>
  );
};

Films.propTypes = {
  film: PropTypes.object.isrequired,
  films: PropTypes.array.isrequired,
  handleClick: PropTypes.func.isRequired
};

export default Films;