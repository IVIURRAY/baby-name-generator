import React from 'react';
import NameContainer from '../containers/NameContainer';
import ButtonContainer from '../containers/ButtonContainer';
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
      <ButtonContainer />
      <SavedNamesContainer />
    </div>
  )
}

export default App;
