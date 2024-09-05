import React, { useEffect, useState } from 'react'
import "./wishlist.css"
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const Wishlist = () => {

    const [data, setData] = useState([])
    const [matchingItems, setMatchingItems] = useState([]);


    useEffect(() => {
        const fetchDataAbout = async () => {
          try {
            const res = await fetch("http://localhost:3004/products");
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            // console.log(data);
            setData(data);
          } catch (error) {
          }
        };

        fetchDataAbout();
      }, []);
      useEffect(() => {
        const local = JSON.parse(localStorage.getItem("favorites") || "[]");

        const matches = data.filter(item => local.includes(item.id));
        setMatchingItems(matches);
    }, [data]);

    console.log(matchingItems);


    const click = (id) => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

        const updatedFavorites = favorites.filter(favId => favId !== id);

        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

        const updatedMatchingItems = matchingItems.filter(item => item.id !== id);
        setMatchingItems(updatedMatchingItems);

    }




  return (

    <>

    <div className='wishlist'>
        {
            matchingItems.map((item, index) => {
                return (
                    <>




               <div  className='wishlist_cont'>

                <div className='wishlist_cont_pr'>

                       <div className='wishlist_cont_pr_products'>
                            <img src={item.image} alt="" />

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

                    </>

                )

            })
        }
    </div>

    </>





  )
}

export default Wishlist