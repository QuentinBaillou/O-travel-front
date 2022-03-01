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

// ACTION TYPE SET_BUDGET_VALUE
export const SET_BUDGET_VALUE = 'SET_BUDGET_VALUE';
// ACTION CREATOR setBudgetValue
export const setBudgetValue = (value) => ({
  type: SET_BUDGET_VALUE,
  value,
});

// ACTION TYPE SET_DESTINATIONS
export const SET_DESTINATIONS = 'SET_DESTINATIONS';
// ACTION CREATOR setDestinations
export const setDestinations = (destinations) => ({
  type: SET_DESTINATIONS,
  destinations,
});
