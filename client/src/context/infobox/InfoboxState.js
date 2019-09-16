import React, { useReducer } from 'react';
import uuid from 'uuid';
import InfoboxContext from './infoboxContext';
import InfoboxReducer from './infoboxReducer';

import {
  ADD_INFOBOX,
  DELETE_INFOBOX,
  SET_CURRENT_INFOBOX,
  CLEAR_CURRENT_INFOBOX,
  UPDATE_INFOBOX,
  FILTER_INFOBOXES,
  CLEAR_FILTER_INFOBOX

} from '../types';

const InfoboxState = props => {
  const initialState = {
    infoboxes: [
      {
        id: 1,
        parentId: 0,
        divType: 'divh1',
        textType: 'h1',
        label: 'Facts',
        linkUrl: '#',
        source: '',
        imageUrl: '',
        'preview-text': ''
      },
      {
        id: 2,
        parentId: 1,
        divType: 'divh2',
        textType: 'h2',
        label: 'In Practice',
        linkUrl: 'http://google.com',
        source: 'Wikipedia',
        imageUrl:
          'https://www.pixelstalk.net/wp-content/uploads/2016/03/Amazing-Backgrounds-download-free.jpg',
        'preview-text':
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet facere nam nemo explicabo, tempora expedita at asperiores labore minima?'
      },
      {
        id: 3,
        parentId: 2,
        divType: 'divLinkBox',
        textType: 'linkBox',
        label: 'Osteopathic Manipulative Treatment in Action!',
        linkUrl: 'https://www.youtube.com/watch?v=YWuG0DdBEEg',
        source: 'Wikipedia',
        imageUrl: 'https://source.unsplash.com/1600x900/?nature,water',
        'preview-text':
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet facere nam nemo explicabo, tempora expedita at asperiores labore minima?'
      },
      {
        id: 4,
        parentId: 2,
        divType: 'divLinkBox',
        textType: 'linkBox',
        label: 'Doctor of Osteopathic Medicine',
        linkUrl: 'https://en.wikipedia.org/wiki/Doctor_of_Osteopathic_Medicine',
        source: 'Wikipedia',
        imageUrl: 'https://source.unsplash.com/1600x900/?medical',
        'preview-text':
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet facere nam nemo explicabo, tempora expedita at asperiores labore minima?'
      },
      {
        id: 5,
        parentId: 1,
        divType: 'divh2',
        textType: 'h2',
        label: 'Overview',
        linkUrl: '',
        source: '',
        imageUrl: '',
        'preview-text': ''
      }
    ],
    current:null,
    filtered: null
  };

  const [state, dispatch] = useReducer(InfoboxReducer, initialState);

  //Add Infobox
  const addInfobox = infobox => {
    infobox.id = uuid.v4();
    dispatch({ type: ADD_INFOBOX, payload: infobox });
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
      dispatch({ type: CLEAR_CURRENT_INFOBOX  });
      
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
    dispatch({ type: CLEAR_FILTER_INFOBOX  });
    
  };
  return (
    <InfoboxContext.Provider
      value={{
        infoboxes: state.infoboxes,
        current: state.current,
        filtered:state.filtered,
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
