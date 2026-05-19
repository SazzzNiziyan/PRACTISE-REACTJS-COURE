import React from 'react'
import style from './bottom.module.css'

const Bottom = ({bottom}) => {
  return (
    <div className={style.bttm}>
        <div className="rightside">
            <h3 >${(bottom.posted_days_ago)*(30.23)}/hr</h3>
            <p className={style.p}>{bottom.location}</p>
        </div>
        <div className="leftside">
            <button className={style.btn}>
                Apply Now
            </button>
        </div>
    </div>
  )
}

export default Bottom