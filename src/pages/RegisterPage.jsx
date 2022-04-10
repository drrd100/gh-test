import React from 'react';
// import Aside from '../components/Aside';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Resister from '../components/Resister';
import '../css/login.css';


export default function LoginPage() {
  return (
    <>
      <Header />
      {/* <Aside /> */}
      <Resister/>
      <Footer />
    </>
  )
}
