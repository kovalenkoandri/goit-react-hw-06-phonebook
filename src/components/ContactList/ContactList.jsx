import css from './ContactList.module.css';
import PropTypes from 'prop-types';
const ContactList = ({ deleteElement, state = [] }) => (
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

export default ContactList;
ContactList.propTypes = {
  deleteElement: PropTypes.func.isRequired,
  state: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
