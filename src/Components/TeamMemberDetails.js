import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import OnlineStatus from './OnlineStatus'
import BackBtn from './BackBtn'

const apiHost = process.env.REACT_APP_API_HOST || 'http://localhost:3000'

export default function TeamMemberDetails() {
  const { id } = useParams()
  const [details, setDetails] = useState()

  useEffect(() => {
    async function getDetails(id) {
      fetch(`${apiHost}/api/people/details/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(res => {
          return res.json()
        })
        .then(data => {
          setDetails(data)
        })
        .catch(err => console.error(err))
    }

    getDetails(id)
  }, [id])

  return <div>
    <OnlineStatus />
    <BackBtn />

    <h1>{details?.first} {details?.last}</h1>
    <h2>Role: {details?.role}</h2>
    {details?.id &&
      <img src={`${apiHost}/api/people/image/${details?.id}`} alt="Team Member" />
    }
  </div>
}