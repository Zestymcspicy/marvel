import React from 'react'
import Issue from './issue.js'


export default function issueRow(props){

  return(
  <ul className="issue-row">
    {props.comics.map((x,index)=>(<li key={index}><Issue comic={x}/></li>))}
  </ul>
)
}
