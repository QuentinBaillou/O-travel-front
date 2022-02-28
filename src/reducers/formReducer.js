import { SET_SELECTED_ITEM } from 'src/actions/formActions';

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
  landscapesSelected: [],
  transportsSelected: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SELECTED_ITEM:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
