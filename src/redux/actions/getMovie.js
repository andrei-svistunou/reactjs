import axios from 'axios';
import selectFilm from './selectFilm';

const getMovie = id => dispatch =>
  axios.get(`http://react-cdp-api.herokuapp.com/movies/${id}`)
    .then(res => dispatch(selectFilm(res.data)))
    .catch(err => console.log(err));

export default getMovie;
