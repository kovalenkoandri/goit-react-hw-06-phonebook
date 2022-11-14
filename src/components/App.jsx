// import { useState, useEffect } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { useDispatch } from 'react-redux';
const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) || []
  // );
  // const [filter, setFilter] = useState('');
  // useEffect(() => {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const deleteElement = id =>
  //   setContacts(prevState => prevState.filter(removed => removed.id !== id));
  
  // const changeFilter = event => setFilter(event.target.value); 
  const dispatch = useDispatch();
  
  const handleSubmit = (name, number, event )  => {
    event.preventDefault(); // except refresh page onSubmit
    //   if (contacts.some(el => el.name.toLocaleUpperCase().includes(name.toLocaleUpperCase()))) {
    //     alert(`${name} is already in contacts.`);
    //     return;
    // }
    const addTask = (name, number) => {
      return {
        type: 'tasks/addTask',
        payload: { id: nanoid(), name, number },
      };
    };
    dispatch(addTask(name, number));
    // setContacts(prevState => [
    //   ...prevState,
    //   {
    //     id: nanoid(21),
    //     name,
    //     number,
    //   },
    // ]);
  };
  // const getVisibleContacts = () =>
  //   contacts.filter(contact =>
  //     contact.name.toLocaleUpperCase().includes(filter.toLocaleUpperCase())
  //   );
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm
        onSubmit={handleSubmit}
      />
      <h2 className={css.title}>Contacts</h2>
      <Filter
        {...{
          // onChange: changeFilter,
          // value: filter,
        }}
      />
      <ContactList
        {...{
          // contacts: getVisibleContacts(),
          // deleteElement: deleteElement,
        }}
      />
    </div>
  );
};
export default App;
