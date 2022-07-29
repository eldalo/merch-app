import React from 'react';
import state from '@mock/state';

import Products from '@components/Products';

const Home = () => {
  console.log(state);
  return (
    <Products products={state.products} />
  );
};

export default Home;
