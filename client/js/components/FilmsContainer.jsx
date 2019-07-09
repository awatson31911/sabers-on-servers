// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

import FilmCard from './FilmCard';

import filmImg from '../utils/filmImg';


const Films = ({ film, films, handleClick, ...props}) => {

  return (

    <div className='container mt-4'>

      <div className="row">

        <p className='mx-auto text-center'>
          Appears In:
        </p>

      </div>

      <div className="row mx-auto w-75">

        <div className="col-6">
          <img
            className='img-fluid rounded'
            src={film && filmImg[film.title]}
            alt={film && film.title} />
        </div>

        <div className="col-6 max-h-md overflow-auto">

          {
            films.map((film) => {
              return (
                <FilmCard
                  key={film.episode_id}
                  film={film}
                  hasError={props[`${film.title}-hasError`]}
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