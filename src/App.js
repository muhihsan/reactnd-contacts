import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ContactList extends Component {
  render() {
    const people = this.props.contacts;

    return (
      <ol>
        {people.map(person => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ol>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={[
          { name: 'Muhammad' },
          { name: 'Ihsan' }
        ]}/>
        <ContactList contacts={[
          { name: 'Alvaro' },
          { name: 'Recoba' }
        ]}/>
        <ContactList contacts={[
          { name: 'Javier' },
          { name: 'Zanetti' }
        ]}/>
      </div>
    );
  }
}

export default App;
