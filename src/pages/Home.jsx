import React from 'react'
import Sidebar from '../components/sidebar'
import Feed from '../components/Feed'
import '../css/Home.css'

const Home = ({sidebar}) => {
  return (
    <div className="container">
      <Sidebar sidebar={sidebar}/>
      <Feed sidebar={sidebar}/>
    </div>
  )
}

export default Home
