import css from './Filter.module.css';
const Filter = props => (
  <>
    <label htmlFor="filter">Find contacts by name</label>
    <input
      type="text"
      name="filter"
      className={css.inputName}
      onChange={props.handleInputChange}
    />
  </>
);
export default Filter;
