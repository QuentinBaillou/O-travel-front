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
export const saveUserInfo = (email, firstname, lastname) => ({
  type: SAVE_USER_INFO,
  email,
  firstname,
  lastname,
});

// ACTION TYPE SET_ERROR
export const SET_ERROR = 'SET_ERROR';
// ACTION CREATOR setError
export const setError = (errorMessage, state) => ({
  type: SET_ERROR,
  state,
  errorMessage,
});

// ACTION TYPE GET_LAST_USER
export const GET_LAST_USER = 'GET_LAST_USER';
// ACTION CREATOR getLastUser
export const getLastUser = () => ({
  type: GET_LAST_USER,
});

// ACTION TYPE GET_NEW_PASSWORD
export const GET_NEW_PASSWORD = 'GET_NEW_PASSWORD';
// ACTION CREATOR getNewPassword
export const getNewPassword = () => ({
  type: GET_NEW_PASSWORD,
});
