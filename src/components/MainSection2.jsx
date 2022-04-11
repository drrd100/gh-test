import React from 'react'
import CarSlide from './CarSlide';

export default function MainSection2() {
  return (
    <div className="section section2">
        <div className="lineup">
            <div className="inner">
                <div className="title">
                    <img src={process.env.PUBLIC_URL + "/images/lineup-title.png"} alt=""/>
                    <div>
                        <img src={process.env.PUBLIC_URL + "/images/lineup-title-logo.png"} alt=""/>
                        <p>가 준비한 차박전용</p>
                        <span>LINE UP</span>
                    </div>
                </div>
                <div className="swiper carList">
                    <CarSlide/>
                </div>
            </div>
        </div>
    </div>
  )
}
