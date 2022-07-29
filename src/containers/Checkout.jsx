import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '@context/AppContext';

const Checkout = () => {
  const { state: { cart }, removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue?.price;
    const sum = cart?.reducer(reducer, 0);
    return sum;
  };

  return (
    <div className="checkout">
      <div className="checkout__content">
        <h2 className="checkout__title">
          {cart.length > 0 ? 'List products' : 'No products'}
        </h2>
        <div className="checkout__items">
          {cart?.map((item, key) => (
            <div key={`checkout-item-${key}`} className="checkout__item">
              <h4 className="checkout__item-title">
                {item?.title} <span>$ {item?.price}</span>
              </h4>
              <button
                type="button"
                className="checkout__button"
                onClick={handleRemove(item)}
              >
                <i className="fa-solid fa-trash-can" /> Remove
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="checkout__sidebar">
        {cart.length > 0 && (
          <>
            <h3 className="checkout__subtitle">
              Order Total: <span>$ {handleSumTotal()}</span>
            </h3>
            <Link to="/checkout/information" className="checkout__button">
              Next Step
              <i className="fa-solid fa-chevron-right" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
