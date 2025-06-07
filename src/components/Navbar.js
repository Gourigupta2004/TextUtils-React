import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'; 

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg shadow bg-${props.theme || props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-primary" type="submit">Search</button>
          </form> */}

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} me-3`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" value="" id="checkNativeSwitch" switch />
            <label className="form-check-label" htmlFor="checkNativeSwitch">
              Enable Dark Mode
            </label>
          </div>

          <div className="d-flex align-items-center gap-2">
            <button onClick={() => props.changeTheme('warning')} className="btn rounded-circle" style={{ backgroundColor: '#eab308', height: '20px', width: '20px' }}></button>
            <button onClick={() => props.changeTheme('info')} className="btn rounded-circle" style={{ backgroundColor: '#0ea5e9', height: '20px', width: '20px' }}></button>
            <button onClick={() => props.changeTheme('success')} className="btn rounded-circle" style={{ backgroundColor: '#22c55e', height: '20px', width: '20px' }}></button>
            <button onClick={() => props.changeTheme('danger')} className="btn rounded-circle" style={{ backgroundColor: '#ef4444', height: '20px', width: '20px' }}></button>
          </div>

        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About"
};