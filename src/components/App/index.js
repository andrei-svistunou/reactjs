import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { hot } from 'react-hot-loader';
import Footer from '../Footer';
import Header from '../Header';
import Logo from '../Logo';
import Search from '../Search';
import NotFound from '../NotFound';
import VideoList from '../VideoList';
import Label from '../Label';
import Filter from '../Filter';
import FilmCard from '../FilmCard';

import './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      videoList: [],
      orderFilters: [{ value: 'release date', name: 'release_date' }, { value: 'rating', name: 'rating' }],
      totalMovies: null,
      selectedFilm: null
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.chooseFilm = this.chooseFilm.bind(this);
    this.setDefaultState = this.setDefaultState.bind(this);
  }

  searchMovies(params) {
    return axios.get('http://react-cdp-api.herokuapp.com/movies', {
      params
    });
  }

  getMovie(id) {
    return axios.get(`http://react-cdp-api.herokuapp.com/movies/${id}`);
  }

  setDefaultState() {
    this.setState({
      totalMovies: null,
      selectedFilm: null,
      videoList: []
    });
  }

  searchHandler(params) {
    this.searchMovies(params)
      .then(res => this.setState({
        videoList: res.data.data,
        totalMovies: res.data.total
      }))
      .catch(err => console.log(err));
  }

  chooseFilm(id) {
    this.getMovie(id)
      .then(res => this.setState({
        selectedFilm: res.data
      }))
      .catch(err => console.log(err));
  }

  render() {
    const {
      videoList,
      orderFilters,
      totalMovies,
      selectedFilm
    } = this.state;

    return (
      <div className="wrapper">
        <Header defaultStatus={!!selectedFilm} clickHandler={this.setDefaultState}>
          {selectedFilm !== null ?
            <FilmCard film={ selectedFilm }/> :
            <Search clickHandler={this.searchHandler} id="main-search"/>
          }
        </Header>
        <div className={`panel flex ${videoList.length > 0 ? '' : ' panel--empty'}`}>
          {videoList.length > 0 ?
            <Fragment>
              <Label text={`${totalMovies} movies founded`} />
              <Filter label="Sort by" filters={orderFilters}/>
            </Fragment>
            : ''
          }
        </div>
        <main className="main">
          {videoList.length > 0
            ? <VideoList videoList={videoList} chooseFilm={this.chooseFilm}/>
            : <NotFound />
          }
        </main>
        <Footer>
          <Logo/>
        </Footer>
      </div>
    );
  }
}

export default hot(module)(App);
