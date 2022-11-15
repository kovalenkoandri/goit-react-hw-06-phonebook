import css from './ContactList.module.css';
import { rmTask } from 'redux/store.js'
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
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
              onClick={() => dispatch(rmTask(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );};

export default ContactList;
