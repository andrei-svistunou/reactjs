import axios from 'axios';
import getMovies from './getMovies';

const searchMovies = params => dispatch =>
  axios.get('http://react-cdp-api.herokuapp.com/movies', { params })
    .then(res => dispatch(getMovies(res.data)))
    .catch(err => console.log(err));

export default searchMovies;
