import css from './Filter.module.css';
import PropTypes from 'prop-types';
const Filter = ({ onChange, value }) => {
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        className={css.inputName}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default Filter;
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
