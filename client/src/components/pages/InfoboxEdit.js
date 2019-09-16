import React from 'react';
import InfoboxForm from '../infobox/InfoboxForm';
import Infoboxes from '../infobox/Infoboxes';
import InfoboxFilter from '../infobox/InfoboxFilter';

const InfoboxEdit = () => {
  return (
    <div className='grid-2'>
      <div>
        {/* Contact Form */}

        <InfoboxForm />
      </div>
      <div>
        <InfoboxFilter />
        <Infoboxes />
      </div>
    </div>
  );
};

export default InfoboxEdit;
