import React from 'react';
// import Aside from '../components/Aside';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from '../components/Login';
import '../css/login.css';
import styled from '@emotion/styled/macro';

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

export default function LoginPage() {
  return (
    <Wrap>
      <Header />
      {/* <Aside /> */}
      <Login/>
      <Footer />
    </Wrap>
  )
}
