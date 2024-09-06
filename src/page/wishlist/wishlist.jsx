

import React, { useContext, useEffect, useState } from 'react';
import "./wishlist.css";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { SearchContext } from '../../context/context';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const [data, setData] = useState([]);
    const [matchingItems, setMatchingItems] = useState([]);
    const { userinfo, setUserinfo, activeuser } = useContext(SearchContext);
    console.log(userinfo);


    useEffect(() => {
        const storedUserInfo = localStorage.getItem('userinfo'); //burada localstorageden hal hazirda olan userin melumatlarin gotutuk
        // console.log(storedUserInfo);

        if (storedUserInfo) { //eger akriv istifadeci varsa serte daxil olur
            setUserinfo(JSON.parse(storedUserInfo)); // burada localstorageden goturduyumuz melumatlari otutuk obyekt sekilinde userinfo ya
        }
    }, []);

    useEffect(() => {
        const fetchDataAbout = async () => {
            try {
                const res = await fetch("http://localhost:3004/products");
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchDataAbout();
    }, []);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("http://localhost:3004/users");
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const users = await res.json();
                const currentUser = users.find(user => user.id === userinfo?.id); // userler ile hal hazirki aktiv uzerin id sin yoxlayiriq true se eger kecir ifdeki serti isletmeye
                if (currentUser) {
                    // Фильтрация товаров, которые находятся в wishlist пользователя
                    const wishlistItems = data.filter(item => currentUser.wishlist.some(wishItem => wishItem.id === item.id));// prodctsa fetch atib onu data ya menimsedmisik indi ise.datani filter edib icinde eger her hansi element varsaa
                    setMatchingItems(wishlistItems);  // eger her hansi element varsa matchingItems buna otutuk  bu ise bizim wishlistimizdi
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        getData();
    }, [data, userinfo]);


    const click = async (id) => {
      try {
          if (!userinfo?.id) {
              console.error('Active user ID is not defined');
              return;
          }

          const updatedWishlist = userinfo.wishlist.filter(item => item.id !== id); // burdaklik etdigde silmek ucundu .clickledikde id oturururk.userinfo.wishlist i filter ele ve !==id o demekdiki sil onu
          // console.log(updatedWishlist);

          setUserinfo(prev => ({ ...prev, wishlist: updatedWishlist }));  // bu bizew userinfo nu yenilemek ucundu .spred ile evvelki melumat ad soyad mail ve sair saxlayir yalniz wishlisti yenileyir

          // Отправьте PUT-запрос для обновления пользователя на сервере
          await fetch(`http://localhost:3004/users/${userinfo.id}`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ ...userinfo, wishlist: updatedWishlist }),
          });


          // Обновите matchingItems для отображения измененного wishlist
          setMatchingItems(prev => prev.filter(item => item.id !== id));
      } catch (error) {
          console.error('Error updating wishlist:', error);
      }
  };


    return (
        <div className='wishlist'>
            {matchingItems.length > 0 ? (
                matchingItems.map((item) => (
                    <div
                     key={item.id} className='wishlist_cont'>
                        <div className='wishlist_cont_pr'>
                            <div className='wishlist_cont_pr_products'>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className='wishlist_cont_pr_info'>
                                <p className='wishlist_cont_pr_info_title'>{item.title}</p>
                                <p className='wishlist_cont_pr_info_price'>{item.price}$</p>
                            </div>
                        </div>
                        <MdFavorite
                            className='wishlist_cont_pr_fav'
                            onClick={() => click(item.id)}
                            size="24px"
                            color='rgba(184, 146, 106, 1)'
                        />
                    </div>
                ))
            ) : (
                <p>No items in wishlist</p>
            )}
        </div>
    );
}

export default Wishlist;
