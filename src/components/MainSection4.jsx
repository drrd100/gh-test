import React from 'react'

export default function MainSection4() {
  return (
    <div className="section">
        <div className="instargarm">
            <div className="inner">
                <div className="contents">
                    <p>#코로나19 #인스타그램 #이벤트 #참여하고<br className="m-br" /> #최대 60% 할인 받고 #코로나19 #극복하자</p>
                    <div className="phone-image">
                        <img src={process.env.PUBLIC_URL + "/images/mock_phone.png"} alt=""/>
                    </div>
                    <div className="event">
                        <div className="title">
                            <img src={process.env.PUBLIC_URL + "/images/logo_insta.png"} alt=""/>
                            <p>타고 #000 갑니다.</p>
                        </div>
                        <div className="item">
                            <div>
                                <div className="icon"><img src={process.env.PUBLIC_URL + "/images/icon-insta.png"} alt=""/></div>
                                <span>#팔로우 이벤트</span>
                            </div>
                            <p>인스타그램 팔로우하고 게시물 공유하면 이벤트 참여완료 </p>
                        </div>
                        <div className="item">
                            <div>
                                <div className="icon"><img src={process.env.PUBLIC_URL + "/images/icon-insta.png"} alt=""/></div>
                                <span>#해쉬태그 이벤트</span>
                            </div>
                            <p>해쉬태크에 #쏘카 #00코로나정복 #마스크는 백신 태그하고 이벤트 참여 </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
