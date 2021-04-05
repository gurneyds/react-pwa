import React, { useEffect, useState } from 'react'

export default function OnlineStatus() {
  const [online, setOnline] = useState(() => true)

  function setOnlineStatus(event) {
    console.log('setting status:', event)
    setOnline(event.type === 'online')
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

  return <span style={online ? { backgroundColor: "green" } : { backgroundColor: "red" }}>{`${navigator.onLine ? 'Online' : 'Offline'}`}</span>
}