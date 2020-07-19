import React from 'react';
import dice from './images/dice.png'
import icon from './images/icon.jpg'

export default function MainBanner(){

  const pickRandom = () => {
    console.log("Hello")
  }

  

  return(
    <div
      id="mainBanner"
      className="fixed-top">
      <img
      className="upper-left-icon"
      onClick={pickRandom}
      src={dice}/>
      <div className="banner-center-container">
        <img
        className="center-icon"
        src={icon}/>
      </div>
      <img
      className="upper-left-icon"
      onClick={pickRandom}
      src={dice}/>
    </div>
  )
}
