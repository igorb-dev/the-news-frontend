import { FC } from 'react'
import "./NewsOpen.styles.scss"
import { INewsOpen } from './NewsOpen.types'
import SvgNews from '../SVGs/SvgNews'

const NewsOpen:FC <INewsOpen>= ({count}) => {
  return (
    <div className='NewsOpen'>

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

export default NewsOpen