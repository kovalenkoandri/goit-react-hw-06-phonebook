import css from './Filter.module.css';
import PropTypes from 'prop-types';
const Filter = ({ filterContacts, filter }) => {
  const onChange = event => filterContacts(event.target.value);
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        className={css.inputName}
        onChange={onChange}
        value={filter}
      />
    </>
  );
};

export default Filter;
Filter.propTypes = {
  filterContacts: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
