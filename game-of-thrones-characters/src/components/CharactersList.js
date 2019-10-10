import React, {useEffect} from 'react';
import CharacterCard from './CharacterCard';
import * as actionCreators from '../state/actionCreators';
import {connect} from 'react-redux'

 export const CharactersList = props => {
    const {fetchCharacters, characters} = props

    useEffect(()=> {
        fetchCharacters();
      }, [])

    return (
        characters.map(character => {
            return (
                <CharacterCard 
                key={character.id}
                img={character.img}
                name={character.name}
                nickname={character.nickname}
                birthday={character.birthday}
                />
            )
        })
    )
}

export default connect(
    state => state,
    actionCreators,
  )(CharactersList)