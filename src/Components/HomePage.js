import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import OnlineStatus from './OnlineStatus'
import './HomePage.css'
import getCachedData from '../getCachedData'

export default function HomePage() {
  const [offlineTeamData, setOfflineTeamData] = useState(() => false)

  useEffect(() => {
    async function getOfflineData() {
      console.log('navigator.onLine=', navigator.onLine)

      if (!navigator.onLine) {
        console.log('detected offline status - looking to see if we have cache')
        const cachedTeamData = await getCachedData('api-data', 'http://localhost:8080/people')
        console.log('cachedTeamData=', cachedTeamData)
        setOfflineTeamData(cachedTeamData)
      }
    }

    getOfflineData()

    window.addEventListener('online', getOfflineData)
    window.addEventListener('offline', getOfflineData)

    return () => {
      window.removeEventListener('online', getOfflineData)
      window.removeEventListener('offline', getOfflineData)
    }
  }, [])

  return <div>
    <OnlineStatus />
    <h1 className="selectApplication">
      Select an application.
    </h1>
    <div className="applications">
      <div className="app">
        {(navigator.onLine || offlineTeamData) &&
          <>
            <Link to="/team">Team Members</Link>
            <img className="appImage" src="./groupOfPeople.jpeg" alt="Group of people" />
          </>
        }

        {!navigator.onLine && !offlineTeamData &&
          <span>Team data not available offline until it has been loaded 1 time.</span>
        }
      </div>

      <div className="app">
        <Link to="/instantTree">Instant Tree</Link>
        <img className="appImage" src="http://localhost:8080/image/1" alt="tree" />
      </div>

      <div className="app"><Link to="/tree">Tree</Link></div>
      <div className="app"><Link to="/memories">Memories</Link></div >
      <div className="app"><Link to="/oralGen">Oral Genealogy</Link></div >
    </div>
  </div>
}