import React, { useReducer } from 'react';
import axios from 'axios';
import InfoboxContext from './infoboxContext';
import InfoboxReducer from './infoboxReducer';

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

const InfoboxState = props => {
  const initialState = {
    infoboxes: [],
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(InfoboxReducer, initialState);

  //Add Infobox
  const addInfobox = async infobox => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/infoshot', infobox, config);

      dispatch({ type: ADD_INFOBOX, payload: res.data });
    } catch (err) {
      dispatch({ type: INFOBOX_ERROR, payload: err.response.msg });
    }
  };

  // Delete Infobox
  const deleteInfobox = id => {
    dispatch({ type: DELETE_INFOBOX, payload: id });
  };
  // Set Current Contact
  const setCurrentInfobox = infobox => {
    dispatch({ type: SET_CURRENT_INFOBOX, payload: infobox });
  };

  // Clear Current Contact
  const clearCurrentInfobox = () => {
    dispatch({ type: CLEAR_CURRENT_INFOBOX });
  };

  // Update Contact
  const updateInfobox = infobox => {
    dispatch({ type: UPDATE_INFOBOX, payload: infobox });
  };

  // Filter Contacts
  const filterInfoboxes = text => {
    dispatch({ type: FILTER_INFOBOXES, payload: text });
  };

  // Clear Filter
  const clearFilterInfobox = () => {
    dispatch({ type: CLEAR_FILTER_INFOBOX });
  };
  return (
    <InfoboxContext.Provider
      value={{
        infoboxes: state.infoboxes,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addInfobox,
        deleteInfobox,
        setCurrentInfobox,
        clearCurrentInfobox,
        updateInfobox,
        filterInfoboxes,
        clearFilterInfobox
      }}>
      {props.children}
    </InfoboxContext.Provider>
  );
};

export default InfoboxState;
