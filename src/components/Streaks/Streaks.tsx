import { FC } from 'react'
import "./Streaks.styles.scss"
import SvgCalendar from '../SVGs/SvgCalendar'
import { IStreaks } from './Streaks.types'

const Streaks:FC <IStreaks>= ({count}) => {
  return (
    <div className='Streaks'>

        <div className='container-white'>
            <div className='info-streak'>
                <p className='streak'>Streaks</p>
                <p className='number'>{count.toString()}/10</p>
            </div>

            <div className='detail'/>

            <div className='info'>
                <p>Sequência de logins</p>
            </div>
        </div>

        <div className='icon'>
            <SvgCalendar />
        </div>

    </div>
  )
}

export default Streaks