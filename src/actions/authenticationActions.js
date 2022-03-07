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
