import React from 'react'
import "./CentralPart.css"
import Col2 from "./img/Group 201.png"
import But from "./img/Group 5.png"
export default function CentralPart() {
  return (
    <div className='CentarlPart'>
        <div className="colum1">
            <h2 className="SomeTxt">Find out talented<br/><span className='SomeTxtSpan'>freelancer</span> with <br/>better review faster.</h2>
            <p className='SomeTextP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/>quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
           
            <div className="Demo"> <button className='Dico'>Discover Now</button>
              <button className='demoBut'><img src={But} alt="photo" className='but' /></button>
              <p className='demoWatch'>Watch Demo</p>
            </div>
        </div>
        <div className="colum2">
          <img src={Col2} alt="Photo" className='BigImg' />
        </div>
    </div>
  )
}
