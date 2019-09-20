import React, { Fragment, useContext, useEffect } from 'react';
import InfoboxContext from '../../context/infobox/infoboxContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import InfoboxItem from '../infobox/infoboxItem';
import Spinner from '../layout/Spinner';

const Infoboxes = () => {
  const infoboxContext = useContext(InfoboxContext);

  const { infoboxes, filtered, getInfoboxes, loading } = infoboxContext;
  useEffect(() => {
    getInfoboxes();
    // eslint-disable-next-line
  }, []);
  if (infoboxes !== null && infoboxes.length === 0 && !loading) {
    return <h4>Please Add a contact</h4>;
  }

  return (
    <Fragment>
      {infoboxes !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? 
              filtered.map(infoshot => (
                <CSSTransition
                  key={infoshot._id}
                  timeout={500}
                  classNames='item'>
                  <InfoboxItem infoshot={infoshot} />
                </CSSTransition>
              ))
            : infoboxes.map(infoshot => (
                <CSSTransition
                  key={infoshot._id}
                  timeout={500}
                  classNames='item'>
                  <InfoboxItem infoshot={infoshot} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Infoboxes;
