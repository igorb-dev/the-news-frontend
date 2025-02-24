import { FC } from 'react'
import "./Header.styles.scss"
import { IHeader } from './Header.types'
import SvgEmail from '../SVGs/SvgEmail'

const Header:FC<IHeader> = ({ title, email }) => {
  return (
    <div className='Header'>
        <h2 className='title'>{title}</h2>
        <div className='container-email'>
            <SvgEmail fill='#222'/>
            <p className='email'>{email ? email : ""}</p>
        </div>
    </div>
  )
}

export default Header