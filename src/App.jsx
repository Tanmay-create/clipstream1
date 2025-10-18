import React from 'react'
import Navbar from './components/navbar'
import Home from './pages/Home'
import Video from './pages/Video'
import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'

const App = () => {
  const [sidebar, setSidebar]=useState(true);
  
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>}></Route>
        <Route path="/:videoId/:tag" element={<Video/>}></Route>
      </Routes>

    </div>
  )
}

export default App
