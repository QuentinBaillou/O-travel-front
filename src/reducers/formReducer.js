import { SET_SELECTED_ITEM, SET_FORM_ELEMENTS, SET_BUDGET_VALUE } from 'src/actions/formActions';
import { selectedItemArraySelector } from 'src/selectors/formSelectors';

const initialState = {
  landscapes: [],
  transports: [],
  seasons: [],
  budget: 2500,
  landscapesSelected: [],
  transportsSelected: [],
  seasonsSelected: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SELECTED_ITEM:
      return {
        ...state,
        [action.field]: selectedItemArraySelector(state[action.field], action.item),
      };
    case SET_FORM_ELEMENTS:
      return {
        ...state,
        [action.field]: action.formElements,
      };
    case SET_BUDGET_VALUE:
      return {
        ...state,
        budget: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
