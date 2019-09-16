import React, { useContext, useRef, useEffect } from 'react';
import InfoboxContext from '../../context/infobox/infoboxContext';

const InfoboxFilter = () => {
  const infoboxContext = useContext(InfoboxContext);
  const text = useRef('');

  const { filterInfoboxes, clearFilterInfobox, filtered } = infoboxContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterInfoboxes(e.target.value);
    } else {
      clearFilterInfobox();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Infoboxes....'
        onChange={onChange}
      />
    </form>
  );
};

export default InfoboxFilter;
