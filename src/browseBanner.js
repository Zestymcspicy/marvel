import React from 'react'

export default function BrowseBanner() {

const setActive = (e) => console.log(e.target.innerHTML)


  return(
    <div className="banner-center">
    <div className="banner-center-container">
    <button
      onClick={setActive}
      className="rhombus-button">
      <span>SERIES</span>
    </button>
    <button
      onClick={setActive}
      className="rhombus-button">
      <span>CHARACTERS</span>
    </button>
    <button
      onClick={setActive}
      className="rhombus-button">
      <span>CREATORS</span>
    </button>
    <button
      onClick={setActive}
      className="rhombus-button">
      <span>COMIC EVENTS</span>
    </button>
    <button
      onClick={setActive}
      className="rhombus-button">
      <span id="pubDateSpan">PUBLICATION DATE</span>
    </button>
    </div>
    </div>
  )
}
