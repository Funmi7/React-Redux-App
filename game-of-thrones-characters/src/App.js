import React, {useEffect} from 'react';
import './App.css';
import {connect} from 'react-redux';
import * as actionCreators from './state/actionCreators';
import CharactersList from './components/CharactersList';

export function App(props) {
  const {fetchCharacters, characters} = props;


  return (
    <div className="App">
      <CharactersList
      // characters={characters} 
      // showCharacters={showCharacters}
      />
    </div>
  );
}

export default connect(
  state => state,
  actionCreators,
)(App)