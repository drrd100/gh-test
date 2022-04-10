import React from 'react'

export default function MainSection3() {
  return (
    <div className="section section3">
        <div className="kakao">
            <div className="inner">
                <div className="text">
                    <div className="title">
                        <img src="/images/logo.png" alt=""/>
                        <p>카카오톡 플러스 친구 추가하고 시크릿 쿠폰 받자</p>
                    </div>
                    <div className="desc">
                        <span>QR코드 찍고 카카오톡 플러스 친구추가</span>
                        <p>카카오톡 플러스 친구추가하면<br />누구나 5,000원 시크릿 쿠폰 발급</p>
                        <div className="kakao-qr">
                            <img src="/images/kakao-qr.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="kakao-bg">
                    <ul>
                        <li><img src="/images/kakao_coupon.png" alt=""/></li>
                        <li><img src="/images/kakao_img1.png" alt=""/></li>
                        <li><img src="/images/kakao_img2.png" alt=""/></li>
                        <li><img src="/images/kakao_img3.png" alt=""/></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
