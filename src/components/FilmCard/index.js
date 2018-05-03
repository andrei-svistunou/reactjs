import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const FilmCard = (props) => {
  const { film } = props;

  return (
  <section className='film__item'>
    <div className="film__poster">
      <img className="film__img" src={film.poster_path}/>
    </div>
    <div className="film__info">
      <h3 className="film-title">{film.title}
        <span className="film__rating">{film.vote_average}</span>
      </h3>
      <p className="row film__tagline">{film.tagline}</p>
      <p className="row">
        <span className="film__year">{film.release_date.slice(0, 4)}</span>
        <span className="film__duration">{film.runtime} min</span>
      </p>
      <p className="row film__description">{film.overview}</p>
    </div>
  </section>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired
  }),
};

export default FilmCard;
