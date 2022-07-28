import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <section className="main">
        <Outlet />
      </section>
      <Footer />
    </>
  )
};

export default Layout;
