import React from 'react';
import Emoji from "react-emoji-render";
import NameContainer from '../containers/NameContainer';
import ButtonContainer from '../containers/ButtonContainer';
import SavedNamesContainer from '../containers/SavedNamesContainer';
import 'antd/dist/antd.css';
import './App.css';


const App = () => {

  return (
    <div className="App">
      <div className="title">
        <Emoji text=':baby: Name Generator :baby:' />
      </div>
      <NameContainer />
      <ButtonContainer />
      <SavedNamesContainer />
    </div>
  )
}

export default App;
