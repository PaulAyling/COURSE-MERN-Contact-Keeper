import React, { Fragment, useContext } from 'react';
import InfoboxContext from '../../context/infobox/infoboxContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import InfoboxItem from '../infobox/infoboxItem';

const Infoboxes = () => {
  const infoboxContext = useContext(InfoboxContext);

  const { infoboxes, filtered } = infoboxContext;

  if (infoboxes.length === 0) {
    return <h4>Please Add a contact</h4>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(infobox => (
              <CSSTransition key={infobox.id} timeout={500} classNames='item'>
                <InfoboxItem infobox={infobox} />
              </CSSTransition>
            ))
          : infoboxes.map(infobox => (
              <CSSTransition key={infobox.id} timeout={500} classNames='item'>
                <InfoboxItem infobox={infobox} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Infoboxes;
