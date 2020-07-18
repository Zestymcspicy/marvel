import React from 'react'
import Issue from './issue.js'


export default function issueRow(props){



  return(
  <div className="row-outer">
    <ul className="issue-row">
      {Array.isArray(props.comics)?
        props.comics.map((x,index)=>(<li key={index}><Issue comic={x}/></li>))
        :
        <span>{props.comics}</span>
      }
    </ul>
  </div>
)
}
