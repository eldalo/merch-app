import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@assets/styles/styles.scss';

import Layout from '@components/Layout';
import Home from '@containers/Home';
import Checkout from '@containers/Checkout';
import Information from '@containers/Information';
import Payment from '@containers/Payment';
import Success from '@containers/Success';
import NotFound from '@containers/NotFound';

import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="/checkout/information" element={<Information />} />
            <Route path="/checkout/payment" element={<Payment />} />
            <Route path="/checkout/success" element={<Success />} />
            <Route element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
