import {
    GET_PROFILES
} from '../constants/ActionTypes'

const initialState = {
    profiles:[]
}

export default function apiReducer(state = initialState, { type, payload }) {
    switch (type) {
        // case GET_LANGUAGES_REQUEST:
        //     return Object.assign({}, state, { languages: payload })
        // case GET_LEXICON_REQUEST:
        //     return Object.assign({}, state, { lexicon: payload })
        case  GET_PROFILES: 
            return Object.assign({}, state, { profiles: payload.profiles });
        default:
            return state;
    }
}