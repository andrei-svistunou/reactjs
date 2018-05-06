import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const VideoItem = props => (
  <li className='video__item' onClick={props.chooseFilm}>
    <img className="video-img" src={props.poster}/>
    <div className="video-info flex">
      <div>
        <h4 className="video-title">{props.title}</h4>
        <p className="video-genre">{props.genre}</p>
      </div>
      <span className="video-release">{props.releaseDate}</span>
    </div>
  </li>
);

VideoItem.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  chooseFilm: PropTypes.func.isRequired
};

export default VideoItem;
