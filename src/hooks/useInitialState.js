import { useState } from 'react';
import initialState from '@mok/state';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.card, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(({ id }) => id === payload.id),
    });
  };

  return { addToCart, removeFromCart, state };
};

export default useInitialState;
