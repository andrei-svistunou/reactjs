import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMovie from '../../redux/actions/getMovie';
import './index.css';

class FilmCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    vote_average: PropTypes.number.isRequired,
    getMovie: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { getMovie } = this.props;

    getMovie(this.props.match.params.id);
  }

  render() {
    const {
      poster_path,
      title,
      vote_average,
      tagline,
      release_date,
      runtime,
      overview
    } = this.props;

    return (
    <section className='film__item'>
      <div className="film__poster">
        <img className="film__img" src={poster_path}/>
      </div>
      <div className="film__info">
        <h3 className="film-title">{title}
          <span className="film__rating">{vote_average}</span>
        </h3>
        <p className="row film__tagline">{tagline}</p>
        <p className="row">
          <span className="film__year">{release_date}</span>
          <span className="film__duration">{runtime} min</span>
        </p>
        <p className="row film__description">{overview}</p>
      </div>
    </section>
    );
  }
}

const mapStateToProps = state => state.films.selectedFilm;

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators({
    getMovie
  }, dispatch);
  return { ...actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmCard);
