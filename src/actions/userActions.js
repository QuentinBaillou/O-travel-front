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
export const saveUserInfo = (email, firstname, lastname, token) => ({
  type: SAVE_USER_INFO,
  email,
  firstname,
  lastname,
  token,
});

// ACTION TYPE SET_FORM_ERROR
export const SET_FORM_ERROR = 'SET_FORM_ERROR';
// ACTION CREATOR setFormError
export const setFormError = (errorMessage, state) => ({
  type: SET_FORM_ERROR,
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

export const SET_EMAIL = 'SET_EMAIL';

export const setEmail = (email) => ({
  type: SET_EMAIL,
  email,
});

export const SET_PASSWORD = 'SET_PASSWORD';

export const setPassword = (password) => ({
  type: SET_PASSWORD,
  password,
});

export const SET_FIRSTNAME = 'SET_FIRSTNAME';

export const setFirstname = (firstname) => ({
  type: SET_FIRSTNAME,
  firstname,
});

export const SET_LASTNAME = 'SET_LASTNAME';

export const setLastname = (lastname) => ({
  type: SET_LASTNAME,
  lastname,
});

export const SET_SUBMITTED = 'SET_SUBMITTED';

export const setSubmitted = (bool) => ({
  type: SET_SUBMITTED,
  submitted: bool,
});

export const SET_ERROR = 'SET_ERROR';

export const setError = (bool) => ({
  type: SET_ERROR,
  error: bool,
});

export const CREATE_USER = 'CREATE_USER';

export const setCreateUser = () => ({
  type: CREATE_USER,
});
