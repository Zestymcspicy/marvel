import React, {useState, useEffect} from 'react';
import FeaturedSelections from './featuredSelections'
import NewThisWeek from './newThisWeek'
export default function Home() {


  return(
    <div id="homeBox">
      <div>
        <FeaturedSelections/>
      </div>
      <div>
        <NewThisWeek/>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}