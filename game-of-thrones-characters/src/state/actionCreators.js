import * as types from './actionTypes';
import Axios from 'axios';

const charactersAPI = 'https://www.breakingbadapi.com/api/characters'

export function showChracters(characters) {
    return {
        type: types.SHOW_CHARACTERS,
        payload: characters
    };
}

export const fetchCharacters = () => dispatch => {
    Axios.get(charactersAPI)
    .then(response => {
        const characters = response.data;
        dispatch(showChracters(characters))
    })
    .catch(error => {
        console.log('Error:', error)
    });
}


