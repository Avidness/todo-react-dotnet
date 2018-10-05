import * as Actions from '../actions/ItemActions';

const initialState = {
  list: [],
  loading: true,
  errorMessage: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Actions.FETCH_ITEMS:
      return {
        ...state,
        list: action.payload,
        loading: false,
        errorMessage: ''
      };
    case Actions.NEW_ITEM:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
        errorMessage: ''
      };
    case Actions.UPDATE_ITEM:
      return {
        ...state,
        list: state.list.map((item) => 
                item.id === action.payload.id
                ? action.payload
                : item),
        loading: false,
        errorMessage: ''
      };
    case Actions.DELETE_ITEM:
      return {
        ...state,
        list: state.list.filter(({ id }) => id !== action.payload),
        loading: false,
        errorMessage: ''
      };
    case Actions.SET_LOADING_ITEM:
      return {
        ...state,
        loading: true,
        errorMessage: ''
      };
    case Actions.ITEM_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
