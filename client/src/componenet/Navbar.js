import React from 'react';

const Navbar = () => {
  return (
    <nav className="custom-navbar fixed-top">
      <div className="custom-navbar-container">
        <a className="custom-navbar-brand" href="#" style={{position:'relative',right:'15px'}}>
          Blood_Bank Logo
        </a>
        <div className="custom-navbar-buttons">
          <a className="custom-btn custom-btn-info" href="/login" style={{position:'relative',right:'-276px'}}>
            Login
          </a>
          <a className="custom-btn custom-btn-warning" href="/signup" style={{position:'relative',right:'-276px'}}>
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar

