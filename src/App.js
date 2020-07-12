import React from 'react';
// import Box from './box';
// import CharacterCrosses from './characterCrosses'
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
