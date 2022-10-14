import { useState, useEffect } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
const App = () => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [saveArray, setSaveArray] = useState([]);
  const [preFilterSave, setPreFilterSave] = useState(true);
  const handleChageName = event => setName(event.target.value);
  const handleChageNumber = event => setNumber(event.target.value);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(state));
  }, [state]);

  const deleteElement = id =>
    setState(prevState => prevState.filter(removed => removed.id !== id));

  const handleSubmit = event => {
    event.preventDefault();
    for (const duplicate of state) {
      if (
        event.currentTarget.elements.name.value.toLocaleUpperCase() ===
        duplicate.name.toLocaleUpperCase()
      ) {
        alert(`${duplicate.name} is already in contacts.`);
        return;
      }
    }
    setState(prevState => [
      ...prevState,
      {
        id: nanoid(21),
        name: name,
        number: number,
      },
    ]);
    setName('');
    setNumber('');
  };
  const filterContacts = (str = '') => {
    //while str search input is empty
    if (
      str.length === 0 &&
      saveArray !== undefined &&
      saveArray.length !== 0 &&
      saveArray.length !== state.length
    ) {
      setState(prevState => [...prevState, ...saveArray]);
      setFilter('');
    } else {
      //if user typed smth in filter input
      if (preFilterSave) {
        setSaveArray(prev => [...prev, ...state]);
        setPreFilterSave(false);
        console.log(preFilterSave);
        setFilter(str);
      }
      setFilter(str);
      setState(prevState => {
        return prevState.filter(remain => remain.name.includes(str));
      });
    }
  };
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm
        handleSubmit={handleSubmit}
        handleChageName={handleChageName}
        handleChageNumber={handleChageNumber}
        name={name}
        number={number}
      />
      <h2 className={css.title}>Contacts</h2>
      <Filter
        {...{
          filterContacts: filterContacts,
          filter: filter,
        }}
      />
      <ContactList
        {...{
          state: state,
          deleteElement: deleteElement,
        }}
      />
    </div>
  );
};
export default App;
