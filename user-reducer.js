import {UPDATE_USER, SHOW_SUCCESS, ADD_NOTE, PLUS_NOTE} from '../actions/user-actions';

export default function userReducer(state= [], {type, payload}) {

  switch (type){
    case UPDATE_USER:

       return  payload.user       //payload.user;

    case SHOW_SUCCESS:
       return payload.user

    case ADD_NOTE:
       return [...state,payload.noteArr];

    case PLUS_NOTE:
       return payload.notes

       default:
       return state;
  }
}
