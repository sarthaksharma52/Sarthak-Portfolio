import React from 'react'
import Home from '../components/Home'
import Sayhello from '../components/Sayhello'
import About from '../components/About'
import ProjectsImg from './ProjectsImg'




const App = () => {
  return (
    <div>
      <div className="container">
      <Home/>
      <About/>
      <ProjectsImg/>
      <Sayhello/>
      </div>
    </div>

  )
}

export default App
