import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import MainSection1 from '../components/MainSection1';
import MainSection2 from '../components/MainSection2';
import MainSection3 from '../components/MainSection3';
import MainSection4 from '../components/MainSection4';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Aside from '../components/Aside';

import '../css/reset.css';
import '../css/common.css';
import '../css/style.css';
import '../css/responsive.css';


export default function MainPage() {
  return (
    <>
      <Header />
      <Aside/>
        <ReactFullpage
        anchors={['Home', 'Lineup', 'Kakao', 'Instagram', 'Coupon']}
        animateAnchor={true}
        menu={ '.asideMenu'}
        responsiveWidth={1024}
          scrollingSpeed = {1000}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <MainSection1/>
                <MainSection2/>
                <MainSection3/>
                <MainSection4 />
                <Footer/>
              </ReactFullpage.Wrapper>
            );
          }}
        />
    </>
    
  )
}
