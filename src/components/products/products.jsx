
import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import "./products.css";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { SearchContext } from '../../context/context';

const Products = ({ products, less }) => {
  const { userinfo, setUserinfo } = useContext(SearchContext);
  const [wishlist, setWishlist] = useState([]); // İstifadəçinin wishlist-i üçün state

  // Komponent yüklənəndə localStorage-dan userinfo alırıq və state-i yeniləyirik
  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userinfo');
    if (storedUserInfo) {
      const userInfoFromStorage = JSON.parse(storedUserInfo);
      setUserinfo(userInfoFromStorage);
      setWishlist(userInfoFromStorage.wishlist || []); // localStorage-dan wishlist-i alırıq
    }
  }, [setUserinfo]);

  // İstifadəçi məlumatlarını serverdən fetch etmək
  useEffect(() => {
    const fetchUserInfo = async () => {
      if (userinfo?.id) {
        try {
          const res = await fetch(`http://localhost:3004/users/${userinfo.id}`);
          if (!res.ok) {
            throw new Error('Failed to fetch user data');
          }
          const user = await res.json();
          setUserinfo(user); // İstifadəçi məlumatlarını state-ə yazırıq
          setWishlist(user.wishlist || []); // İstifadəçinin wishlist-ini yeniləyirik
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserInfo(); // Komponent yüklənəndə istifadəçi məlumatlarını serverdən yükləyirik
  }, [userinfo?.id, setUserinfo]);

  // Favorite ikonuna klik edərkən wishlist-ə əlavə/silmə funksiyası
  const handleIconClick = async (e, product) => {
    e.preventDefault();
    e.stopPropagation();

    const userId = userinfo?.id;
    if (!userId) {
      return console.error("No active user"); // Əgər istifadəçi daxil olmayıbsa, bu xətanı göstər
    }

    // Mövcud wishlist-i kopyalayırıq
    const updatedWishlist = [...wishlist];
    const isProductInWishlist = updatedWishlist.find(item => item.id === product.id);

    if (isProductInWishlist) {
      const index = updatedWishlist.indexOf(isProductInWishlist);
      updatedWishlist.splice(index, 1); // Məhsulu wishlist-dən çıxarırıq
    } else {
      updatedWishlist.push(product); // Məhsulu wishlist-ə əlavə edirik
    }

    setWishlist(updatedWishlist); // Yenilənmiş wishlist-i state-də saxlayırıq

    // Yenilənmiş məlumatı serverə göndəririk
    try {
      const res = await fetch(`http://localhost:3004/users/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...userinfo, wishlist: updatedWishlist }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      // LocalStorage-ə yenilənmiş istifadəçi məlumatlarını yazırıq
      localStorage.setItem('userinfo', JSON.stringify({ ...userinfo, wishlist: updatedWishlist }));

    } catch (error) {
      console.error('Error updating wishlist:', error);
    }
  };

  // Əgər istifadəçi daxil olmayıbsa, xəbərdarlıq mesajı göstərə bilərik
  if (!userinfo) {
    return <p>No active user. Please log in to see your wishlist.</p>;
  }

  // İlk 20 məhsul üçün slicing edirik
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
              {/* Əgər məhsul istifadəçinin wishlist-indədirsə, aktiv ikon */}
              {wishlist.some(item => item.id === product.id) ? (
                <MdFavorite size="30px" color="red" />
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
