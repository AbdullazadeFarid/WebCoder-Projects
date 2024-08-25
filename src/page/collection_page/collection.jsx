import React, { useEffect, useState } from 'react'
import "./collection.css"
import { useNavigate } from 'react-router'

const Collectionpage = () => {
    const nav = useNavigate()

    const [collection, setCollection] = useState([]);

    useEffect(() => {
      const fetchDataCollection = async () => {
        try {
          const res = await fetch("http://localhost:3004/collections");
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          const data = await res.json();
          setCollection(data);

        } catch (error) {
          console.error("Ошибка при выполнении запроса:", error);
        }
      };

      fetchDataCollection();


    }, []);



    const collectionClick=(coltitle)=>{
        nav(`/filterProducts/`, { state: { coltitle } });
    }



  return (

    <>

       <div className='cont'>

        <div className='collection'>
        <div className='collection_title'>
            <h2 className='collection_title_tit'>Home</h2>
            <div className='collection_title_line'></div>
            <h2 className='collection_title_search'>Collections</h2>
          </div>

            <div className="collection_main">
                <div className="collection_main_title">

                <h2 className='collection_main_title_collect'>COLLECTIONS</h2>
                <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.</p>
                </div>

                <div className="collection_main_products">

                    {
                        collection.map((item)=>{
                            return(
                                <div onClick={(()=>{
                                    collectionClick(item.colTitle)
                                })} key={item.id} className='collection_main_products_items'>
                                    <img src={item.image} alt="" />
                                    <p className='collection_main_products_items_name'>{item.colTitle}</p>
                                </div>
                            )
                        })
                    }

                </div>

            </div>

        </div>

       </div>
    </>
  )
}

export default Collectionpage