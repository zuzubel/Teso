import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="company-header">
      <div className="header-content">
        <div className="company-name">
          <Link to="/" className="logo-link">
            <h1>TESO</h1>
          </Link>
        </div>
        <Navigation />

        <p className="phone-number">+420 123 456 789</p>
      </div>
    </header>
  );
};

export default Header;
