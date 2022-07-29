import React, { useContext } from 'react';

import AppContext from '@context/AppContext';

const Products = () => {
  const {
    state: { products },
    addToCart,
  } = useContext(AppContext);

  const handleAddToCart = (product) => () => {
    console.log('product', product);
    addToCart(product);
  };

  return (
    <div className="products">
      {products?.map((product, key) => (
        <div key={`product-${key}`} className="product">
          <img
            className="product__img"
            src={product?.image}
            alt={product?.title}
          />
          <article className="product__info">
            <h2 className="product__title">
              {product?.title} <span>$ {product?.price}</span>
            </h2>
            <p className="product__description">{product?.description}</p>
            <button
              className="product__button"
              type="button"
              onClick={handleAddToCart(product)}
            >
              Payment
            </button>
          </article>
        </div>
      ))}
    </div>
  );
};

export default Products;
