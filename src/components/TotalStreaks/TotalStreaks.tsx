import React, { FC } from 'react'
import "./TotalStreaks.styles.scss"
import { ITotalStreaks } from './TotalStreaks.types'
import SvgCorrected from '../SVGs/SvgCorrected'

const TotalStreaks:FC <ITotalStreaks>= ({count}) => {
  return (
    <div className='TotalStreaks'>

        <div className='container-white'>
            <div className='info-TotalStreaks'>
                <p className='streaks'>Streaks</p>
                <p className='number'>{count.toString()}</p>
            </div>

            <div className='detail'/>

            <div className='info'>
                <p>Total de streaks</p>
            </div>
        </div>

        <div className='icon'>
            <SvgCorrected />
        </div>

    </div>
  )
}

export default TotalStreaks