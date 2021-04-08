import React, { useEffect, useState} from 'react'
import './InstallPwa.css'

export default function InstallPwa() {
  const [beforeInstallEvent, setBeforeInstallEvent] = useState()

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', event => {
      console.log('beforeinstallprompt event=', event)
      // Save for later
      setBeforeInstallEvent(event)
    });

  }, [])

  function install() {
    console.log('install function called')
    beforeInstallEvent.prompt()

    beforeInstallEvent.userChoice.then((choice) => {
      if (choice.outcome === 'accepted') {
        console.log('User accepted the install prompt', choice)
      } else {
        console.log('User dismissed the install prompt', choice)
      }

      // Set to null so that the install button will not appear
      setBeforeInstallEvent(null)
    });

  }

  return (beforeInstallEvent ? <button className="pwaButtonInstall" type="button" onClick={install}>Install for offline use</button> : <span>PWA Already installed</span>)
}