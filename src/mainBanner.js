import React from 'react';
import HomeBanner from './homeBanner.js'
import BrowseBanner from './browseBanner.js'
import {Route} from 'react-router-dom'
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
      <Route exact path="/" render={() => <HomeBanner/>}/>
      <Route path="/account" render={() => <HomeBanner/>}/>
      <Route path="/readingLists" render={() => <HomeBanner/>}/>
      <Route path="/browse" render={() => <BrowseBanner/>}/>
      <Route path="/library" render={() => <HomeBanner/>}/>
    </div>
  )
}
