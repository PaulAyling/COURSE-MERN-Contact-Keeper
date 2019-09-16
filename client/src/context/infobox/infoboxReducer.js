import {
  ADD_INFOBOX,
  DELETE_INFOBOX,
  SET_CURRENT_INFOBOX,
  CLEAR_CURRENT_INFOBOX,
  UPDATE_INFOBOX
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_INFOBOX:
      return {
        ...state,
        infoboxes: [...state.infoboxes, action.payload]
      };
    case UPDATE_INFOBOX:
      return {
        ...state,
        infoboxes: state.infoboxes.map(infobox =>
          infobox.id === action.payload.id ? action.payload : infobox
        )
      };
    case DELETE_INFOBOX:
      return {
        ...state,
        infoboxes: state.infoboxes.filter(
          infoboxes => infoboxes.id !== action.payload
        )
      };
    case SET_CURRENT_INFOBOX:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT_INFOBOX:
      return {
        ...state,
        current: null
      };
    default:
      return state;
  }
};
