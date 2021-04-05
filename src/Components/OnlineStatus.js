import React, { useEffect, useState } from 'react'
import './OnlineStatus.css'

export default function OnlineStatus() {
  const [statusClassName, setStatusClassName] = useState(() => 'online')

  function setOnlineStatus(event) {
    console.log('setting status:', event)
    setStatusClassName(event.type) // online or offline
  }

  useEffect(() => {
    window.addEventListener('online', setOnlineStatus)
    window.addEventListener('offline', setOnlineStatus)

    return () => {
      console.log('unmounting HomePage')
      window.removeEventListener('online', setOnlineStatus)
      window.removeEventListener('offline', setOnlineStatus)
    }
  }, [])

  return <div className="container">
    <span className={statusClassName}>{`${navigator.onLine ? 'Online' : 'Offline'}`}</span>
  </div>
}