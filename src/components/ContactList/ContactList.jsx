import css from './ContactList.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class ContactList extends Component {
  render() {
    const { state } = this.props || [];
    const { deleteElement } = this.props;
    // console.log(state);
    return (
      <ul>
        {state.map(element => {
          const { id, name, number } = element;
          return (
            <li key={id} className={css.renderLi}>
              {`${name}: ${number} `}
              <button
                type="button"
                className={css.renderBtn}
                onClick={() => deleteElement(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
ContactList.propTypes = {
  deleteElement: PropTypes.func.isRequired,
  state: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  // contacts: PropTypes.arrayOf(
  //   PropTypes.shape({             //this sample does NOT through any error
  //     id: PropTypes.node.isRequired,
  //     name: PropTypes.number.isRequired,
  //     number: PropTypes.func.isRequired,
  //   })
  //   ),
};
