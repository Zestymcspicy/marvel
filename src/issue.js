import React from 'react'

export default function Issue(props){
  let imagePath = `${props.comic.images[0].path}.${props.comic.images[0].extension}`
  return(
    <div className="issue-box">
    <img src={imagePath} alt={props.comic.title}/>
    <span>{props.comic.title}</span>
    </div>
  )
}
