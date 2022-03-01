// ACTION TYPE SET_SELECTED_ITEM
export const SET_SELECTED_ITEM = 'SET_SELECTED_ITEM';
// ACTION CREATOR setSelectedItem
export const setSelectedItem = (field, item) => ({
  type: SET_SELECTED_ITEM,
  field,
  item,
});

// ACTION TYPE GET_FORM_ELEMENTS
export const GET_FORM_ELEMENTS = 'GET_FORM_ELEMENTS';
// ACTION CREATOR getFormElements
export const getFormElements = (field) => ({
  type: GET_FORM_ELEMENTS,
  field,
});

// ACTION TYPE SET_FORM_ELEMENTS
export const SET_FORM_ELEMENTS = 'SET_FORM_ELEMENTS';
// ACTION CREATOR setFormElements
export const setFormElements = (field, formElements) => ({
  type: SET_FORM_ELEMENTS,
  field,
  formElements,
});

// ACTION TYPE SEND_FORM
export const SEND_FORM = 'SEND_FORM';
// ACTION CREATOR sendForm
export const sendForm = () => ({
  type: SEND_FORM,
});
