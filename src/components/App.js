import React from 'react';
import {LastName} from './names'
import FirstNameContainer from '../containers/FirstNameContainer';
import HistoricNamesContainer from '../containers/HistoricNamesContainer';
import NewNameContainer from '../containers/NewNameButtonContainer';

import './App.css';


const App = () => {

  
  return (
    <div className="App">
      <div className="title">
        Smith's Baby Name Generator!
      </div>
      <div className="babyContainer">
        <FirstNameContainer />
        <LastName />
      </div>
      <NewNameContainer />
      <HistoricNamesContainer />
    </div>
  )
}

export default App;
