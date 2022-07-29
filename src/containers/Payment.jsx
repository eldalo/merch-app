import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
  return (
    <div className="payment">
      <div className="payment__content">
        <h2 className="payment__title">Resume</h2>
        <Link to="/checkout/information" className="payment__button">
        <i className="fa-solid fa-chevron-left" />
          Back to Information
        </Link>
        <button type="button" className="payment__button">
          Payment with Paypal
        </button>
      </div>
      <div className="payment__sidebar"></div>
    </div>
  );
};

export default Payment;
