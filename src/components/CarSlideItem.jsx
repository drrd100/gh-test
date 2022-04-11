import React from 'react'


export default function CarSlideItem() {
  return (
      <>
        <div className="carItem">
            <div className="thumb">
                <span className="discount">30% SALE</span>
                <img src={process.env.PUBLIC_URL + "/images/car-tucson.png"} alt=""/>
            </div>
            <div className="desc">
                <p>올 뉴 투싼</p>
                <div className="spec">
                    <span>17년식</span>
                    <span>일 78,000원 ~</span>
                </div>
            </div>
            <div className="reserve">
                <button>예약하기</button>
            </div>
        </div>
      </>
  )
}
