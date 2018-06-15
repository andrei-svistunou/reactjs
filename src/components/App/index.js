import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Footer from '../Footer';
import Header from '../Header';
import Logo from '../Logo';
import Search from '../Search';
import NotFound from '../NotFound';
import Label from '../Label';
import Filter from '../Filter';
import VideoList from '../VideoList';
import FilmCard from '../FilmCard';
import searchMovies from '../../redux/actions/searchMovies';
import orderFilter from '../../redux/actions/filterMovies';
import getMovie from '../../redux/actions/getMovie';
import unselectFilm from '../../redux/actions/unselectFilm';

import './index.css';

class App extends Component {
  static propTypes = {
    searchMovies: PropTypes.func.isRequired,
    getMovie: PropTypes.func.isRequired,
    orderFilter: PropTypes.func.isRequired,
    unselectFilm: PropTypes.func.isRequired,
    selectedFilm: PropTypes.object,
    moviesList: PropTypes.array.isRequired,
    orderFilters: PropTypes.array.isRequired,
    total: PropTypes.number,
    dispatch: PropTypes.func
  }

  render() {
    const {
      moviesList,
      total: totalMovies,
      orderFilters,
      selectedFilm,
      searchMovies: onSearch,
      getMovie: onGetFilm,
      orderFilter: onOrder,
      unselectFilm: onUnselect
    } = this.props;

    return (
      <div className="wrapper">
        <Switch>
            <Route exact path='/' render={() => <Fragment>
              <Header defaultStatus={!!selectedFilm} clickHandler={onUnselect}>
                <Search clickHandler={onSearch} id="main-search" />
              </Header>
              <div className={`panel flex ${moviesList.length > 0 ? '' : ' panel--empty'}`}>
                {moviesList.length > 0 ?
                  <Fragment>
                    <Label text={`${totalMovies} movies founded`} />
                    <Filter label="Sort by" filters={orderFilters} selectFilter={onOrder}/>
                  </Fragment>
                  : ''
                }
              </div>
              <main className="main">
                { moviesList.length > 0
                  ? <VideoList videoList={moviesList} chooseFilm={onGetFilm}/>
                  : <NotFound />
                }
              </main>
            </Fragment> } />
            <Route exact path='/film/:id' render={() => <Fragment>
              <Header defaultStatus={!!selectedFilm} clickHandler={onUnselect}>
                <FilmCard film={ selectedFilm } />
              </Header>
              <div className={`panel flex ${moviesList.length > 0 ? '' : ' panel--empty'}`}>
                {moviesList.length > 0 ?
                  <Fragment>
                    <Label text={`${totalMovies} movies founded`} />
                    <Filter label="Sort by" filters={orderFilters} selectFilter={onOrder}/>
                  </Fragment>
                  : ''
                }
              </div>
              <main className="main">
                { moviesList.length > 0
                  ? <VideoList videoList={moviesList} chooseFilm={onGetFilm}/>
                  : <NotFound />
                }
              </main>
            </Fragment> } />
            <Route path='/search/' render={() => <Fragment>
              <Header defaultStatus={!!selectedFilm} clickHandler={onUnselect}>
                <Search clickHandler={onSearch} id="main-search" />
              </Header>
              <div className={`panel flex ${moviesList.length > 0 ? '' : ' panel--empty'}`}>
                {moviesList.length > 0 ?
                  <Fragment>
                    <Label text={`${totalMovies} movies founded`} />
                    <Filter label="Sort by" filters={orderFilters} selectFilter={onOrder}/>
                  </Fragment>
                  : ''
                }
              </div>
              <main className="main">
                { moviesList.length > 0
                  ? <VideoList videoList={moviesList} chooseFilm={onGetFilm}/>
                  : <NotFound />
                }
              </main>
            </Fragment>
          } />
            <Route render={() => <NotFound text='...404...Not found...' />} />
        </Switch>
        <Footer>
          <Logo/>
        </Footer>
      </div>
    );
  }
}

const mapStateToProps = state => state.films;
const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators({
    searchMovies, orderFilter, getMovie, unselectFilm
  }, dispatch);
  return { ...actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(hot(module)(App));
