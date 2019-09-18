import {
  ADD_INFOBOX,
  DELETE_INFOBOX,
  SET_CURRENT_INFOBOX,
  CLEAR_CURRENT_INFOBOX,
  UPDATE_INFOBOX,
  FILTER_INFOBOXES,
  CLEAR_FILTER_INFOBOX,
  INFOBOX_ERROR
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
    case FILTER_INFOBOXES:
      return {
        ...state,
        filtered: state.infoboxes.filter(infobox => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return infobox.label.match(regex) || infobox.linkUrl.match(regex);
        })
      };
      case CLEAR_FILTER_INFOBOX:
      return{
        ...state,
        filtered:null
      };
      case INFOBOX_ERROR:
      return{
        ...state,
        error:action.payload
      }
    default:
      return state;
  }
};
