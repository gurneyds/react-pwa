import { useEffect, useState } from 'react'
import './OnlineStatus.css'

export default function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(() => navigator.onLine)

  function setOnlineStatus(event) {
    setIsOnline(event.type === 'online')
  }

  useEffect(() => {
    window.addEventListener('online', setOnlineStatus)
    window.addEventListener('offline', setOnlineStatus)

    return () => {
      window.removeEventListener('online', setOnlineStatus)
      window.removeEventListener('offline', setOnlineStatus)
    }
  }, [])

  return isOnline
}