import React from 'react'
import "./HomePage.css"
import Header from "../Header/Header"
import CentralPart from '../CentralPart/CentralPart'

export default function HomePage() {
  return (
    <div className='wrap'>
      <Header/>
      <CentralPart/>
    </div>
  )
}
