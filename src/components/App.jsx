import React, { Component } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
class App extends Component {
  state = {
    contacts: [],
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));   
    }
  }
  deleteElement = id => {
    this.setState({
      contacts: this.state.contacts.filter(removed => removed.id !== id),
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    for (const duplicate of this.state.contacts) {
      if (
        event.currentTarget.elements.name.value.toLocaleUpperCase() ===
        duplicate.name.toLocaleUpperCase()
      ) {
        alert(`${duplicate.name} is already in contacts.`);
        return;
      }
    }
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          id: nanoid(21),
          name: event.currentTarget.elements.name.value,
          number: event.currentTarget.elements.number.value,
        },
      ],
    });
    event.currentTarget.elements.name.value = '';
    event.currentTarget.elements.number.value = '';
  };
  saveArray;
  preFilterSave = true;
  filterContacts = (str = '') => {
    //while str search input is empty
    if (
      str.length === 0 &&
      this.saveArray !== undefined &&
      this.saveArray.length !== 0 &&
      this.saveArray.length !== this.state.contacts.length
    ) {
      this.setState({ contacts: [...this.saveArray] });
    } else {
      //if user typed smth in filter input
      if (this.preFilterSave) {
        this.saveArray = [...this.state.contacts];
        this.preFilterSave = false;
      }
      this.setState({
        contacts: this.state.contacts.filter(remain =>
          remain.name.includes(str)
        ),
      });
    }
  };
  render() {
    return (
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2 className={css.title}>Contacts</h2>
        <Filter
          {...{
            filterContacts: this.filterContacts,
            // filter: this.state.filter,
          }}
        />
        <ContactList
          {...{
            state: this.state,
            deleteElement: this.deleteElement,
          }}
        />
      </div>
    );
  }
}

export default App;
