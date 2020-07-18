import React, {useEffect, useState} from 'react';
import IssueRow from './issueRow'
import Helper from './apiHelper';

export default function PopularThisWeek(){

  const [popComics, setPopComics] = useState([])

  useEffect(()=>{
    async function getNew(){
      const query = "comics?startYear=2020&limit=100"
      let info = await Helper(query)
      setPopComics(info)
    }
    getNew();
    },
    [setPopComics])

  return(
    <div id="featuredSelections">
      <div className="mid-banner">
        <h3>POPULAR THIS WEEK</h3>
      </div>
      <IssueRow comics={popComics} />
    </div>
  )
}
