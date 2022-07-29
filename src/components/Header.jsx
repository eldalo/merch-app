import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '@context/AppContext';

const Header = () => {
  const { state: { cart } } = useContext(AppContext);
  
  return (
    <>
      <header className="header">
        <Link to="/" className="header__title">
          Merch
        </Link>
        <nav className="header__nav">
          <Link to="/checkout" className="header__link">
            <i className="fa-solid fa-basket-shopping" />
            {cart.length > 0 && (
              <span className="header__cart">{cart.length}</span>
            )}
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
