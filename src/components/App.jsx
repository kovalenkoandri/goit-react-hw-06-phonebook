import { useState, useEffect } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');
  const handleChageName = event => setName(event.target.value);
  const handleChageNumber = event => setNumber(event.target.value);
  useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteElement = id =>
    setContacts(prevState => prevState.filter(removed => removed.id !== id));
  
  const changeFilter = event => setFilter(event.target.value); 

  const handleSubmit = event => {
    event.preventDefault();
    for (const duplicate of contacts) {
      if (
        event.currentTarget.elements.name.value.toLocaleUpperCase() ===
        duplicate.name.toLocaleUpperCase()
      ) {
        alert(`${duplicate.name} is already in contacts.`);
        return;
      }
    }
    setContacts(prevState => [
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
  const getVisibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
    );
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm
        onSubmit={handleSubmit}
        onChageName={handleChageName}
        onChageNumber={handleChageNumber}
        name={name}
        number={number}
      />
      <h2 className={css.title}>Contacts</h2>
      <Filter
        {...{
          onChange: changeFilter,
          value: filter,
        }}
      />
      <ContactList
        {...{
          contacts: getVisibleContacts(),
          deleteElement: deleteElement,
        }}
      />
    </div>
  );
};
export default App;
