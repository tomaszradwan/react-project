import React, { Component } from 'react';
import Countdown from './Countdown';
import EditEvent from './EditEvent';
import './App.css';
import './Countdown.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [
        { id: 0, name: 'śniadanie', time: '07:00' },
        { id: 1, name: 'obiad', time: '15:00' },
        { id: 2, name: 'kolacja', time: '19:00' },
      ]
    }

    this.handleEditEvent = this.handleEditEvent.bind(this);
  }

  handleEditEvent(val) {
    console.log(val);
  }

  render() {
    const events = this.state.events.map(elem => {
      return <Countdown key={elem.id} name={elem.name} time={elem.time} />;
    });
    return (
      <div className="app">
        {events}
        <EditEvent
          onInputChange={val => this.handleEditEvent(val)}
          onSave={() => alert('Test comment!')}
        />
      </div>
    );
  }
}

export default App;
