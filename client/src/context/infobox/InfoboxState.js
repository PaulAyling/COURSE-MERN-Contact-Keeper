import React, { useReducer } from 'react';
import axios from 'axios';
import InfoboxContext from './infoboxContext';
import InfoboxReducer from './infoboxReducer';

import {
  GET_INFOBOXES,
  ADD_INFOBOX,
  DELETE_INFOBOX,
  SET_CURRENT_INFOBOX,
  CLEAR_CURRENT_INFOBOX,
  UPDATE_INFOBOX,
  FILTER_INFOBOXES,
  CLEAR_INFOBOX,
  CLEAR_FILTER_INFOBOX,
  INFOBOX_ERROR
} from '../types';

const InfoboxState = props => {
  const initialState = {
    infoboxes: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(InfoboxReducer, initialState);

  //Get Infobox
  const getInfoboxes = async () => {
    // const config = {};

    try {
      const res = await axios.get('/api/infoshot');
      dispatch({ type: GET_INFOBOXES, payload: res.data });
    } catch (err) {
      dispatch({ type: INFOBOX_ERROR, payload: err.response.msg });
    }
  };

  //Add Infobox
  const addInfobox = async infoshot => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/infoshot', infoshot, config);
      dispatch({ type: ADD_INFOBOX, payload: res.data });
    } catch (err) {
      dispatch({ type: INFOBOX_ERROR, payload: err.response.msg });
    }
  };

  // Delete Infobox
  const deleteInfobox = async id => {
    try {
      await axios.delete(`/api/infoshot/${id}`);

      dispatch({ type: DELETE_INFOBOX, payload: id });
    } catch (err) {
      console.log('there was an error here');
      console.log('THis is the value in the ID: ' + id);
      console.log(
        'DELETE_INFOBOX: ' + console.log(JSON.stringify(state.infoboxes))
      );


      dispatch({ type: INFOBOX_ERROR, payload: err.response.msg });
    }
  };

  // Update Infobox
  const updateInfobox = async infobox => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.put(
        `/api/infoshot/${infobox._id}`,
        infobox,
        config
      );
      dispatch({ type: UPDATE_INFOBOX, payload: res.data });
    } catch (err) {
      dispatch({ type: INFOBOX_ERROR, payload: err.response.msg });
    }
  };
  // Clear INfobox
  const clearInfobox = () => {
    dispatch({ type: CLEAR_INFOBOX });
  };

  // Set Current INfobox
  //IS THIS THE PROBLEM

  const setCurrentInfobox = infobox => {
    dispatch({ type: SET_CURRENT_INFOBOX, payload: infobox });
  };

  // Clear Current INfobox
  const clearCurrentInfobox = () => {
    dispatch({ type: CLEAR_CURRENT_INFOBOX });
  };

  // Filter Infobox
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
        clearInfobox,
        setCurrentInfobox,
        clearCurrentInfobox,
        updateInfobox,
        filterInfoboxes,
        clearFilterInfobox,
        getInfoboxes
      }}>
      {props.children}
    </InfoboxContext.Provider>
  );
};

export default InfoboxState;
