import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import './TeamMembers.css'
import OnlineStatus from './OnlineStatus'
import BackBtn from './BackBtn'

const apiHost = process.env.REACT_APP_API_HOST || 'http://localhost:3000'

export default function TeamMembers() {
  const [people, setPeople] = useState()

  useEffect(() => {
    async function getPeople() {
      fetch(`${apiHost}/api/people`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => {
        return res.json()
      })
      .then(data => {
        setPeople(data)
      })
      .catch(err => console.error(err))
    }

    getPeople()
  }, [])

  return <div className="container">
    <OnlineStatus />
    <BackBtn />
    <h1>Team Members</h1>
    <div className="teamMembers">
      {people && people.map(p => {
        return <div className="member" key={p.id}>
          <Link to={`/team/${p.id}`} >
            {p.first} {p.last}
          </Link>
        </div>
      })}
    </div>
  </div>
}