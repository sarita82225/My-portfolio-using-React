import React from 'react'
import './About.css'
import picture from '../../assets/picture.jpg'

function About() {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
           

        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={picture} alt=" " />
            </div>
            
            <div className="about-right">
                <div className="about=para">
                    <p>I am an experiened front end developer with 9 years of experience</p>
                    <p>I worked with many IT companies </p>

                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Angular</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>React Js</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Java Script</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
        <div className="about-achievement">
            <h1>9+</h1>
            <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
        <div className="about-achievement">
            <h1>9+</h1>
            <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            

        </div>
        </div>
    
  )
}

export default About