import React, { useState, useEffect } from 'react';
// import ReactDom from 'react-dom';
// import './styles.css';
import Box from './box';
// import useDebounce from './use-debounce';
import CharacterCrosses from './characterCrosses'
import MainBanner from './mainBanner'
import Home from './home'
import Footer from './footer'


export default function App(){

  return(
    <div>
      <MainBanner />
      <div>
      <Home/>
      </div>
      <Footer/>
    </div>
  )
}
