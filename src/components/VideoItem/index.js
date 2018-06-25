import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';

const VideoItem = props => (
  <li className='video__item' onClick={props.chooseFilm}>
    <Link to={`/film/${props.id}`}>
      <img className="video-img" src={props.poster}/>
      <div className="video-info flex">
        <div>
          <h4 className="video-title">{props.title}</h4>
          <p className="video-genre">{props.genre}</p>
        </div>
        <span className="video-release">{props.releaseDate}</span>
      </div>
    </Link>
  </li>
);

VideoItem.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  chooseFilm: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default VideoItem;
