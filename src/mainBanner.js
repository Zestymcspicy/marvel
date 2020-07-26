import React from 'react';
import backButton from './images/arrowbackbutton_79955.png'
import HomeBanner from './homeBanner.js'

export default function MainBanner(){




  const goBack = () => window.history.back();

  return(
    <div
      id="mainBanner"
      className="fixed-top">
      <div
      id="backButton"
      className="upper-left-icon"
      onClick={goBack}
      ><span className="Chevron">

      </span></div>
    <HomeBanner/>
    </div>
  )
}
