import React, { FC } from 'react'
import "./LastStreak.styles.scss"
import { ILastStreak } from './LastStreak.types'
import SvgCorrected from '../SVGs/SvgCorrected'


const LastStreak:FC <ILastStreak>= ({date}) => {
    const dataFormatada = date.slice(8, 10) + "/" + date.slice(5, 7);


  return (
    <div className='LastStreak'>

        <div className='container-white'>
            <div className='info-streak'>
                <p className='streak'>Último streak</p>
                <p className='number'>{dataFormatada.toString()}</p>
            </div>

            <div className='detail'/>

            <div className='info'>
                <p>Streak mais recente</p>
            </div>
        </div>

        <div className='icon'>
            <SvgCorrected />
        </div>

    </div>
  )
}

export default LastStreak