import React, { useReducer } from 'react';
import uuid from 'uuid';
import InfoshotContext from './infoshotContext';
import InfoshotReducer from './infoshotReducer';

import {
ADD_INFOSHOT,
DELETE_INFOSHOT,
UPDATE_INFOSHOT,
FILTER_INFOSHOTS
} from '../types';

const InfoshotState = props => {
  const initialState = {
    infoshots:[
      {
        id:1,
        OwnerUserId:'44',
        subjectQuestion:'Can I create a react APP'
      },
      {
        id:1,
        OwnerUserId:'44',
        subjectQuestion:'Where shall I go in Lviv for a great time'
      },
      {
        id:1,
        OwnerUserId:'44',
        subjectQuestion:'what is the answer to life, the universe and everything else?'
      }
    
    ]
  };
const[state, dispatch]= useReducer(InfoshotReducer, initialState);

//Add Contact

// Delete Contact

// Set Current Contact

// Clear Current Contact

// Update Contact

// Filter Contacts

// Clear Filter

return (
  <InfoshotContext.Provider
    value={{
      infoshots:state.infoshots
    }}
    >
    { props.children}
  </InfoshotContext.Provider>
);

};

export default InfoshotState;