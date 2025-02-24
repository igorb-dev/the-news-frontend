import { useEffect, useState } from 'react'
import "./DashboardAdmin.styles.scss"
import Header from '../../components/Header/Header'
import { useAuth } from '../../contexts/AuthContext'
import Spinner from '../../components/Spinner/Spinner'
import TotalUsers from '../../components/TotalUsers/TotalUsers'
import UserService from '../../services/UserService'
import { IAllStreaks, INewsOpen, IUsers, TNewsOpen } from './DashboardAdmin.types'
import TotalStreaks from '../../components/TotalStreaks/TotalStreaks'
import StreakService from '../../services/StreakService'
import NewsService from '../../services/NewsService'
import TotalNewsOpen from '../../components/TotalNewsOpen/TotalNewsOpen'
import NewsOpenChart from '../../components/Graphic/Graphic'

const DashboardAdmin = () => {
    const [_isLoading, _setIsLoading] = useState<boolean>(true)
    const [_allUsers, _setAllUsers] = useState<IUsers[]>([])
    const [_allStreaks, _setAllStreaks] = useState<IAllStreaks[]>([])
    const [_newsOpen, _setNewsOpen] = useState<INewsOpen[]>([])
    
    const {user, token, logout} = useAuth()

    const groupNewsByDay = (data: TNewsOpen[]): { date: string; count: number }[] => {
      const newsCount: Record<string, number> = {};
    
      data.forEach(({ openedAt }) => {
        const date = new Date(openedAt);
        const formattedDate = new Intl.DateTimeFormat('pt-BR').format(date); // Formata para dd/MM/yyyy
        newsCount[formattedDate] = (newsCount[formattedDate] || 0) + 1;
      });
    
      return Object.entries(newsCount)
        .map(([date, count]) => ({ date, count }))
        .sort((a, b) => {
          const [dayA, monthA, yearA] = a.date.split("/").map(Number);
          const [dayB, monthB, yearB] = b.date.split("/").map(Number);
          return new Date(yearA, monthA - 1, dayA).getTime() - new Date(yearB, monthB - 1, dayB).getTime();
        });
    };

    const totalCount = _allStreaks.reduce((sum, item) => sum + item.count, 0);
    const newsByDay = groupNewsByDay(_newsOpen);


    const GetAllUsers = (nToken: string) => {
        UserService.GetAllUsers(nToken).then(
            data => {
                _setAllUsers(data)
                GetAllStreaks(nToken)
            },
            error => {
              console.log("erro", error)
              _setIsLoading(false)
              logout()
            },
          );
      };

      const GetAllStreaks = (nToken: string) => {
        StreakService.GetAllStreaks(nToken).then(
            data => {
                _setAllStreaks(data.data)
                GetNewsOpen(nToken)
            },
            error => {
              console.log("erro", error)
              _setIsLoading(false)
              logout()
            },
          );
      };

      const GetNewsOpen = (nToken: string) => {
        NewsService.GetAllNews(nToken).then(
            data => {
                _setNewsOpen(data.data)
                _setIsLoading(false)
            },
            error => {
              console.log("erro", error)
              _setIsLoading(false)
              logout()
            },
          );
      };

      useEffect(() => {
        _setIsLoading(true)
        if (token) {
            GetAllUsers(token)
        } 
    }, [])
    
  return (
    <div className='DashboardAdmin'>
        <Header title='Dashboard' email={user?.email} />

        {_isLoading === true ? <div className='container-spinner'><Spinner /></div> : (
            <>
                <div className='container-infos'>
                    <TotalUsers count={_allUsers.length} />
                    <TotalNewsOpen count={_newsOpen.length} />
                    <TotalStreaks count={totalCount} />
                </div>

                <div className='container-graphic'>
                  <div className='container-title'>
                    <p className='title'>Newsletters Abertas por Dia</p>
                  </div>
                  <NewsOpenChart data={newsByDay} />
                </div>
            </>
            
        )}

        
    </div>
  )
}

export default DashboardAdmin