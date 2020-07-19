import React from 'react'

export default function Issue(props){
  let date = new Date(props.comic.dates[0].date)
  date = date.toDateString()
  let imagePath = `${props.comic.images[0].path}.${props.comic.images[0].extension}`
  return(
    <div className="issue-box">
    <div className="issue">
    <img src={imagePath} alt={props.comic.title}/>
    <span className="comic-title">{props.comic.title}</span>
    <span className="comic-date">{date}</span>
    </div>
    </div>
  )
}
