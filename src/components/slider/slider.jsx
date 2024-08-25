

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';
import { Pagination } from 'swiper/modules';

export default function Slider({ slides }) {
  const swiperRef = useRef(null); // Создаем реф для управления Swiper
  

  return (
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
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>

            <div className="slide_products">
              <img src={slide.image} alt={slide.image} />
              <div className='blur'>
                {slide.colTitle
                }
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

      <div className='line'>

      </div>


    </>
  );
}
