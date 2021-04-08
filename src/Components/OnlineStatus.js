import React from 'react'
import './OnlineStatus.css'
import useOnlineStatus from './useOnlineStatus'
import InstallPwa from './InstallPwa'
import './OnlineStatus.css'

export default function OnlineStatus() {
  const isOnline = useOnlineStatus()

  return <div className="onlineStatusContainer" status={isOnline ? 'online' : 'offline'}>
    {`${isOnline ? 'Online' : 'Offline'}`}
    <InstallPwa />
  </div>
}