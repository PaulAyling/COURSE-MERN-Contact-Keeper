import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon}> {title}</i>
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/myinfoboxes'>My Infoboxes</Link>
        </li>
        <li>
          <Link to='/infoboxes'>See Infoboxes</Link>
        </li>
        <li>
          <Link to='/infoboxedit'>Edit Infoboxes</Link>
        </li>
      </ul>
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
