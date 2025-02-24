import { useEffect, useState } from 'react'
import "./Dashboard.styles.scss"
import Header from '../../components/Header/Header'
import { useAuth } from '../../contexts/AuthContext'
import Streaks from '../../components/Streaks/Streaks'
import StreakService from '../../services/StreakService'
import { INewsOpen, IStrike } from './Dashboard.types'
import LastStreak from '../../components/LastStreak/LastStreak'
import Level from '../../components/Level/Level'
import Spinner from '../../components/Spinner/Spinner'
import MessageService from '../../services/MessageService'
import NewsService from '../../services/NewsService'
import NewsOpen from '../../components/NewsOpen/NewsOpen'

const Dashboard = () => {
    const [_strike, _setStrike] = useState<IStrike>({count: 0, lastOpened: ""})
    const [_isLoading, _setIsLoading] = useState<boolean>(true)
    const [_newsOpen, _setNewsOpen] = useState<INewsOpen[]>([])
    const [_message, _setMessage] = useState<string>("")
    console.log(_newsOpen)

    const {user, token, logout} = useAuth()

    const GetStreaks = (nToken: string) => {
        StreakService.GetStreaksById(user.id, nToken).then(
            data => {
                _setStrike(data);
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
        NewsService.GetNewsById(user.id, nToken).then(
            data => {
                _setNewsOpen(data.data)
                GetMessage(nToken)
            },
            error => {
              console.log("erro", error)
              _setIsLoading(false)
              logout()
            },
          );
      };

      const GetMessage = (nToken: string) => {
        MessageService.GetMessage(nToken).then(
            data => {
                console.log(data.data.message)
                _setMessage(data.data.message)
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
            GetStreaks(token)
        } 
    }, [])

  return (
    <div className='Dashboard'>
        <Header title='Dashboard' email={user?.email} />

        {_isLoading === true ? <div className='container-spinner'><Spinner /></div> : (
            <>
                <div className='container-infos'>
                    <Streaks count={_strike.count} />
                    <NewsOpen count={_newsOpen.length} />
                    <LastStreak date={_strike.lastOpened} />
                    <Level count={_strike.count} />
                </div>

                <p className='message'>{_message}</p>
            </>
            
        )}
        
        
    </div>
  )
}

export default Dashboard