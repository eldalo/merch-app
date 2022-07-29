import React from 'react';

import Products from '@components/Products';
import state from '@mock/state';

const Home = () => {
  return (
    <Products products={state.products} />
  );
};

export default Home;
