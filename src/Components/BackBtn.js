import React from 'react'

export default function BackBtn() {
  return <button style={{ width: 120 }} type="button" onClick={() => window.history.back()}>{'<== Back'}</button>
}