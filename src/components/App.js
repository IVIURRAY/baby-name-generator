import React from 'react';
import NameContainer from '../containers/NameContainer';
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
      <NameContainer />
      <NewNameContainer />
      <SavedNamesContainer />
    </div>
  )
}

export default App;
