import React, { Fragment, useContext } from 'react';
import InfoshotContext from '../../context/infoshot/infoshotContext';

const Infoshots = () => {
  const infoshotContext = useContext(InfoshotContext);

  const { infoshots } = infoshotContext;

  return (
    <Fragment>
      {infoshots.map(infoshot => (
        <h3>{infoshot.subjectQuestion}</h3>
      ))}
    </Fragment>
  );
};

export default Infoshots;
