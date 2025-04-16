import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Developer from './Components/Developer/Developer'
import About from './Components/About/About'
import Serv from './Components/Serv/Serv'
import MyWork from './Components/MyWork/MyWork'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Developer/>
      <About/>
      <Serv/>
      <MyWork/>
      
    </div>
  )
}

export default App