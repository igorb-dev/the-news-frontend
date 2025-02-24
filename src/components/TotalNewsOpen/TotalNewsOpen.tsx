import React, { FC } from 'react'
import "./TotalNewsOpen.styles.scss"
import { ITotalNewsOpen } from './TotalNewsOpen.types'
import SvgNews from '../SVGs/SvgNews'

const TotalNewsOpen:FC <ITotalNewsOpen>= ({count}) => {
  return (
    <div className='TotalNewsOpen'>

        <div className='container-white'>
            <div className='info-newsOpen'>
                <p className='newsOpen'>Notícias</p>
                <p className='number'>{count.toString()}</p>
            </div>

            <div className='detail'/>

            <div className='info'>
                <p>Notícias visualizadas</p>
            </div>
        </div>

        <div className='icon'>
            <SvgNews />
        </div>

    </div>
  )
}

export default TotalNewsOpen