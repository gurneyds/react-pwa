import React, { useEffect, useState } from 'react'
import './OnlineStatus.css'

export default function OnlineStatus() {
  const [statusClassName, setStatusClassName] = useState(() => navigator.onLine ? 'online' : 'offline')

  function setOnlineStatus(event) {
    setStatusClassName(event.type) // online or offline
  }

  useEffect(() => {
    window.addEventListener('online', setOnlineStatus)
    window.addEventListener('offline', setOnlineStatus)

    return () => {
      window.removeEventListener('online', setOnlineStatus)
      window.removeEventListener('offline', setOnlineStatus)
    }
  }, [])

  return <div className={statusClassName}>{`${navigator.onLine ? 'Online' : 'Offline'}`}</div>
}