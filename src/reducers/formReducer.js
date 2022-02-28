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
  transports: [
    {
      way: 'foot',
      id: 1,
    },
    {
      way: 'car',
      id: 2,
    },
    {
      way: 'campingcar',
      id: 3,
    },
    {
      way: 'boat',
      id: 4,
    },
    {
      way: 'train',
      id: 5,
    },
    {
      way: 'rocket',
      id: 6,
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
