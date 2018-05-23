import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../Button';
import './index.css';

const Filter = (props) => {
  const { filters, label, selectFilter } = props;

  return (
    <div>
      <span className="filter__label upper-text ">{label}</span>
      {filters.map(filter =>
        <Button
          key={filter.value}
          classes={`btn--small ${filter.active ? 'btn-primary' : 'btn--secondary'} left-space-10`}
          value={filter.value}
          onClick={() => selectFilter(filter)}/>)
      }
    </div>
  );
};

Filter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.shape).isRequired,
  label: PropTypes.string.isRequired,
  selectFilter: PropTypes.func
};


const mapStateToProps = state => state.films;

export default connect(mapStateToProps)(Filter);
