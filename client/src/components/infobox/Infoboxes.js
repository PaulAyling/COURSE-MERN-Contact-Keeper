import React, { Fragment, useContext } from 'react';
import InfoboxContext from '../../context/infobox/infoboxContext';
import InfoboxItem from '../infobox/infoboxItem';

const Infoboxes = () => {
  const infoboxContext = useContext(InfoboxContext);

  const { infoboxes } = infoboxContext;

  return (
    <Fragment>
      {infoboxes.map(infobox => (
          <InfoboxItem key={infobox.id} infobox={infobox} />
        ))}
    </Fragment>
  );
};

export default Infoboxes;
