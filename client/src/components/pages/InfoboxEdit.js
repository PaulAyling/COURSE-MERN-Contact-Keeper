import React from 'react';
import InfoboxForm from '../infobox/InfoboxForm';
import Infoboxes from '../infobox/Infoboxes';

const InfoboxEdit = () => {
  return (
    <div className='grid-2'>
      <div>
        {/* Contact Form */}
        <InfoboxForm />
      </div>
      <div>
        <Infoboxes />
      </div>
    </div>
  );
};

export default InfoboxEdit;
