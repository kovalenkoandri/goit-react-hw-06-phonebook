import css from './ContactList.module.css';
import PropTypes from 'prop-types';
const ContactList = ({ deleteElement, contacts }) => (
  <ul>
    {contacts.map(element => {
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
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
