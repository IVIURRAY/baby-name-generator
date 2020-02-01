import React from 'react';
import {LastName} from './names'
import FirstNameContainer from '../containers/FirstNameContainer';
import NewNameContainer from '../containers/NewNameButtonContainer';
import SavedNamesContainer from '../containers/SavedNamesContainer';
import 'antd/dist/antd.css';
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
      <SavedNamesContainer />
    </div>
  )
}

export default App;
