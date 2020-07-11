import React, { useState, useEffect } from 'react';
// import ReactDom from 'react-dom';
// import './styles.css';
import Box from './box';
// import useDebounce from './use-debounce';

export default function CharacterCrosses(){

  const [charOne, setCharOne] = useState(undefined)
  const [charTwo, setCharTwo] = useState(undefined)
  const [crossoverEvents, setCrossoverEvents] = useState(undefined)


  useEffect(
    ()=>{
      if(charOne!==undefined&&charTwo!==undefined){
        fetchCrossovers()
      }
      function fetchCrossovers(){
        const apiKey = 'ddb64a637cccf095183c9ca095824714';
        const queryString = `events?characters=${charOne.id},${charTwo.id}&limit=100&apikey=${apiKey}`;
        // let r;
        return fetch(
          `https://gateway.marvel.com:443/v1/public/${queryString}`,
          {
            method: 'GET'
          }
        ).then(r => r.json()
      ).then(response=> {
        console.log(response.data.results)
        setCrossoverEvents(response.data.results)
      })
      }
    },
  [charOne, charTwo])

  function fetchEvent(x){
    const apiKey = 'ddb64a637cccf095183c9ca095824714';
    const queryString = `events?characters=${charOne.id},${charTwo.id}&limit=100&apikey=${apiKey}`;
    // let r;
    return fetch(
      `https://gateway.marvel.com:443/v1/public/${queryString}`,
      {
        method: 'GET'
      }
    ).then(r => r.json()
    ).then(response=> {
      console.log(response.data.results)
    })
  }

    return(
      <div>
      <div className="main-container">
      <Box
      makeSelection={setCharOne}
      searchType="characters"
      />
      {charOne!==undefined?
      <Box
      makeSelection={setCharTwo}
      searchType="characters"
      />
      :<div></div>}
      <div>
      {crossoverEvents!==undefined&&
        crossoverEvents.map(x => {
            return(<button
              onClick={fetchEvent(x)}
              key={x.id}>
              <h4>{x.title}</h4>
              <img className="thumbnail"
              src={`${x.thumbnail.path}.${x.thumbnail.extension}`}
              alt={x.title}/>
            </button>)
          }
        )
      }
      </div>
      </div>
      {charOne&&<div>{}</div>}
      </div>


    )
}
