import { FC } from 'react'
import "./Level.styles.scss"
import { ILevel } from './Level.types'
import SvgPlayer from '../SVGs/SvgPlayer'

const Level: FC<ILevel> = ({ count }) => {
  const level = Math.max(1, Math.ceil(count / 10));
  const streaksNoNivelAtual = count - (level - 1) * 10;

  return (
    <div className='Level'>
        <div className='container-white'>
            <div className='info-level'>
                <p className='level'>Nível</p>
                <p className='number'>{level}</p>
            </div>

            <div className='detail'/>

            <div className='info'>
                <p className='next-level'><span className='span-green'>{streaksNoNivelAtual * 10}%</span> de experiência</p>
            </div>
        </div>

        <div className='icon'>
            <SvgPlayer />
        </div>
    </div>
  )
}

export default Level
