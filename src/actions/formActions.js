// ACTION TYPE SET_SELECTED_ITEM
export const SET_SELECTED_ITEM = 'SET_SELECTED_ITEM';
// ACTION CREATOR setSelectedItem
export const setSelectedItem = (field, name) => ({
  type: SET_SELECTED_ITEM,
  field,
  name,
});
