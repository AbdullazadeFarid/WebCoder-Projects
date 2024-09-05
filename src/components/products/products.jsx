

import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./products.css";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const Products = ({ products,less }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });


  const handleIconClick = (e, productId) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(productId);


    let updatedFavorites;
    if (favorites.includes(productId)) {
      updatedFavorites = favorites.filter(id => id !== productId);
    } else {
      updatedFavorites = [...favorites, productId];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };
      const firstwenty = products.slice(0,20)
      console.log(firstwenty);


  return (
    <div className='products-container'>

      {
        less
        ?
        firstwenty.length > 0 && firstwenty.map(product => (
          <Link
            to={`/Filterproducts/info/${product.id}`}
            key={product.id}
            className='products'
          >
            <div className='products_top'>
              <img src={product.image} alt={product.title} />
              <div
                className='products_top_heart'
                onClick={(e) => handleIconClick(e, product.id)}
              >
                {favorites.includes(product.id) ? (
                  <MdFavorite size="30px" />
                ) : (
                  <MdFavoriteBorder size="30px" />
                )}
              </div>
            </div>

            <div className='products_bottom'>
              <h4 className='products_bottom_title'>{product.title}</h4>
              <p className='products_bottom_price'>{product.price}$</p>
            </div>
          </Link>
        ))



        :

 products.length > 0 && products.map(product => (
  <Link
    to={`/Filterproducts/info/${product.id}`}
    key={product.id}
    className='products'
  >
    <div className='products_top'>
      <img src={product.image} alt={product.title} />
      <div
        className='products_top_heart'
        onClick={(e) => handleIconClick(e, product.id)}
      >
        {favorites.includes(product.id) ? (
          <MdFavorite size="30px" />
        ) : (
          <MdFavoriteBorder size="30px" />
        )}
      </div>
    </div>

    <div className='products_bottom'>
      <h4 className='products_bottom_title'>{product.title}</h4>
      <p className='products_bottom_price'>{product.price}$</p>
    </div>
  </Link>
))

      }


    </div>
  );
};

export default Products;























//  {products.length > 0 && products.map(product => (
//   <Link
//     to={`/Filterproducts/info/${product.id}`}
//     key={product.id}
//     className='products'
//   >
//     <div className='products_top'>
//       <img src={product.image} alt={product.title} />
//       <div
//         className='products_top_heart'
//         onClick={(e) => handleIconClick(e, product.id)}
//       >
//         {favorites.includes(product.id) ? (
//           <MdFavorite size="30px" />
//         ) : (
//           <MdFavoriteBorder size="30px" />
//         )}
//       </div>
//     </div>

//     <div className='products_bottom'>
//       <h4 className='products_bottom_title'>{product.title}</h4>
//       <p className='products_bottom_price'>{product.price}$</p>
//     </div>
//   </Link>
// ))}