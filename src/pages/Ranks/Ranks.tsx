import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { useAuth } from '../../contexts/AuthContext'
import { IAllStreaks, INewsOpen } from '../DashboardAdmin/DashboardAdmin.types'
import StreakService from '../../services/StreakService'
import Spinner from '../../components/Spinner/Spinner'
import NewsService from '../../services/NewsService'
import { DataItem } from './Ranks.types'
import "./Ranks.styles.scss"

const Ranks = () => {
    const [_isLoading, _setIsLoading] = useState<boolean>(true)
    const [_allStreaks, _setAllStreaks] = useState<IAllStreaks[]>([])
    const [_newsOpen, _setNewsOpen] = useState<INewsOpen[]>([])

    const getTopUsersByEmail = (data: DataItem[], topN: number = 3): { email: string; count: number }[] => {
    const userCount: Record<string, number> = {};
    
    data.forEach(({ user }) => {
        const email = user.email;
        userCount[email] = (userCount[email] || 0) + 1;
    });
    
    return Object.entries(userCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, topN)
        .map(([email, count]) => ({ email, count }));
    };

    const {user, token, logout} = useAuth()

    const topThreeStreaks = _allStreaks.slice(0, 3);
    const topUsers = getTopUsersByEmail(_newsOpen);

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
        GetAllStreaks(token)
    } 
}, [])
    
  return (
    <div className='Ranks'>
        <Header title='Ranks' email={user?.email} />

        {_isLoading === true ? <div className='container-spinner'><Spinner /></div> : (
            <>
                <div className='container-ranks'>

                    <div className='container-rank-streak'>
                        <div className='container-title'>
                            <p className='title'>Rank de streaks</p>
                        </div>

                        <div className='container-subtitle'>
                            <p className='subtitle-one'>E-MAIL</p>
                            <p className='subtitle-two'>STREAKS</p>
                        </div>

                        <div className='scroller'>
                            {topThreeStreaks.map(item => (
                                <div className='container-data'>
                                    <p className='data-one'>{item.user.email}</p>
                                    <p className='data-two'>{item.count}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='container-rank-news-open'>
                        <div className='container-title'>
                            <p className='title'>Rank de notícias visualizadas</p>
                        </div>

                        <div className='container-subtitle'>
                            <p className='subtitle-one'>E-MAIL</p>
                            <p className='subtitle-two'>VIEWS</p>
                        </div>

                        <div className='scroller'>
                            {topUsers.map(item => (
                                <div className='container-data'>
                                    <p className='data-one'>{item.email}</p>
                                    <p className='data-two'>{item.count}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    </div>
            </>
            
        )}

        
        
    </div>
  )
}

export default Ranks