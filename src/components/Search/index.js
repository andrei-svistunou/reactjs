import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Filter from '../Filter';
import './index.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFilters: [
        { name: 'title', value: 'title', active: true },
        { name: 'genres', value: 'genre', active: false }],
      searchFieldValue: '',
      searchBy: { name: 'title', value: 'title', active: true }
    };
    this.onSearchBy = this.onSearchBy.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onSearchBy(filter) {
    this.setState({
      searchBy: filter,
      searchFilters: this.state.searchFilters.map((item) => {
        if (item === filter) {
          return { ...item, active: true };
        }
        return { ...item, active: false };
      })
    });
  }

  onChangeInput(e) {
    const { value } = e.target;
    this.setState({ searchFieldValue: value });
  }

  onSubmit(e) {
    e.preventDefault();
    return this.props.clickHandler({
      searchBy: this.state.searchBy.name,
      search: this.state.searchFieldValue
    });
  }

  render() {
    const { searchFieldValue, searchBy, searchFilters } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label className="search__label upper-text" htmlFor={this.props.id}>Find your movie</label>
        <input type="text" className="search__field" id={this.props.id}
          value={ searchFieldValue} placeholder="Enter film or author"
          onChange={this.onChangeInput}/>
        <div className="flex">
          <Filter label="Search by" selectFilter={this.onSearchBy} filters={searchFilters}/>
          <Button value="Search" classes="btn-primary upper"
            onClick={() => this.props.clickHandler({
              searchBy: searchBy.name,
              search: searchFieldValue
            })}/>
        </div>
      </form>
    );
  }
}

Search.propTypes = {
  id: PropTypes.string.isRequired,
  clickHandler: PropTypes.func
};

export default Search;
