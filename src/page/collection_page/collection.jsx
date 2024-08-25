
import React, { useEffect, useState, useRef } from 'react';
import './collection.css';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const Collectionpage = ({ type }) => {
  const swiperRef = useRef(null);
  const nav = useNavigate();
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

  const collectionClick = (coltitle) => {
    nav(`/filterProducts/`, { state: { coltitle } });
  };

  return (
    <>
      {type ? (

        //SWIPER
        <>
          <Swiper
            ref={swiperRef} // Привязываем Swiper к рефу
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              '@1.50': {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {collection.map(slide => (
              <SwiperSlide key={slide.id}>
                <div
                  onClick={() => collectionClick(slide.colTitle)}
                  className="slide_products"
                >
                  <img src={slide.image} alt={slide.image} />
                  <div className='blur'>
                    {slide.colTitle}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className='next_prev'>
            <span
              className='icon'
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825L9.425 14.6L8 16Z" fill="#EEF0F2" />
              </svg>
            </span>

            <span
              className='icon'
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0L16 8L8 16L6.575 14.6L12.175 9H0V7H12.175L6.575 1.4L8 0Z" fill="#EEF0F2" />
              </svg>
            </span>
          </div>

          <div className='line'></div>
        </>

        ///
      ) : (

        /// PAGE 
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
                <p>
                  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta
                  nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.
                </p>
              </div>

              <div className="collection_main_products">
                {collection.map((item) => (
                  <div
                    onClick={() => collectionClick(item.colTitle)}
                    key={item.id}
                    className='collection_main_products_items'
                  >
                    <img src={item.image} alt={item.colTitle} />
                    <p className='collection_main_products_items_name'>{item.colTitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Collectionpage;
