import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../Button';
import Filter from '../Filter';
import searchFilter from '../../redux/actions/searchFilter';
import './index.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFieldValue: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  static propTypes = {
    searchFilter: PropTypes.func.isRequired,
    searchingFilters: PropTypes.array.isRequired,
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
    const { searchFieldValue } = this.state;
    const { searchingFilters, searchFilter } = this.props;

    return (
      <form onSubmit={this.onSubmit}>
        <label className="search__label upper-text" htmlFor={this.props.id}>Find your movie</label>
        <input type="text" className="search__field" id={this.props.id}
          value={ searchFieldValue} placeholder="Enter film or author"
          onChange={this.onChangeInput}/>
        <div className="flex">
          <Filter label="Search by" selectFilter={searchFilter} filters={searchingFilters}/>
          <Button value="Search" classes="btn-primary upper main-search"
            onClick={() => this.props.clickHandler({
              searchBy: searchingFilters.find(filter => filter.active).name,
              search: searchFieldValue
            })}/>
        </div>
      </form>
    );
  }
}

Search.propTypes = {
  id: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};

const mapStateToProps = state => state.films;
const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators({ searchFilter }, dispatch);
  return { ...actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
