import React, { useState,useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Aside() {
    const [showAside, setShowAside] = useState(false);
    const [deemed , setDeemed] = useState(false);
    const hamburgerBtn = useRef(null);

    const handleAside = () => {
        setShowAside(showAside => !showAside);
        setDeemed(deemed => !deemed)
        document.body.classList.toggle("scroll-stop");
    }

    const handleAsideGnb = () => {
        document.body.classList.remove("scroll-stop");
        setDeemed(deemed => !deemed)
        setShowAside(showAside => !showAside);
        hamburgerBtn.current.checked = false;
        
    }


  return (
      <>
        <label htmlFor="hamburger-menu" id="hamburger-menu-wrapper" >
              <input type="checkbox" id="hamburger-menu" onClick={handleAside} ref={hamburgerBtn}/>
            <span></span>
            <span></span>
            <span></span>
        </label>
        <div id="aside" className={showAside ? "asideOn" : null}>
            <div className="inner">
                <div className="top">
                    <div className="aside-logo"><img src="/images/logo.png" alt=""/></div>
                    <Link to="/login">로그인</Link>
                    <Link to="/register">회원가입</Link>
                </div>
                <ul className="asideMenu">
                    <li><a href="#Home" data-menuanchor="Home" className="asideMenuItem" onClick={handleAsideGnb} >Home</a></li>
                    <li><a href="#Lineup" data-menuanchor="Lineup" className="asideMenuItem" onClick={handleAsideGnb} >Line Up</a></li>
                    <li><a href="#Kakao" data-menuanchor="Kakao" className="asideMenuItem" onClick={handleAsideGnb} >Kakao Event</a></li>
                    <li><a href="#Instagram" data-menuanchor="Instagram" className="asideMenuItem" onClick={handleAsideGnb} >Instagram Event</a></li>
                    <li><a href="#Coupon" data-menuanchor="Coupon" className="asideMenuItem"onClick={handleAsideGnb} >Coupon Download</a></li>
                </ul>
            </div>
        </div>
        <div className={deemed ? "deemedOn" : null}></div>
      </>
  )
}
