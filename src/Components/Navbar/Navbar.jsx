import React from 'react'
import  "./Navbar.css"
import name from '../../assets/name.jpg'

function Navbar() {
  return (
    <div className="navbar">
       <img class="nameImg" src={name}  alt=""   />
        <ul className= "nav-menu">
            <li> Home</li>
            <li> About Me</li>
            <li> Services</li>
            <li> Portfolio</li>
            <li> Contact</li>
        </ul>
        <div className= "nav-connect"> Connect with Me</div>
    </div>
  )
}

export default Navbar