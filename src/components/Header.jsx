import React from 'react';

const Header = () => {
  return (
    <>
      <header className="header">
        <h1 className="header__title">Merch</h1>
        <nav className="header__nav">
          <a className="header__link" href="/checkout">
            Checkout
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
