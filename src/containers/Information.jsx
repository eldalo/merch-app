import React from 'react';
import { Link } from 'react-router-dom';

const Information = () => {
  return (
    <div className="information">
      <div className="information__content">
        <div className="information__head">
          <h2 className="information__title"></h2>
        </div>
        <div className="information__form">
          <form action="">
            <input
              className="information__input"
              type="text"
              placeholder="Fullname"
              name="name"
            />
            <input
              className="information__input"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              className="information__input"
              type="text"
              placeholder="Address"
              name="address"
            />
            <input
              className="information__input"
              type="text"
              placeholder="Apto"
              name="apto"
            />
            <input
              className="information__input"
              type="text"
              placeholder="city"
              name="city"
            />
            <input
              className="information__input"
              type="text"
              placeholder="Country"
              name="country"
            />
            <input
              className="information__input"
              type="text"
              placeholder="Estado"
              name="state"
            />
            <input
              className="information__input"
              type="text"
              placeholder="Code"
              name="cp"
            />
            <input
              className="information__input"
              type="phone"
              placeholder="Phone"
              name="phone"
            />
          </form>
        </div>
        <div className="information__action">
          <Link
            to="/checkout"
            className="information__button information__button-back"
          >
            <i className="fa-solid fa-chevron-left" />
            Back to Checkout
          </Link>
          <Link to="/checkout/payment" className="information__button">
            Payment
            <i className="fa-solid fa-chevron-right" />
          </Link>
        </div>
      </div>
      <div className="information__sidebar">
        <h3 className="information__subtitle">Order</h3>
        <div className="information__product">
          <h4 className="information__product-title">
            ITEM Name <span>$ 10</span>
          </h4>
        </div>
        <div className="information__product">
          <h4 className="information__product-title">
            ITEM Name <span>$ 10</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Information;
