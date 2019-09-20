import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import InfoboxContext from '../../context/infobox/infoboxContext';

const InfoboxItem = ({ infoshot }) => {
  const infoboxContext = useContext(InfoboxContext);

  const {
    deleteInfobox,
    setCurrentInfobox,
    clearCurrentInfobox
  } = infoboxContext;

  const { _id, label, linkUrl } = infoshot;

  const onDelete = () => {
    deleteInfobox(_id);
    clearCurrentInfobox();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        <a href={linkUrl}>{label} </a>
      </h3>
      <span style={{ float: 'right' }} className={'badge badge-primary'}></span>

      <p>
        <button
          className='btn btn-dark dbt-sm'
          onClick={() => setCurrentInfobox(infoshot)}>
          Edit
        </button>
        <button className='btn btn-danger dbt-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

InfoboxItem.protoTypes = {
  infobox: PropTypes.object.isRequired
};

export default InfoboxItem;
