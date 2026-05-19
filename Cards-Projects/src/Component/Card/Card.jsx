import React from 'react'
import style from './Card.module.css'
import Logo from '../Logo/logo'
import Maincontent from '../Maincontent/Maincontent'
import Bottom from './../bottom/bottom';

const Card = ({carData}) => {
    return (
        <div className={style.Card}>
            <Logo Logo={carData.logo}/>
            <Maincontent Maincontent={carData} />
            <Bottom bottom={carData} />
        </div>
    )
}

export default Card