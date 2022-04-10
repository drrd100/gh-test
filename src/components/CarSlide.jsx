import React from 'react'
import { Swiper, SwiperSlide,  } from 'swiper/react';
import { EffectCoverflow } from "swiper";
import 'swiper/css';
import CarSlideItem from './CarSlideItem';
import '../css/reset.css';


export default function CarSlide() {
  return (
    <Swiper
      effect={"coverflow"}
      modules={[EffectCoverflow]}
      spaceBetween={0}
      centeredSlides={true}
      slidesPerView={1.5}
      loop={true}
      coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: false,
      }}
      breakpoints={{
        768: {
            slidesPerView: 3,
            spaceBetween: 0,
            
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <CarSlideItem/>      
      </SwiperSlide>
      <SwiperSlide>
        <CarSlideItem />
      </SwiperSlide>
      <SwiperSlide>
        <CarSlideItem />
      </SwiperSlide>
      <SwiperSlide>
        <CarSlideItem />
      </SwiperSlide>
      <SwiperSlide>
        <CarSlideItem />
      </SwiperSlide>
      <SwiperSlide>
        <CarSlideItem />
      </SwiperSlide>
    </Swiper>
  )
}
