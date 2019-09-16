import React, { useState, useContext, useEffect } from 'react';
import InfoboxContext from '../../context/infobox/infoboxContext';

const InfoboxForm = () => {
  const infoboxContext = useContext(InfoboxContext);

  const {
    addInfobox,
    updateInfobox,
    current,
    clearCurrentInfobox
  } = infoboxContext;

  useEffect(() => {
    if (current !== null) {
      setInfobox(current);
    } else {
      setInfobox({
        label: '',
        linkUrl: ''
      });
    }
  }, [infoboxContext, current]);

  const [infobox, setInfobox] = useState({
    label: '',
    linkUrl: ''
  });

  const { label, linkUrl } = infobox;

  const onChange = e =>
    setInfobox({ ...infobox, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addInfobox(infobox);
    } else {
      updateInfobox(infobox);
    }

    setInfobox({
      label: '',
      linkUrl: ''
    });
  };

  const clearAll = () => {
    clearCurrentInfobox();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>{current ? 'Edit Links' : 'Add Links'}</h2>
      <input
        type='text'
        placeholder=''
        name='label'
        value={label}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='www.....'
        name='linkUrl'
        value={linkUrl}
        onChange={onChange}
      />
      <div>
        <input
          type='submit'
          value={current ? 'Update Links' : 'Add Links'}
          className='btn btn-block btn-primary'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default InfoboxForm;
