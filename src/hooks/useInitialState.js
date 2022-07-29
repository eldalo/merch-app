import { useState } from 'react';
import initialState from '@mock/state';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    console.log('payload', payload);
    console.log('init state', state);
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
    console.log('end state', state);
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(({ id }) => id !== payload.id),
    });
  };

  return { addToCart, removeFromCart, state };
};

export default useInitialState;
