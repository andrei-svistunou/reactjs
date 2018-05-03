import React from 'react';
import PropTypes from 'prop-types';
import VideoItem from '../VideoItem';
import './index.css';

const VideoList = (props) => {
  const { videoList, chooseFilm } = props;

  return (
    <ul className="video__list flex">
      {
        videoList.map(item =>
        <VideoItem
          key={item.id}
          id={item.id}
          title={item.title}
          genre={item.genres.join('&')}
          poster={item.poster_path}
          releaseDate={item.release_date.slice(0, 4)}
          chooseFilm={() => chooseFilm(item.id)}
        />)
      }
    </ul>
  );
};

VideoList.propTypes = {
  videoList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    poster_path: PropTypes.string.isRequired
  })),
  chooseFilm: PropTypes.func.isRequired
};

export default VideoList;
