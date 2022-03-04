// ACTION TYPE SET_FORM_FIELD
export const SET_FORM_FIELD = 'SET_FORM_FIELD';
// ACTION CREATOR setFormField
export const setFormField = (value, field) => ({
  type: SET_FORM_FIELD,
  value,
  field,
});

// ACTION TYPE SEND_LOGIN_FORM
export const SEND_LOGIN_FORM = 'SEND_LOGIN_FORM';
// ACTION CREATOR sendLoginForm
export const sendLoginForm = () => ({
  type: SEND_LOGIN_FORM,
});
