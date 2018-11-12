import React from 'react';
import Coundown from './Countdown'

const App = () => (
  <div>
    <Coundown name="śniadanie" time="07:00" />
    <Coundown name="obiad" time="15:00" />
  </div>
);

export default App; 
