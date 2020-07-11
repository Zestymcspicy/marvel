import React, {useEffect, useState} from 'react';
import Issue from './issue'
import Helper from './apiHelper';

export default function NewThisWeek(){

const [newComics, setNewComics] = useState([])
const [errorMessage, setErrorMessage] = useState("")

  useEffect(()=>{
    async function getNew(){
      const query = "comics?startYear=2019&limit=25"
      let info = await Helper(query)
      if(Array.isArray(info)){
        setNewComics(info)
      } else {
        setErrorMessage(info)
      }

  //   fetchData()
  // function fetchData(){
  //   const apiKey = 'ddb64a637cccf095183c9ca095824714';
  //   const queryString = "comics?startYear=2020&limit=100";
  //   // let r;
  //   return fetch(
  //     `https://gateway.marvel.com:443/v1/public/${queryString}&hasDigitalIssue=true&apikey=${apiKey}`,
  //     {
  //       method: 'GET',
  //       // mode: 'no-cors'
  //     }
  //   ).then(r => r.json()
  // ).then(response=> {
  //   console.log(response.data.results)
  //   setNewComics(response.data.results)
  // })
  }
  getNew();
  },
  [setNewComics, setErrorMessage])

  return(
    <div>
      <h1>{errorMessage}</h1>
      <ul className="issue-row">
        {newComics.map((x,index)=>(<li key={index}><Issue comic={x}/></li>))}
      </ul>
    </div>
  )
}
