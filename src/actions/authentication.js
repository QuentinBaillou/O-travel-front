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
