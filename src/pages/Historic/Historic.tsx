import React, { useEffect, useState } from 'react'
import "./Historic.styles.scss"
import Header from '../../components/Header/Header'
import { useAuth } from '../../contexts/AuthContext'
import { INewsOpen } from './Historic.types'
import Spinner from '../../components/Spinner/Spinner'
import NewsService from '../../services/NewsService'
import dayjs from 'dayjs'
import utc from "dayjs/plugin/utc";

const Historic = () => {
    const [_isLoading, _setIsLoading] = useState<boolean>(true)
    const [_newsOpen, _setNewsOpen] = useState<INewsOpen[]>([])

    dayjs.extend(utc);

    const formatDate = (data: string) => {
        return dayjs.utc(data).format("DD/MM/YYYY");
    }

    const formatHour = (data: string) => {
        return dayjs.utc(data).format("HH:mm");
    }

    const {user, token, logout} = useAuth()

      const GetNewsOpen = (nToken: string) => {
        NewsService.GetNewsById(user.id, nToken).then(
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
          GetNewsOpen(token)
        } 
    }, [])

  return (
    <div className='Historic'>
        <Header title='Histórico' email={user?.email} />

        {_isLoading === true ? <div className='container-spinner'><Spinner /></div> : (
            <>
                {_newsOpen.length > 0 && (
                  <div className='container-historic'>

                  <div className='container-title'>
                      <p className='title'>Acessos</p>
                  </div>
          
                  <div className='container-subtitle'>
                      <p className='subtitle-one'>POST</p>
                      <p className='subtitle-two'>DATA</p>
                      <p className='subtitle-two'>HORA</p>
                  </div>
          
                  <div className='scroller'>
                      {_newsOpen.map(item => (
                          <div className='container-data'>
                              <p className='data-one'>{item.postId}</p>
                              <p className='data-two'>{formatDate(item.openedAt)}</p>
                              <p className='data-two'>{formatHour(item.openedAt)}</p>
                          </div>
                      ))}
                  </div>
                  
                  
              </div>
                      )}
            </>
            
        )}
        
        
    </div>
  )
}

export default Historic