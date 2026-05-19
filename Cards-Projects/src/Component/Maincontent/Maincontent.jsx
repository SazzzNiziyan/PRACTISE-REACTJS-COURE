import React from 'react'
import style from './Maincontent.module.css'

const Maincontent = ({Maincontent}) => {
  return (
    <div classname={style}>
        <h4>{Maincontent.company}&ensp;<span>{Maincontent.posted_days_ago} days ago</span></h4>
        <h2>{Maincontent.position}</h2>
        <p><span>{Maincontent.tags[0]}</span>&ensp;<span>{Maincontent.tags[1]}</span></p>
        <span className={style.line}></span>
    </div>
  )
} 

export default Maincontent