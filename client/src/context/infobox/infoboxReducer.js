import {
  GET_INFOBOXES,
  ADD_INFOBOX,
  DELETE_INFOBOX,
  SET_CURRENT_INFOBOX,
  CLEAR_CURRENT_INFOBOX,
  UPDATE_INFOBOX,
  FILTER_INFOBOXES,
  CLEAR_FILTER_INFOBOX,
  INFOBOX_ERROR,
  CLEAR_INFOBOX
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_INFOBOXES:
      return {
        ...state,
        infoboxes: action.payload,
        loading: false
      };

    case ADD_INFOBOX:
      return {
        ...state,
        infoboxes: [action.payload, ...state.infoboxes],
        loading: false
      };
    case UPDATE_INFOBOX:
      return {
        ...state,
        infoboxes: state.infoboxes.map(infobox =>
          infobox._id === action.payload._id ? action.payload : infobox
        ),
        loading: false
      };
    case DELETE_INFOBOX:
      return {
        ...state,
        infoboxes: state.infoboxes.filter(
          infoboxes => infoboxes._id !== action.payload
        ),
        loading: false
      };
    case CLEAR_INFOBOX:
      return {
        ...state,
        contacts: null,
        filtered: null,
        error: null,
        current: null
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
      return {
        ...state,
        filtered: null
      };
    case INFOBOX_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
