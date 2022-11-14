import css from './ContactList.module.css';
// import PropTypes from 'prop-types';
import { getContacts } from 'redux/store.js'
import { useSelector } from 'react-redux';
const ContactList = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  return (
    <ul>
      {contacts.map(element => {
        const { id, name, number } = element;
        return (
          <li key={id} className={css.renderLi}>
            {`${name}: ${number} `}
            <button
              type="button"
              className={css.renderBtn}
              // onClick={() => deleteElement(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );};

export default ContactList;
// ContactList.propTypes = {
//   deleteElement: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
// };
