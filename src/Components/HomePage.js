import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import OnlineStatus from './OnlineStatus'
import './HomePage.css'
import getCachedData from '../getCachedData'
import useOnlineStatus from './useOnlineStatus'

const apiHost = process.env.REACT_APP_API_HOST || 'http://localhost:3000'

console.log("process.env=", process.env)

export default function HomePage() {
  const isOnline = useOnlineStatus()

  const [offlineTeamData, setOfflineTeamData] = useState(() => false)

  useEffect(() => {
    async function getOfflineData() {
      if (!isOnline) {
        const cachedTeamData = await getCachedData('api-data', `${apiHost}/api/people`)
        setOfflineTeamData(cachedTeamData)
      }
    }

    getOfflineData()
  }, [isOnline])

  return <div>
    <OnlineStatus />
    <h1 className="selectApplication">
      Select an application.
    </h1>
    <div className="applications">
      <div className="app">
        {(navigator.onLine || offlineTeamData) && <Link to="/team">Team Members</Link> }

        {!navigator.onLine && !offlineTeamData && <span>Team data not available offline until it has been loaded 1 time.</span> }

        <img className="appImage" src="./groupOfPeople.jpeg" alt="Group of people" />
      </div>

      <div className="app"><Link to="/oralGen">Oral Genealogy</Link></div >
    </div>
  </div>
}