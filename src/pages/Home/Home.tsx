import React, { useEffect, useState } from 'react'
import "./Home.styles.scss"
import Menu from '../../components/Menu/Menu'
import Dashboard from '../Dashboard/Dashboard';
import MenuSmall from '../../components/MenuSmall/MenuSmall';
import Historic from '../Historic/Historic';
import { useAuth } from '../../contexts/AuthContext';
import DashboardAdmin from '../DashboardAdmin/DashboardAdmin';
import Ranks from '../Ranks/Ranks';

const Home = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const {admin} = useAuth()
  console.log(admin)

  useEffect(() => {
    setSelected("Dashboard")
  }, [])
  
  return (
    <div className='Home'>
      
      <div className='container-menu-big'>
        <Menu selected={selected} setSelected={setSelected}/>
      </div>

      <div className='container-menu-small'>
        <MenuSmall selected={selected} setSelected={setSelected}/>
      </div>
      

      <div className='container-pages'>
        {selected === "Dashboard" && admin === false && <Dashboard />}
        {selected === "Historico" && <Historic />}

        {selected === "Dashboard" && admin === true && <DashboardAdmin />}
        {selected === "Ranks" && admin === true && <Ranks />}

        
      </div>

    </div>
  )
}

export default Home