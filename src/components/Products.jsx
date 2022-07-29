import React from 'react';

const Products = ({ products }) => {
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
            <button className="product__button" type="button">
              Payment
            </button>
          </article>
        </div>
      ))}
    </div>
  );
};

export default Products;
