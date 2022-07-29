import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/" className="header__title">
          Merch
        </Link>
        <nav className="header__nav">
          <Link to="/checkout" className="header__link">
            <i className="fa-solid fa-basket-shopping" />
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
