import css from './Filter.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Filter extends Component {
  onChange = event => this.props.filterContacts(event.target.value);
  render() {
     return (
       <>
         <label htmlFor="filter">Find contacts by name</label>
         <input
           type="text"
           name="filter"
           className={css.inputName}
           onChange={this.onChange}
           value={this.props.filter} 
         />
       </>
     );
  }
}
Filter.propTypes = {
  filterContacts: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};