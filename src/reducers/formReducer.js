import { SET_CHECKED_VALUE } from 'src/actions/formActions';
import { itemCheckedSelector } from 'src/selectors/formSelectors';

const initialState = {
  landscapes: [
    {
      name: 'city',
      id: 1,
    },
    {
      name: 'mountains',
      id: 2,
    },
    {
      name: 'sea',
      id: 3,
    },
    {
      name: 'tropical',
      id: 4,
    },
    {
      name: 'plain',
      id: 5,
    },
    {
      name: 'snow',
      id: 6,
    },
    {
      name: 'desert',
      id: 7,
    },
    {
      name: 'volcano',
      id: 8,
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CHECKED_VALUE:
      return {
        ...state,
        [action.field]: itemCheckedSelector(state[action.field], action.name),
      };
    default:
      return state;
  }
};

export default reducer;
