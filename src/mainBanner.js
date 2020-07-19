import React from 'react';
import backButton from './images/arrowbackbutton_79955.png'
import dice from './images/dice.png'
import icon from './images/icon.jpg'

export default function MainBanner(){

  const Back = "<"
  const pickRandom = () => {
    console.log("Hello")
  }

  const goBack = () => window.history.back();

  return(
    <div
      id="mainBanner"
      className="fixed-top">
      <div
      id="backButton"
      className="upper-left-icon"
      onClick={goBack}

      ><span>{Back}</span></div>
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
