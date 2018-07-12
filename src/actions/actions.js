import Api from '../api/Api'
import {
    GET_PROFILES
} from '../constants/ActionTypes'

// fetch profiles action
export function getProfiles() {
    return Api.getProfiles().then(response => {
        return {
            type: GET_PROFILES,
            payload: response
        }
    })
    .catch(err => { throw (err) })
}