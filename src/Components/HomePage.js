import React from 'react'
import { Link } from 'react-router-dom'
import OnlineStatus from './OnlineStatus'
import './HomePage.css'

export default function HomePage() {
  return <div>
    <h1 className="selectApplication">Select an application. <OnlineStatus /></h1>
    <div className="applications">
      <div className="app">
        <Link to="/team">Team Members</Link>
        <img className="appImage" src="./groupOfPeople.jpeg" alt="Group of people" />
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