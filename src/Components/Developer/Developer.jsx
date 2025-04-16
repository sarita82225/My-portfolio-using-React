import React from 'react'
import './Developer.css'
import picture from '../../assets/picture.jpg'

function Developer() {
  return (
    <div className="developer">
        <img src= {picture} alt= "" />
        <h1><span>I am Sarita Bhardwaj,</span> frontend developer based in Italy.</h1>
        <p1>I am a frontend developer from Bari, Italy with 9 years of experience in multiple companies like Hcl, Global logic and Wipro etc.</p1>
        <div className="dev-action">
        <div className="dev-connect"> Connect with me</div>
        <div className="dev-resume">My resume</div>
        </div>
    </div>
  )
}

export default Developer