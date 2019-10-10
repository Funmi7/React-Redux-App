import React, {useEffect} from 'react';
import './App.css';
import {connect} from 'react-redux';
import * as actionCreators from './state/actionCreators';
import CharactersList from './components/CharactersList';

export function App(props) {


  return (
    <div>
      <h2 >Breaking Bad Characters!</h2>
    <div className="App">
      <CharactersList/>
    </div>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators,
)(App)