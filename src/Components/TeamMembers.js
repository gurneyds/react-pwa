import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import './TeamMembers.css'
import OnlineStatus from './OnlineStatus'

export default function TeamMembers() {
  const [people, setPeople] = useState()

  useEffect(() => {
    async function getPeople() {
      fetch('http://localhost:8080/people', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => {
        console.log("received raw response")
        return res.json()
      })
      .then(data => {
        console.log('Setting data:', data)
        setPeople(data)
      })
      .catch(err => console.error(err))

      // console.log("people:", response)
    }

    getPeople()
  }, [])

  return <div className="container">
    <OnlineStatus />
    <h1>Team Members</h1>
    <div className="teamMembers">
      {people && people.map(p => {
        return <div className="member" key={p.id}>
          <Link to={`/team/member/details/${p.id}`} >
            {p.first} {p.last}
          </Link>
        </div>
      })}
    </div>
  </div>
}