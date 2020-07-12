import React from 'react';
import accountIcon from './images/account.PNG';
import browseIcon from './images/browse.PNG';
import homeIcon from './images/homeIcon.PNG';
import readingListsIcon from './images/readingLists.PNG';
import myLibraryIcon from './images/myLibrary.PNG';

export default function Footer(){

  return(
    <div
      id="footer"
      className="fixed-bottom">
      <button className="footer-button">
        <img className="footer-icon" alt="Home Button" src={homeIcon}/>
        <span>Home</span>
      </button>
      <button className="footer-button">
        <img className="footer-icon" alt="Reading Lists" src={readingListsIcon}/>
        <span>Reading Lists</span>
      </button>
      <button className="footer-button">
        <div className="overlay"></div>
        <img className="footer-icon" alt="Browse" src={browseIcon}/>
        <span>Browse</span>
      </button>
      <button className="footer-button">
        <img className="footer-icon" alt="My Library" src={myLibraryIcon}/>
        <span>My Library</span>
      </button>
      <button className="footer-button">
        <img className="footer-icon" alt="Account" src={accountIcon}/>
        <span>Account</span>
      </button>
    </div>
  )
}
