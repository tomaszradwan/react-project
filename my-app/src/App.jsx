import React, { Component } from 'react';
import uniqid from "uniqid";

import Countdown from './Countdown';
import EditEvent from './EditEvent';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [
        { id: 0, name: 'breakfast', hour: '07', minute: '00' },
        { id: 1, name: 'dinner', hour: '15', minute: '00' },
        { id: 2, name: 'supper', hour: '19', minute: '00' },
      ],
      editedEvent: {
        id: uniqid(),
        name: '',
        hour: '',
        minute: ''
      },
    }

    this.handleEditEvent = this.handleEditEvent.bind(this);
    this.handleSaveEvent = this.handleSaveEvent.bind(this);
    this.handleRemoveEvent = this.handleRemoveEvent.bind(this);
    this.handleEditInit = this.handleEditInit.bind(this);
  }

  handleEditEvent(val) {
    this.setState(prevState => {
      return {
        editedEvent: Object.assign(
          prevState.editedEvent,
          val
        )
      }
    });
  }

  handleSaveEvent() {
    this.setState(prevState => {
      const editedEventExists = prevState.events.find(
        el => el.id === prevState.editedEvent.id
      );

      let updatedEvents;

      if (editedEventExists) {
        updatedEvents = prevState.events.map(el => {
          if (el.id === prevState.editedEvent.id) {
            return prevState.editedEvent;
          } else {
            return el;
          }
        });
      } else {
        updatedEvents = [...prevState.events, prevState.editedEvent];
      }

      return {
        events: updatedEvents,
        editedEvent: { id: uniqid(), name: "", hour: "", minute: "" }
      };
    });
    // this.setState(prevState => ({
    //   events: [...prevState.events, prevState.editedEvent],
    //   editedEvent: {
    //     id: uniqid(),
    //     name: '',
    //     hour: '',
    //     minute: ''
    //   }
    // }))
  }

  handleRemoveEvent(id) {
    this.setState(prevState => ({
      events: prevState.events.filter(elem => elem.id !== id)
    }))
  }

  handleEditInit(id) {
    this.setState(prevState => ({
      editedEvent: { ...prevState.events[id] }
    }))
  }


  render() {
    const events = this.state.events.map(elem => {
      return (
        <Countdown
          key={elem.id}
          id={elem.id}
          name={elem.name}
          hour={elem.hour}
          minute={elem.minute}
          onRemove={id => this.handleRemoveEvent(id)}
          onEditInit={id => this.handleEditInit(id)}
        />
      );
    });

    return (
      <div className="app">
        {events}
        <EditEvent
          name={this.state.editedEvent.name}
          hour={this.state.editedEvent.hour}
          minute={this.state.editedEvent.minute}
          onInputChange={val => this.handleEditEvent(val)}
          onSave={() => this.handleSaveEvent()}
        />
      </div>
    );
  }
}

export default App;

//  9.1