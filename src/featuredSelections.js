import React, {useEffect, useState} from 'react';
import IssueRow from './issueRow'
import Helper from './apiHelper';

export default function FeaturedSelections(){

  const [featComics, setFeatComics] = useState([])

  useEffect(()=>{
    async function getNew(){
      const query = "comics?startYear=2020&limit=100"
      let info = await Helper(query)
      setFeatComics(info)
    }
    getNew();
    },
    [setFeatComics])

  return(
    <div id="featuredSelections">
      <h3>FEATURED</h3>
      <IssueRow comics={featComics} />
    </div>
  )
}
