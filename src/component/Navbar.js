import React from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
       {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
           <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/">Action</Link></li>
                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
              </ul>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"  style={{ color:props.mode===`dark`?`white`:`black`}}>  {props.mode === 'dark' ? 'Disable dark mode' : 'Enable dark mode'}</label>
          </div>
        </div>
        */}
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"  style={{ color:props.mode===`dark`?`white`:`black`}}>  {props.mode === 'dark' ? 'Disable dark mode' : 'Enable dark mode'}</label>
          </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: 'Navbar',
};
