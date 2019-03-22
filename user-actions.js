import $ from  'jquery';
export const UPDATE_USER = 'users:updateUser';
export const SHOW_SUCCESS= 'users:showSuccess';
export const ADD_NOTE= 'users:addNote';
export const PLUS_NOTE= 'notes:plusNoteIn'


export function updateUser (newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  }
}

export function addNote (newNote){

  return {
    type: ADD_NOTE,
    payload:{
      noteArr: newNote
    }
  }
}

export function showSuccess () {
  return  {
  type: SHOW_SUCCESS,
  payload: {
    user: "SUCCESS!"
  }
  }
}

export function apiRequest() {
  return dispatch =>{
    $.ajax({
      url:'http:google.com',
      success(){
        console.log('SUCCESS');

        dispatch(showSuccess());
        ;
      },
      error() {
        console.log('ERROR');
      }
    });
  }
}

export function plusNoteIn (newNote) {
  return {
    type: PLUS_NOTE,
    payload:{
      notes: ''
    }
  }
}
