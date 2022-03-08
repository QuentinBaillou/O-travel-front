// ACTION TYPE SET_FORM_FIELD
export const SET_FORM_FIELD = 'SET_FORM_FIELD';
// ACTION CREATOR setFormField
export const setFormField = (value, field) => ({
  type: SET_FORM_FIELD,
  value,
  field,
});

// ACTION TYPE LOGIN_FORM
export const LOGIN = 'LOGIN';
// ACTION CREATOR sendLoginForm
export const login = () => ({
  type: LOGIN,
});
// ACTION TYPE LOGOUT
export const LOGOUT = 'LOGOUT';
// ACTION CREATOR logout
export const logout = () => ({
  type: LOGOUT,
});

// ACTION TYPE SAVE_USER_INFO
export const SAVE_USER_INFO = 'SAVE_USER_INFO';
// ACTION CREATOR saveUserInfo
export const saveUserInfo = (firstname, lastname) => ({
  type: SAVE_USER_INFO,
  firstname,
  lastname,
});

// ACTION TYPE SEND_FORM
export const SEND_FORM = 'SEND_FORM';
// ACTION CREATOR sendForm
export const sendForm = (state) => ({
  type: SEND_FORM,
  state,
});

// ACTION TYPE GET_LAST_USER
export const GET_LAST_USER = 'GET_LAST_USER';
// ACTION CREATOR getLastUser
export const getLastUser = () => ({
  type: GET_LAST_USER,
});

// ACTION TYPE SAVE_PREVIOUS_USER
export const SAVE_PREVIOUS_USER = 'SAVE_PREVIOUS_USER';
// ACTION CREATOR savePreviousUser
export const savePreviousUser = (email, firstname, lastname) => ({
  type: SAVE_PREVIOUS_USER,
  email,
  firstname,
  lastname,
});
