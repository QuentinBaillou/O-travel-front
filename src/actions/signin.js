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

export const EMPTY_FIELD_ERROR = 'EMPTY_FIELD_ERROR';

export const setEmptyFieldError = (bool) => ({
  type: EMPTY_FIELD_ERROR,
  emptyFieldError: bool,
});

export const FIRSTNAME_ERROR = 'FIRSTNAME_ERROR';

export const setFirstnameError = (bool) => ({
  type: FIRSTNAME_ERROR,
  firstnameError: bool,
});

export const LASTNAME_ERROR = 'LASTNAME_ERROR';

export const setLastnameError = (bool) => ({
  type: LASTNAME_ERROR,
  lastnameError: bool,
});

export const CREATE_USER = 'CREATE_USER';

export const setCreateUser = () => ({
  type: CREATE_USER,
});
