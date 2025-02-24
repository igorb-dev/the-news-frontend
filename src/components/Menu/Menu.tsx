import React, { FC, useState } from 'react'
import "./Menu.styles.scss"
import SvgDashboard from '../SVGs/SvgDashboard'
import SvgHistory from '../SVGs/SvgHistory';
import { IMenu } from './Menu.types';
import SvgLogout from '../SVGs/SvgLogout';
import { useAuth } from '../../contexts/AuthContext';

const Menu: FC<IMenu> = ({ selected, setSelected }) => {

    const { logout, admin } = useAuth()

    const buttons = [
    { name: "Dashboard", icon: <SvgDashboard fill={selected === "Dashboard" ? "#222" : "#fff" } /> },
    { name: "Historico", icon: <SvgHistory fill={selected === "Historico" ? "#222" : "#fff" } /> },
    { name: "Sair", icon: <SvgLogout fill={selected === "Sair" ? "#222" : "#fff" } /> },
    ];

    const buttonsAdmin = [
        { name: "Dashboard", icon: <SvgDashboard fill={selected === "Dashboard" ? "#222" : "#fff" } /> },
        { name: "Ranks", icon: <SvgHistory fill={selected === "Ranks" ? "#222" : "#fff" } /> },
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
    <div className='Menu'>

        <div className='container-title'>
            <p className='title'>the news</p>
        </div>
        <div className='detail'/>

        <div className='list-buttons'>
            {admin === false && buttons.map(item => (
                <button key={item.name} 
                className={`button ${selected === item.name ? "active" : ""}`}
                onClick={() => buttonSelect(item.name)}>
                    {item.icon}
                    <p className='name-button'>{item.name}</p>
                </button>
            ))}

            {admin === true && buttonsAdmin.map(item => (
                <button key={item.name} 
                className={`button ${selected === item.name ? "active" : ""}`}
                onClick={() => buttonSelect(item.name)}>
                    {item.icon}
                    <p className='name-button'>{item.name}</p>
                </button>
            ))}
        </div>

        


    </div>
  )
}

export default Menu