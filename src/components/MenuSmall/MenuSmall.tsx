import { FC } from 'react'
import "./MenuSmall.styles.scss"
import SvgDashboard from '../SVGs/SvgDashboard'
import SvgHistory from '../SVGs/SvgHistory';
import { IMenuSmall } from './MenuSmall.types';
import SvgLogout from '../SVGs/SvgLogout';
import { useAuth } from '../../contexts/AuthContext';

const MenuSmall: FC<IMenuSmall> = ({ selected, setSelected }) => {

    const { logout } = useAuth()

    const buttons = [
    { name: "Dashboard", icon: <SvgDashboard fill={selected === "Dashboard" ? "#222" : "#fff" } /> },
    { name: "Histórico", icon: <SvgHistory fill={selected === "Histórico" ? "#222" : "#fff" } /> },
    { name: "Sair", icon: <SvgLogout fill={selected === "Sair" ? "#222" : "#fff" } /> },
    ];

    const buttonSelect = (value: string) => {
        if (value === "Sair") {
            logout()
        } else {
            setSelected(value)
        }
    }

  return (
    <div className='MenuSmall'>

        <div className='container-title'>
            <p className='title'></p>
        </div>
        <div className='detail'/>

        <div className='list-buttons'>
            {buttons.map(item => (
                <button key={item.name} 
                className={`button ${selected === item.name ? "active" : ""}`}
                onClick={() => buttonSelect(item.name)}>
                    {item.icon}
                </button>
            ))}
        </div>

        


    </div>
  )
}

export default MenuSmall