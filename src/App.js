import React from 'react';
// import Box from './box';
// import CharacterCrosses from './characterCrosses'
import {Route} from 'react-router-dom'
import MainBanner from './mainBanner'
import Home from './home'
import Library from './library'
import Account from './account'
import Browse from './browse'
import ReadingList from './readingList'
import Footer from './footer'


export default function App(){

  return(
    <div>
      <MainBanner />
      <div>
        <Route exact path="/" render={() => <Home/>}/>
        <Route path="/account" render={() => <Account/>}/>
        <Route path="/readingLists" render={() => <ReadingList/>}/>
        <Route path="/browse" render={() => <Browse/>}/>
        <Route path="/library" render={() => <Library/>}/>
      </div>
      <Footer/>
    </div>
  )
}
