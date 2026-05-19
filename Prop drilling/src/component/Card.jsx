import React from 'react'

const Card = (props) => {
  return (
         <div className="card">
            <img src={props.img} alt="" />
            <h1>{props.user} {props.age}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, numquam!</p>
            <button>Hello!</button>
        </div>
  )
}

export default Card