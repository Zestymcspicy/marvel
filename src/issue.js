import React from 'react'

export default function Issue(props){
  let imagePath = `${props.comic.images[0].path}.${props.comic.images[0].extension}`
  return(
    <div className="issue-box">
    <div className="issue">
    <img src={imagePath} alt={props.comic.title}/>
    <span className="comic-title">{props.comic.title}</span>
    </div>
    </div>
  )
}
