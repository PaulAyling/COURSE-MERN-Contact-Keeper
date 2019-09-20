import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';
import InfoboxContext from '../../context/infobox/infoboxContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  const infoboxContext = useContext(InfoboxContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;
  const { clearInfobox } = infoboxContext;

  const onLogout = () => {
    logout();
    clearContacts();
    clearInfobox();
  };

  const authlinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt'>
            {' '}
            <span className='hide-sm'>Logout</span>
          </i>
        </a>
      </li>
      <li>
        <Link to='/infoboxedit'>MyInfoboxes</Link>
      </li>
    </Fragment>
  );

  const guestlinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon}> {title}</i>
      </h1>
      <ul>{isAuthenticated ? authlinks : guestlinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'INFOSHOT',
  icon: 'fas fa-bullseye'
};

export default Navbar;
