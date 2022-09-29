import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
const ContactForm = props => (
  <form className={css.phonebookForm} onSubmit={props.handleSubmit}>
    <label htmlFor="name">Name</label>
    <input
      type="text"
      name="name"
      id="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      className={css.inputName}
    />
    <label htmlFor="number">Number</label>
    <input
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      className={css.inputName}
    />
    <button type="submit">Add contact</button>
  </form>
);

export default ContactForm;
ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};