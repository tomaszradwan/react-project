import React, { Component } from 'react';
import Countdown from './Countdown';
import "./App.css";
import "./Countdown.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [
        { id: 0, name: "śniadanie", time: "07:00" },
        { id: 1, name: "obiad", time: "15:00" },
        { id: 2, name: "kolacja", time: "19:00" },
      ]
    }
  }

  render() {
    const events = this.state.events.map(elem => {
      return <Countdown key={elem.id}  name={elem.name} time={elem.time} />;
    });
    return <div className="app">{events}</div>;
  }
}

export default App; 
