
// import { Link } from 'react-router-dom';
// import React, { useContext, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import "./products.css";
// import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
// import { SearchContext } from '../../context/context';

// const Products = ({ products, less }) => {
//   const { userinfo, setUserinfo } = useContext(SearchContext);
//   console.log(userinfo);

//   useEffect(() => {
//     const userlocainfo = localStorage.getItem('userinfo');
//     if (userlocainfo) {
//       setUserinfo(JSON.parse(userlocainfo));
//     }
//   }, [setUserinfo]);

//   const handleIconClick = async (e, product) => {
//     e.preventDefault();
//     e.stopPropagation();

//     const userId = userinfo?.id;

//     if (!userId) return console.error("No active user");

//     const updatedWishlist = [...(userinfo?.wishlist || [])];

//     if (!updatedWishlist.some(item => item.id === product.id)) {
//       updatedWishlist.push(product);
//     } else {
//       const index = updatedWishlist.findIndex(item => item.id === product.id);
//       if (index > -1) {
//         updatedWishlist.splice(index, 1);
//       }
//     }

//     setUserinfo(prev => ({ ...prev, wishlist: updatedWishlist }));

//     try {
//       const res = await fetch(`http://localhost:3004/users/${userId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ ...userinfo, wishlist: updatedWishlist }),
//       });

//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }

//       localStorage.setItem('userinfo', JSON.stringify({ ...userinfo, wishlist: updatedWishlist }));

//     } catch (error) {
//       console.error('Error updating wishlist:', error);
//     }
//   };

//   const firstTwenty = products.slice(0, 20);

//   const [data, setdata] = useState([]);
//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const res = await fetch("http://localhost:3004/users");
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         const data = await res.json();
//         setdata(data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     getData();
//   }, []);

//   return (
//     <div className='products-container'>
//       {less
//         ? firstTwenty.length > 0 && firstTwenty.map(product => (
//           <Link
//             to={`/Filterproducts/info/${product.id}`}
//             key={product.id}
//             className='products'
//           >
//             <div className='products_top'>
//               <img src={product.image} alt={product.title} />
//               <div
//                 className='products_top_heart'
//                 onClick={(e) => handleIconClick(e, product)}
//               >
//                 {userinfo?.wishlist?.some(item => item.id === product.id) ? (
//                   <MdFavorite size="30px" />
//                 ) : (
//                   <MdFavoriteBorder size="30px" />
//                 )}
//               </div>
//             </div>

//             <div className='products_bottom'>
//               <h4 className='products_bottom_title'>{product.title}</h4>
//               <p className='products_bottom_price'>{product.price}$</p>
//             </div>
//           </Link>
//         ))
//         : products.length > 0 && products.map(product => (
//           <Link
//             to={`/Filterproducts/info/${product.id}`}
//             key={product.id}
//             className='products'
//           >
//             <div className='products_top'>
//               <img src={product.image} alt={product.title} />
//               <div
//                 className='products_top_heart'
//                 onClick={(e) => handleIconClick(e, product)}
//               >
//                 {userinfo?.wishlist?.some(item => item.id === product.id) ? (
//                   <MdFavorite size="30px" />
//                 ) : (
//                   <MdFavoriteBorder size="30px" />
//                 )}
//               </div>
//             </div>

//             <div className='products_bottom'>
//               <h4 className='products_bottom_title'>{product.title}</h4>
//               <p className='products_bottom_price'>{product.price}$</p>
//             </div>
//           </Link>
//         ))
//       }
//     </div>
//   );
// };


// export default Products;





import { Link } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "./products.css";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { SearchContext } from '../../context/context';

const Products = ({ products, less }) => {
  const { userinfo, setUserinfo } = useContext(SearchContext);

  useEffect(() => {
    const userlocainfo = localStorage.getItem('userinfo');
    if (userlocainfo) {
      setUserinfo(JSON.parse(userlocainfo));
    }
  }, [setUserinfo]);

  const handleIconClick = async (e, product) => {
    e.preventDefault();
    e.stopPropagation();

    const userId = userinfo?.id;
    if (!userId) return console.error("No active user");

    const updatedWishlist = userinfo?.wishlist ? [...userinfo.wishlist] : [];
    const isProductInWishlist = updatedWishlist.find(item => item.id === product.id);

    if (isProductInWishlist) {
      const index = updatedWishlist.indexOf(isProductInWishlist);
      updatedWishlist.splice(index, 1);
    } else {
      updatedWishlist.push(product);
    }

    setUserinfo(prev => ({ ...prev, wishlist: updatedWishlist }));

    try {
      const res = await fetch(`http://localhost:3004/users/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...userinfo, wishlist: updatedWishlist }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
    } catch (error) {
      console.error('Error updating wishlist:', error);
    }
  };

  const firstTwenty = products.slice(0, 20);

  return (
    <div className='products-container'>
      {(less ? firstTwenty : products).map(product => (
        <Link
          to={`/Filterproducts/info/${product.id}`}
          key={product.id}
          className='products'
        >
          <div className='products_top'>
            <img src={product.image} alt={product.title} />
            <div
              className='products_top_heart'
              onClick={(e) => handleIconClick(e, product)}
            >
              {userinfo?.wishlist?.find(item => item.id === product.id) ? (
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
      ))}
    </div>
  );
};


export default Products;
