import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import './TeamMembers.css'
import OnlineStatus from './OnlineStatus'
import BackBtn from './BackBtn'

export default function TeamMembers() {
  const [people, setPeople] = useState()

  function addTeamMember() {
    console.log("addTeamMeber Called")
    const firstName = prompt("Please enter the team members first name");
    const lastName = prompt("Please enter the team members last name");
    const role = prompt("Please enter the team members role")
    fetch('http://localhost:8080/api/people', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first: firstName,
        last: lastName,
        role
      })
    })
    getPeople();
  }

  function getPeople(){
    fetch('http://localhost:8080/api/people', {
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

  useEffect(() => {
    getPeople()
  }, [])

  return <div className="container">
    <OnlineStatus />
    <BackBtn />
    <h1>Team Members</h1>
    <button style={{ width: 120, margin: 5 }} type="button" onClick={addTeamMember}>Add</button>
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