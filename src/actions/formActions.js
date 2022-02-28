// ACTION TYPE SET_CHECKED_VALUE
export const SET_CHECKED_VALUE = 'SET_CHECKED_VALUE';
// ACTION CREATOR setCheckedValue
export const setCheckedValue = (field, name) => ({
  type: SET_CHECKED_VALUE,
  field,
  name,
});
