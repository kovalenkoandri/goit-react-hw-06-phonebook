import React, { Component } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
class App extends Component {
  state = {
    contacts: [],
    filter: '', //cant understand why we need it
  };
  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
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
  componentDidMount() {
    const LSvalues = Object.values(localStorage);
    const parsedLS = [];
    LSvalues.forEach(element => parsedLS.push(JSON.parse(element)));
    const filtered = parsedLS.filter(
      element => element.id && element.id.length === 21
    );
    this.setState({ contacts: [...filtered] });
  }
  componentDidUpdate() {
    this.state.contacts.forEach(
      element =>
        element && localStorage.setItem(element.id, JSON.stringify(element))
    );
  }
  deleteElement = id => {
    localStorage.removeItem(id);
    this.setState({
      contacts: this.state.contacts.filter(removed => removed.id !== id),
    });
  };
  saveArray = [...this.state.contacts];
  filterContacts = (str = '') => {
    console.log(this.saveArray);
    //while str search input is empty
    if (
      str.length === 0 &&
      this.saveArray.length !== 0 &&
      this.saveArray.length !== this.state.contacts.length
    ) {
      console.log(this.saveArray);
      this.setState({ contacts: [...this.saveArray] });
    } else {
      //if user typed smth in filter input
      if (this.state.contacts.length !== 0) {
        this.saveArray = [...this.state.contacts];
      }
      this.setState({
        contacts: this.state.contacts.filter(remain =>
          remain.name.includes(str)
        ),
      });
      console.log(this.saveArray);
      console.log(this.state.contacts);
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
