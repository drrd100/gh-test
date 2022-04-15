import React,{useEffect,useState} from 'react'
import { Swiper, SwiperSlide,  } from 'swiper/react';
import { EffectCoverflow } from "swiper";
import axios from 'axios';
import 'swiper/css';
import '../css/reset.css';


export default function CarSlide() {
  const [car , setCar] = useState(null);

  useEffect(() =>{
    const carApi = async () => {
      await axios.get('/carList')
      .then((res) => {
        setCar(res.data)
      })
    }
    carApi();
  },[]);

  return (
    <>
    <Swiper
      effect={"coverflow"}
      modules={[EffectCoverflow]}
      spaceBetween={0}
      centeredSlides={true}
      slidesPerView={1.5}
      loop={true}
      initialSlide={3}
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
    >
      {car && car.map((car) => (
        <SwiperSlide key={car.id}>
          <div className="carItem">
            <div className="thumb">
                <span className="discount">{car.discount} SALE</span>
                <img src={process.env.PUBLIC_URL + car.imageURL} alt=""/>
            </div>
            <div className="desc">
                <p>{car.name}</p>
                <div className="spec">
                    <span>{car.manufacture}</span>
                    <span>일 {car.price}원</span>
                </div>
            </div>
            <div className="reserve">
                <button>예약하기</button>
            </div>
        </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  )
}
