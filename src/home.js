import React, {useState, useEffect} from 'react';
import FeaturedSelections from './featuredSelections'
import PopularThisWeek from './popularThisWeek'
import NewThisWeek from './newThisWeek'
export default function Home() {


  return(
    <div className="home-box">
      <FeaturedSelections/>
      <NewThisWeek/>
      <PopularThisWeek/>
      <div></div>
      <div></div>
    </div>
  )
}
