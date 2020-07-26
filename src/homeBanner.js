import React from 'react'
import dice from './images/dice.png'
import icon from './images/icon.jpg'

export default function HomeBanner() {

  const pickRandom = () => {
    console.log("Hello")
  }

  return(
    <div className="banner-center">
    <div className="banner-center-container">
      <img
      className="center-icon"
      src={icon}
      alt="Marvel Unlimited Icon"/>
    </div>
    <img
    className="upper-right-icon"
    onClick={pickRandom}
    src={dice}
    alt="Random Issue Button"/>
    </div>
  )
}
