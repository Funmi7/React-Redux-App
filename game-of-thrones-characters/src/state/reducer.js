import * as types from './actionTypes';


const initialState =  [];

export function charactersReducers(state=initialState, action) {
    switch (action.type) {
        case types.SHOW_CHARACTERS:
            return [...state, ...action.payload];
        default: 
            return state;
    }
}

