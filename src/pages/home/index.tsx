import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="m-16">
        Home Page
      </div>
    </div>
  )
}
