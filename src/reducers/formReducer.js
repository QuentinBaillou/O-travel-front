import { SET_SELECTED_ITEM, SET_FORM_ELEMENTS } from 'src/actions/formActions';
import { selectedItemArraySelector } from 'src/selectors/formSelectors';

const initialState = {
  landscapes: [
    /* {
      name: 'littoral',
      id: 1,
    },
    {
      name: 'montagneux',
      id: 2,
    },
    {
      name: 'plaine',
      id: 3,
    },
    {
      name: 'urbain',
      id: 4,
    },
    {
      name: 'désertique',
      id: 5,
    },
    {
      name: 'tropical',
      id: 6,
    },
    {
      name: 'enneigé',
      id: 7,
    },
    {
      name: 'volcanique',
      id: 8,
    }, */
  ],
  transports: [
    /* {
      way: 'transports en commun',
      id: 1,
    },
    {
      way: 'voiture',
      id: 2,
    },
    {
      way: 'camping car',
      id: 3,
    },
    {
      way: 'bateau',
      id: 4,
    },
    {
      way: 'train',
      id: 5,
    },
    {
      way: 'fusée spatiale',
      id: 6,
    }, */
  ],
  seasons: [
    /* {
      season: 'printemps',
      id: 1,
    },
    {
      season: 'été',
      id: 2,
    },
    {
      season: 'automne',
      id: 3,
    },
    {
      season: 'hiver',
      id: 4,
    }, */
  ],
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
    default:
      return state;
  }
};

export default reducer;
