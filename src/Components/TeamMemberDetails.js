import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function TeamMemberDetails() {
  const { id } = useParams()
  const [details, setDetails] = useState()
  console.log("TeamMemberDetails created with id=", id)

  useEffect(() => {
    async function getDetails(id) {
      fetch(`http://localhost:8080/people/details/${id}`, {
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
          console.log('Setting details data:', data)
          setDetails(data)
        })
        .catch(err => console.error(err))
    }

    getDetails(id)
  }, [id])

  return <div>
    <h1>{details?.first} {details?.last}</h1>
    <h2>Role: {details?.role}</h2>
    {details?.id &&
      <img src={`http://localhost:8080/people/image/${details?.id}`} alt="Team Member" />
    }
  </div>
}