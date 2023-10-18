import React from 'react'
import './Header.css'
import Group from "./img/Group 1.png"
export default function Header() {
  return (
    <div className='Header'>
        <div className="logo">
            <img src = {Group} alt="photo" className='logoPhoto'/>
            <h2 className="logoName">ZIRO</h2>
        </div>
        <div className="buttons">
            <a className="home">Home</a>
            <a className="home">Pricing</a>
            <a className="home">Blog</a>
            <a className="home">Become a member</a>
            <a className="home" id='none'>About Us</a>
        </div>
        <div className="inputdiv">
            <input type="text" className='input'/>
            <button className='Search'>Search</button>
        </div>
        <div className="SignInUp">
            <p className='someTxt'><span>Login</span>/Sign Up</p>
        </div>
    </div>
  )
}
