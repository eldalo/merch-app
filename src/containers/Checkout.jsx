import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__content">
        <h2 className="checkout__title">List products</h2>
        <div className="checkout__items">
          <div className="checkout__item">
            <h4 className="checkout__item-title">
              Item name <span>$ 10</span>
            </h4>
            <button type="button" className="checkout__button">
              <i className="fa-solid fa-trash-can" /> Remove
            </button>
          </div>
        </div>
      </div>
      <div className="checkout__sidebar">
        <h3 className="checkout__subtitle">
          Order Total: <span>$ 10</span>
        </h3>
        <Link to="/checkout/information" className="checkout__button">
          Next Step
          <i className="fa-solid fa-chevron-right" />
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
