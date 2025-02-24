import React, { FC } from 'react'
import "./TotalUsers.styles.scss"
import { ITotalUsers } from './TotalUsers.types'
import SvgUser from '../SVGs/SvgUser'

const TotalUsers:FC <ITotalUsers>= ({count}) => {
  return (
    <div className='TotalUsers'>

        <div className='container-white'>
            <div className='info-streak'>
                <p className='streak'>Usuários</p>
                <p className='number'>{count.toString()}</p>
            </div>

            <div className='detail'/>

            <div className='info'>
                <p>Total de Usuários</p>
            </div>
        </div>

        <div className='icon'>
            <SvgUser />
        </div>

    </div>
  )
}

export default TotalUsers