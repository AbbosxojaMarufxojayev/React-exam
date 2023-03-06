import React from 'react'
import "./Banner.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function Banner() {
  return (
    <div className='container banner'>
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://assets.asaxiy.uz/uploads/banner/desktop/63f77a416ab58.jpg.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://assets.asaxiy.uz/uploads/banner/desktop/63dcb4f5730ab.jpg.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://assets.asaxiy.uz/uploads/banner/desktop/63f77a707e392.jpg.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://assets.asaxiy.uz/uploads/banner/desktop/63f9ed3711d6c.jpg.webp" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner